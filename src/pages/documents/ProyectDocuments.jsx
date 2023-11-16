import "./style.css";
import { ROLES } from "data/doc"


export const ProyectDocuments = () => {
console.log(ROLES);

  return (
    <div className="doc">
      <h1>Proyecto 2 Strudel Restaurante</h1>
      <hr />
      <h2>ROLES PARA EL PROYECTO</h2>
      <span id="important">
        Importante: mis compañeros de equipo decidieron no continuar con el
        proyecto, por lo que los roles asignados están basados en personajes
        ficticios
      </span>

      <h2>CALENDARIZACIÓN DE LOS SPRINT</h2>
      <p>
        <i>
          (Para detalle de la calendarización de las tareas, visitar el Sprint
          Backlog)
        </i>
      </p>
      <div className="table">
        <tr>
          <td>Sprint</td>
          <td>fecha inicio </td>
          <td>fecha fin</td>
          <td>fecha revisión</td>
          <td>estado</td>
        </tr>

        <tr>
          <td>S001</td>
          <td>28/08/2023 </td>
          <td>5/09/2023</td>
          <td>07/09/2023</td>
          <td className="complete">Completado</td>
        </tr>

        <tr>
          <td>S002</td>
          <td>08/09/2023</td>
          <td>15/09/2023</td>
          <td>17/09/2023</td>
          <td className="complete">Completado</td>
        </tr>

        <tr>
          <td>S003</td>
          <td>25/09/2023</td>
          <td>29/09/2023</td>
          <td>04/10/2023</td>
          <td className="complete">Completado</td>
        </tr>

        <tr>
          <td>S004</td>
          <td>2/10/2023</td>
          <td>6/10/2023</td>
          <td>11/10/2023</td>
          <td className="complete">Completado</td>
        </tr>

        <tr>
          <td>S005</td>
          <td>9/10/2023</td>
          <td>13/10/2023</td>
          <td>18/10/2023</td>
          <td className="complete">Completado</td>
        </tr>

        <tr>
          <td>S006</td>
          <td>16/10/2023</td>
          <td>20/10/2023</td>
          <td>29/10/2023</td>
          <td className="complete">Completado</td>
        </tr>
      </div>
    </div>
  );
};
