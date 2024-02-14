import { motion } from "framer-motion";

export default function ({ name, population, region, capital, image }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="card">
      <img src={image} alt="" />
      <div className="card-title">{name}</div>
      <div className="card-description">
        <div>
          <strong>Population:</strong>
          {population}
        </div>
        <div>
          <strong>Region:</strong>
          {region}
        </div>
        <div>
          <strong>Capital:</strong>
          {capital}
        </div>
      </div>
    </motion.div>
  );
}
