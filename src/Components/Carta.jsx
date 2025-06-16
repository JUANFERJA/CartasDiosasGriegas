
import { useEffect, useRef } from 'react';
import '../Styles/Components/carta.scss';


export const Carta = ({carta, setActiveCarta, setHexRect}) => {

    const {/* nombre, imagen, reverso, */ cualidades, estadoVirtuoso, estadoDesvirtuoso} = carta;

    const hexRef = useRef();

  useEffect(() => {
    if (hexRef.current && setHexRect) {
      const rect = hexRef.current.getBoundingClientRect();
      setHexRect(rect);
    }
  }, [setHexRect]);

  return (
    <div className='carta-container d-flex flex-column'>
        <div className="hex-container animate__animated animate__flipInY " ref={hexRef} onDoubleClick={() =>setActiveCarta(false) }>
                <div className="cualidades d-flex">
                     <ul>
                        {
                            cualidades.map(cualidad =>(
                                <li>
                                    <span>⚙️</span>{cualidad}
                                </li>                       
                            ))                    
                        }
                     </ul>
                </div>
                <div className='texto-carta d-flex'>
                    <span>
                        Su manera de gestionar en los aspectos físico, intelectual, espiritual y social, es:
                    </span>
                </div>
                <div className="cards d-flex">
                   <div className='container-cards d-flex flex-row'>
                        <div className="card-virtuoso d-flex flex-column">
                            <div className="titulo-habilidades">Estado virtuoso</div>
                            <div className="card">                        
                            <ul>
                                {
                                    estadoVirtuoso.map(virtud => (
                                        <li className='d-flex flex-row'>
                                            <span className='icon'>⚙️</span>
                                            <span className='descripcion'>{virtud}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            </div>
                        </div>
                        <div className="card-desvirtuado d-flex flex-column">
                            <div className="titulo-habilidades">Estado desvirtuado</div>
                            <div className="card">                        
                                <ul>
                                    {
                                        estadoDesvirtuoso.map(virtud => (
                                            <li className='d-flex flex-row'>      
                                                <span className='icon'>⚙️</span>                               
                                                <span className='descripcion'>{virtud}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                   </div>
               </div>
        </div>           
    </div>
  )
}
