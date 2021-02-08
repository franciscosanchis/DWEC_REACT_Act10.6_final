import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/acordeon" className="item">
        Acordeon
      </Link>
      <Link href="/search" className="item">
        Búsqueda
      </Link>
      <Link href="/dropdown" className="item">
        DropDown
      </Link>
      <Link href="/translate" className="item">
        Traductor
      </Link>
    </div>
  );
};

export default Header;
