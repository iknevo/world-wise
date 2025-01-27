/* eslint-disable react-refresh/only-export-components */
// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.scss";
import Button from "../Buttons/Button";
import { BackButton } from "../Buttons/BackButton";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../../hooks/useUrlPosition";
import Message from "../Message/Message";
import Spinner from "../Spinners/Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../../contexts/CitiesContext";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
const GEO_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const { createCity, isLoading } = useCities();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("");
  const [isLoadingGeocodeing, setIsLoadingGeocoding] = useState(false);
  const [geocodingError, setGeocodingError] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [lat, lng] = useUrlPosition();
  const navigate = useNavigate();
  useEffect(
    function () {
      async function fetchCityData() {
        try {
          if (!lat && !lng) return;
          setGeocodingError("");
          setIsLoadingGeocoding(true);
          const res = await fetch(
            `${GEO_URL}?latitude=${lat}&longitude=${lng}`
          );
          if (!res.ok)
            throw new Error("Can't load city data , Please try again later.");
          const data = await res.json();
          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city, click somewhere else 🙃"
            );
          setCityName(data.city || data.locality || "");
          setCountry(data.countryName || "");
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );
  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
    await createCity(newCity);
    navigate("/app/cities");
  }

  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map." />;
  if (isLoadingGeocodeing) return <Spinner />;
  if (geocodingError) return <Message message={geocodingError} />;
  return (
    <form
      className={`${styles.form} ${isLoading && styles.loading}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
          id="date"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
