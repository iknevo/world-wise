import styles from "./CountryList.module.css";
import Spinner from "../Spinners/Spinner";
import CountryItem from "./CountryItem";
import Message from "../Message/Message";
import { useCities } from "../../contexts/CitiesContext";
export default function CountryList() {
  const { cities, isLoading } = useCities();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  // console.log(countries, "count");
  if (isLoading) return <Spinner />;
  if (countries.length === 0)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={i} />
      ))}
    </ul>
  );
}
