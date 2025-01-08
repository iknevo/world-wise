import "./CityList.scss";
import Spinner from "../Spinners/Spinner";
import CityItem from "./CityItem";
import Message from "../Message/Message";
import { useCities } from "../../contexts/CitiesContext";
export default function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className="city-list w-full h-[65vh] list-none overflow-x-hidden overflow-y-scroll flex flex-col gap-6">
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
