import { useState } from "react";
import "./style.css";
import { PopImg } from "src/components/PopImg";
import img1 from "img/system/img1.png";
import img2 from "img/system/img2.png";
import img3 from "img/system/img3.png";
import img4 from "img/system/img4.png";
import img5 from "img/system/img5.png";

export const System = () => {
  const [popImage, setPopImage] = useState(null);

  const SYSTEM_IMAGES = [
    {
      img: img1,
      name: "inicio",
    },
    {
      img: img2,
      name: "inicio",
    },
    {
      img: img3,
      name: "inicio",
    },
    {
      img: img4,
      name: "inicio",
    },
    {
      img: img5,
      name: "inicio",
    },
  ];

  const handleImage = (element) => {
    setPopImage(element);
  };

  return (
    <div className="sis">
      <h1>Sistema Implementado</h1>
      <div className="enlace">
        <div>
          <a href="https://github.com/Marianne-90/proyecto-2" target="_blank">
            ir a GitHub
          </a>
        </div>
        <div>
          <a href="https://proyect-2-strudel.netlify.app/" target="_blank">
            Página Desplegada
          </a>
        </div>
      </div>
      <div className="info">
        <p>
          El sistema implementado es un sistema web para el restaurante Strudel
          un restaurante de comida urbana ubicado en la ciudad de Puebla, la
          página cuenta con una página de inicio con una sub página de
          navegación y galería de fotos, así como un carrusel rotativo de
          promociones. A su vez, cuanta con los diferentes menús actualizados
          del restaurante un sistema para añadir platillos y solicitarlos a
          través de WhatsApp. Finalmente, cuenta con una página de contacto y
          ubicación y una página en la cual se pueden añadir ofertas de trabajo
          a las cuales los usurarios pueden aplicar.
        </p>
        <p>
          Es importante mencionar que el sistema web cuenta con aviso de
          privacidad y términos y condiciones mismo que deben ser aceptados por
          los usuarios antes de compartir cualquier información personal.
          Además, los usuarios son advertidos de no compartir ninguna
          información bancaria a través de WhatsApp y que el pago será a contra
          entrega.
        </p>
      </div>
      <hr />
      <div className="gallery">
        {SYSTEM_IMAGES.map((element, index) => {
          return (
            <div
              className="img"
              key={index}
              onClick={() => handleImage(element)}
            >
              <img src={element.img} alt={element.name} />
            </div>
          );
        })}
      </div>
      {popImage && <PopImg image={popImage} setPopImage={setPopImage} />}
    </div>
  );
};
