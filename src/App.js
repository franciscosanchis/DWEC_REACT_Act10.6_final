import React, { useState } from "react";
import Acordeon from "./components/Acordeon";
import Search from "./components/Search";
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";
import Header from "./components/Header";
import Route from "./components/Route";

const items = [
  {
    title: "¿Qué es React",
    content: "React es un framework javascript para front-end"
  },
  {
    title: "¿Por qué utilizar React?",
    content: "React es muy utilizado en la comunidad de desarrolladores JS"
  },
  {
    title: "¿Cómo utilizamos React",
    content: "Creando componentes"
  }
];

const options = [
  { label: "El color rojo", value: "red" },
  { label: "El color verde", value: "green" },
  { label: "El color azul", value: "blue" }
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/acordeon">
        <Acordeon items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          component={"color"}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
