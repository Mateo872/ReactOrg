import "./MyOrg.css";
import { useState } from "react";

const MyOrg = () => {
  const [name, updateName] = useState();
  const [show, updateShow] = useState(true);

  const handleClick = () => {};

  return (
    <section>
      <h3>Mi organización {name}</h3>
      <img src="./img/add.png" alt="add" />
    </section>
  );
};

export default MyOrg;
