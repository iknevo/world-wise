import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  console.log(position);
  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className="flex items-center gap-[1.6rem] bg-dark-3 rounded-xl py-4 px-8 border-l-5 border-brand-green cursor-pointer text-inherit no-underline city__item--active"
      >
        <span className="text-[2.6rem] leading-none">{emoji}</span>
        <h3 className="text-xxl font-semibold mr-auto">{cityName}</h3>
        <time className="text-xl">({formatDate(date)})</time>
        <button className="h-8 w-8 rounded-full border-none bg-dark-2 text-light-2 text-2xl font-normal cursor-pointer transition-all duration-200 flex justify-center items-center hover:bg-brand-orange hover:text-dark-2">
          &times;
        </button>
      </Link>
    </li>
  );
}
