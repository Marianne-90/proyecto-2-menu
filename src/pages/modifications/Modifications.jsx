import "./style.css";
import { Table } from "components/Table";

import { MODIFICATIONS } from "data/modifications/modifications.js";
export const Modifications = () => {
  return (
    <div className="mod">
      <h1>Modificaciones</h1>
      <hr />
      <p>
        Este apartedo son las modificaciones finales realizadas durante el
        proceso de pruebas.
      </p>
      <br />
      <Table table={MODIFICATIONS}/>
    </div>
  );
};
