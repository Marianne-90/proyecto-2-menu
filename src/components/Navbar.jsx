import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";
import { handleDirection } from "utils/navigationUtils";
import logo from "img/udgvirtual_logo.png";

export const Navbar = () => {
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleDownload = () => {
    try {
      // Ruta relativa al archivo ZIP
      const filePath = "./files/proyecto-2.zip";

      // Crear un enlace para descargar el archivo
      const anchor = document.createElement("a");
      anchor.href = filePath;
      anchor.download = "proyecto-2.zip";
      anchor.click();
    } catch (error) {
      alert("error al descargar el archivo");
      console.error("Error al descargar el archivo", error);
    }
  };

  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="logo"
        onClick={() => handleDirection("home", navigate)}
      />
      <button
        className={isActive("/") || isActive("/home") ? "active" : ""}
        onClick={() => handleDirection("home", navigate)}
      >
        Inicio
      </button>
      <button
        className={isActive("/doc") ? "active" : ""}
        onClick={() => handleDirection("doc", navigate)}
      >
        Documentos
      </button>
      <button onClick={handleDownload} id="download">
        Descargar Zip
      </button>
      <button
        className={isActive("/modifications") ? "active" : ""}
        onClick={() => handleDirection("modifications", navigate)}
      >
        Modificaciones
      </button>
      <button
        className={isActive("/system") ? "active" : ""}
        onClick={() => handleDirection("system", navigate)}
      >
        Sistema
      </button>
    </nav>
  );
};
