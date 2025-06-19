import imagenes from "../Assets/imagenes";
import { cartasData } from "../Data/Cartas/cartasData";

export const Cartas = ({ setCarta, setActiveCarta }) => {
  const { cartas } = cartasData();
  const handleClick = (img) => {
    const carta = cartas.find(carta => carta.imagen === img);     
    setCarta(carta);
    setActiveCarta(true);
  };

  return (
    <div className="cartas d-flex animate__animated animate__zoomIn">
      <div className='panel d-flex flex-row'>
        <div className='fila d-flex flex-column'>
          <div className='items d-flex flex-column'>
            <img className='carta' src={imagenes.hestia} alt="Hestia"  onClick={() => handleClick(imagenes.hestia)}/>          
            <img className='carta' src={imagenes.artemisa} alt="Hestia"  onClick={() => handleClick(imagenes.artemisa)}/>         
          </div>        
        </div>       
        <div className='fila d-flex flex-column'>
          <div className='items d-flex flex-column'>           
            <img className='carta' src={imagenes.hera} alt="Hestia"  onClick={() => handleClick(imagenes.hera)}/>     
            <img className='carta' src={imagenes.atenea} alt="Hestia"  onClick={() => handleClick(imagenes.atenea)}/>   
            <img className='carta' src={imagenes.persefone} alt="Hestia"  onClick={() => handleClick(imagenes.persefone)}/>         
          </div>
        </div>        
        <div className='fila d-flex flex-column'>
          <div className='items d-flex flex-column'>          
            <img className='carta' src={imagenes.demeter} alt="Hestia"  onClick={() => handleClick(imagenes.demeter)}/>   
            <img className='carta' src={imagenes.afrodita} alt="Hestia"  onClick={() => handleClick(imagenes.afrodita)}/>        
          </div>
        </div>
      </div>
    </div>
  );
};