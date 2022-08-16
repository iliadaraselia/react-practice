import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { naname, surname } from "./object.js";

import Kontaqti from "./konta";

console.log(naname, surname);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Kontaqti
      img="https://cdn.technadu.com/wp-content/uploads/2022/02/Kitagawa-1536x864.jpg"
      name="kaxa"
      phone=" 123-456-7890"
      email="kaxa@gmail.com"
    />
    <Kontaqti
      img="https://cdn.technadu.com/wp-content/uploads/2022/02/Kitagawa-1536x864.jpg"
      name="kaxa"
      phone=" 123-456-7890"
    />
    <Kontaqti
      img="https://cdn.technadu.com/wp-content/uploads/2022/02/Kitagawa-1536x864.jpg"
      name="kaxa"
      email="kaxa@gmail.com"
    />
    <Kontaqti
      img="https://cdn.technadu.com/wp-content/uploads/2022/02/Kitagawa-1536x864.jpg"
      phone=" 123-456-7890"
      email="kaxa@gmail.com"
    />
  </>
);
