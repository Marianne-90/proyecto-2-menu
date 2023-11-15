import "./style.css";
import { useNavigate } from "react-router-dom";
import { handleDirection } from "utils/navigationUtils";

export const Navbar = () => {
    const navigate = useNavigate();

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
      <button onClick={() => handleDirection("home", navigate)}>Inicio</button>
      <button onClick={() => handleDirection("doc", navigate)}>Documentos</button>
      <button onClick={handleDownload}>Descargar Zip</button>
      <button onClick={() => handleDirection("modifications", navigate)}>Modificaciones</button>
      <button onClick={() => handleDirection("system", navigate)}>Sistema</button>
    </nav>
  );
};
