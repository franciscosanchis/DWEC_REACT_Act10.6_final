import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";
import Convert from "./Convert";

const Translate = () => {
  const options = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" }
  ];
  const [selected, setSelected] = useState(options[0]);
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [term]);

  const renderedResults = () => {
    return (
      <div className="ui form">
        <div className="field">
          <label>Introduce texto:</label>
          <input
            className="input"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          ></input>
          <DropDown
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            component={"idioma"}
          />
          <Convert term={debouncedTerm} lang={selected.value} />
        </div>
      </div>
    );
  };
  return renderedResults();
};

export default Translate;
