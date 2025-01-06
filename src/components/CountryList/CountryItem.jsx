// import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className="flex flex-col items-center gap-1 text-xxl font-semibold bg-dark-3 rounded-xl py-4 px-8 border-l-5 border-brand-orange">
      <span className="text-5xl leading-none">{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
