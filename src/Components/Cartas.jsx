import React, { useRef } from "react";
import imagenes from "../Assets/imagenes";
import { cartasData } from "../Data/Cartas/cartasData";

export const Cartas = ({ setCarta, girandoIndex, setAnimData, animData }) => {
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

  const handleClick = (img, idx) => {
    const carta = cartas.find(carta => carta.imagen === img);

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
              onClick={() => handleClick(imagenes.hestia, 0)}
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
              onClick={() => handleClick(imagenes.artemisa, 1)}
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
              onClick={() => handleClick(imagenes.hera, 2)}
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
              onClick={() => handleClick(imagenes.atenea, 3)}
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
              onClick={() => handleClick(imagenes.persefone, 4)}
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
              onClick={() => handleClick(imagenes.demeter, 5)}
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
              onClick={() => handleClick(imagenes.afrodita, 6)}
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