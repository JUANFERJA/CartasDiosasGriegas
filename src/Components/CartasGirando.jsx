import { useRef } from "react";
import imagenes from "../Assets/imagenes";
import { cartasData } from "../Data/Cartas/cartasData";

export const CartasGirando = ({ setCarta, girandoIndex, setAnimData, animData, setTransparente }) => {
  const { cartas } = cartasData();

  // Referencias para cada carta
  const hestiaRef = useRef();
  const artemisaRef = useRef();
  const heraRef = useRef();
  const ateneaRef = useRef();
  const persefoneRef = useRef();
  const demeterRef = useRef();
  const afroditaRef = useRef();

  // Array para facilitar acceso por índice
  const refsArray = [
    hestiaRef,
    artemisaRef,
    heraRef,
    ateneaRef,
    persefoneRef,
    demeterRef,
    afroditaRef
  ];

  const handleClick = (e, img, idx, bandera) => {
    const carta = cartas.find(carta => carta.imagen === img);   
    e.preventDefault(); // Prevenir el menú contextual del clic derecho
    setTransparente(bandera);
    // Calcular desplazamiento al centro de la pantalla
    const cartaRect = refsArray[idx].current.getBoundingClientRect();
    const centerX = window.innerWidth - 700;
    const centerY = window.innerHeight / 2;
    const cartaCenterX = cartaRect.left + cartaRect.width / 2;
    const cartaCenterY = cartaRect.top + cartaRect.height / 2;
    const translateX = centerX - cartaCenterX;
    const translateY = centerY - cartaCenterY;

    setAnimData({ idx, translateX, translateY });
    setCarta(carta, idx);
  };

  return (
    <div className="cartas d-flex">
      <div className='panel d-flex flex-row'>
        <div className='fila d-flex flex-column'>
          <div className='items d-flex flex-column'>
            <img
              ref={hestiaRef}
              className={`carta${girandoIndex === 0 ? " girando" : ""}`}
              src={imagenes.hestia}
              alt="Hestia"
              onClick={(e) => handleClick(e, imagenes.hestia, 0, false)}
              onContextMenu={(e) => handleClick(e, imagenes.hestia, 0, true)}
              style={
                girandoIndex === 0 && animData
                  ? { "--tx": `${animData.translateX}px`, "--ty": `${animData.translateY}px` }
                  : {}
              }
            />
            <img
              ref={artemisaRef}
              className={`carta${girandoIndex === 1 ? " girando" : ""}`}
              src={imagenes.artemisa}
              alt="Artemisa"
              onClick={(e) => handleClick(e, imagenes.artemisa, 1, false)}
              onContextMenu={(e) => handleClick(e, imagenes.artemisa, 1, true)}
              style={
                girandoIndex === 1 && animData
                  ? { "--tx": `${animData.translateX}px`, "--ty": `${animData.translateY}px` }
                  : {}
              }
            />
          </div>
        </div>
        <div className='fila d-flex flex-column'>
          <div className='items d-flex flex-column'>
            <img
              ref={heraRef}
              className={`carta${girandoIndex === 2 ? " girando" : ""}`}
              src={imagenes.hera}
              alt="Hera"
              onClick={(e) => handleClick(e, imagenes.hera, 2, false)}
              onContextMenu={(e) => handleClick(e, imagenes.hera, 2, setTransparente, true)}
              style={
                girandoIndex === 2 && animData
                  ? { "--tx": `${animData.translateX}px`, "--ty": `${animData.translateY}px` }
                  : {}
              }
            />
            <img
              ref={ateneaRef}
              className={`carta${girandoIndex === 3 ? " girando" : ""}`}
              src={imagenes.atenea}
              alt="Atenea"
              onClick={(e) => handleClick(e, imagenes.atenea, 3, false)}
              onContextMenu={(e) => handleClick(e, imagenes.atenea, 3, true)}
              style={
                girandoIndex === 3 && animData
                  ? { "--tx": `${animData.translateX}px`, "--ty": `${animData.translateY}px` }
                  : {}
              }
            />
            <img
              ref={persefoneRef}
              className={`carta${girandoIndex === 4 ? " girando" : ""}`}
              src={imagenes.persefone}
              alt="Persefone"
              onClick={(e) => handleClick(e, imagenes.persefone, 4, false)}
              onContextMenu={(e) => handleClick(e, imagenes.persefone, 4, true)}
              style={
                girandoIndex === 4 && animData
                  ? { "--tx": `${animData.translateX}px`, "--ty": `${animData.translateY}px` }
                  : {}
              }
            />
          </div>
        </div>
        <div className='fila d-flex flex-column'>
          <div className='items d-flex flex-column'>
            <img
              ref={demeterRef}
              className={`carta${girandoIndex === 5 ? " girando" : ""}`}
              src={imagenes.demeter}
              alt="Demeter"
              onClick={(e) => handleClick(e, imagenes.demeter, 5, false)}
              onContextMenu={(e) => handleClick(e, imagenes.demeter, 5, true)}
              style={
                girandoIndex === 5 && animData
                  ? { "--tx": `${animData.translateX}px`, "--ty": `${animData.translateY}px` }
                  : {}
              }
            />
            <img
              ref={afroditaRef}
              className={`carta${girandoIndex === 6 ? " girando" : ""}`}
              src={imagenes.afrodita}
              alt="Afrodita"
              onClick={(e) => handleClick(e, imagenes.afrodita, 6, false)}
              onContextMenu={(e) => handleClick(e, imagenes.afrodita, 6, true)}
              style={
                girandoIndex === 6 && animData
                  ? { "--tx": `${animData.translateX}px`, "--ty": `${animData.translateY}px` }
                  : {}
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};