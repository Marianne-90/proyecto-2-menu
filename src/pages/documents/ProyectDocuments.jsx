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
      <h2>PRODUCT BACKLOG</h2>
      {/* <Table table={ROLES} /> */}
      <h2>FORMATO SPRINT:</h2>
      {/* <Table table={ROLES} /> */}
      <h2>REFERENCIAS</h2>
      <ul className="referencias">
        <li>Menzinsky A. (2018) “Historias de Usuario”. Scrum Manager</li>
        <li>Schwaber K. (2013) “La Guía de Scrum”</li>
        <li>
          CECyT Digital Harbor. (6 abr. 2018). Ejemplo de Product Backlog
          (Taller Mecanico). [Archivo de video].
          https://www.youtube.com/watch?time_continue=5&v=hIPHROMebRs&embeds_referring_euri=https%3A%2F%2Fdesarrolloweb.udgvirtual.udg.mx%2F&embeds_referring_origin=https%3A%2F%2Fdesarrolloweb.udgvirtual.udg.mx&source_ve_path=NzY3NTg&feature=emb_yt_watermark
        </li>
        <li>
          JorgeRuizAgile (11 ago. 2018). El Product Backlog de forma sencilla |
          Scrum. [Archivo de video]. Recuperado de
          https://www.youtube.com/watch?v=JuIVHk1wvcw&t=2s&ab_channel=JorgeRuizAgile
        </li>
      </ul>
    </div>
  );
};
