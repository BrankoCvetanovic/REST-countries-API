import { useContext, useState, useRef, useEffect } from "react";
import { CountriesContext } from "../context/CountriesContext";
import { motion, AnimatePresence } from "framer-motion";

const OPTIONS = ["Asia", "Africa", "Americas", "Europe", "Oceania"];

export default function AreaSelector() {
  const [isOpen, seIsOpen] = useState(false);

  const { handleAreaSearch } = useContext(CountriesContext);

  function handleDropDown() {
    seIsOpen((prev) => (prev ? false : true));
  }

  const ref = useRef(null);

  return (
    <>
      <div className="search-area">
        <button onClick={handleDropDown}>
          Filter By Region
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
            {" "}
            &#9650;
          </motion.span>
        </button>
        {isOpen && (
          <AnimatePresence>
            <motion.ul
              ref={ref}
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -70, opacity: 0 }}
              className="options"
            >
              {OPTIONS.map((item) => (
                <li key={item}>
                  <button onClick={() => handleAreaSearch(item)}>{item}</button>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        )}
      </div>
    </>
  );
}
