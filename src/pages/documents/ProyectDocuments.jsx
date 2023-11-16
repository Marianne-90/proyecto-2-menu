import "./style.css";
import { ROLES, SPRINTS_CALENDAR, USER_HISTORY } from "data/doc";
import { Table } from "./Table";
import { UserHistory } from "./UserHistory";

export const ProyectDocuments = () => {
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
      <br />
      <Table table={ROLES} />
      <h2>CALENDARIZACIÓN DE LOS SPRINT</h2>
      <p>
        <i>
          (Para detalle de la calendarización de las tareas, visitar el Sprint
          Backlog)
        </i>
      </p>
      <Table table={SPRINTS_CALENDAR} />
      <h2>HISTORIAS DE USUARIO</h2>
      <UserHistory table={USER_HISTORY} />
    </div>
  );
};
