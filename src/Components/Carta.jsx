
import { useEffect, useRef } from 'react';
import '../Styles/Components/carta.scss';


export const Carta = ({carta, setActiveCarta, setHexRect}) => {

    const {cualidades, estadoVirtuoso, estadoDesvirtuoso, documento} = carta;

    const hexRef = useRef();

  useEffect(() => {
    if (hexRef.current && setHexRect) {
      const rect = hexRef.current.getBoundingClientRect();
      setHexRect(rect);
    }
  }, [setHexRect]);

  return (
   
       
       <div className='carta-container d-flex flex-column'>
        <div className="hex-container animate__animated animate__flipInY " 
             ref={hexRef} 
             onDoubleClick={() =>setActiveCarta(false)}
             style={{backgroundImage: `url(${carta.imagen})`, 
                     backgroundSize: 'cover', 
                     backgroundPosition: 'center'
                     }}>
            <div className={`background-true`}>
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
                <div className="cards d-flex flex-column">
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
                   <button className='btn' style={{width: 'fit-content', margin: '0 auto', marginTop: '20px', background:'#560D31', color:'white'}}>
                  
                    <a href={documento}  download style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color:'white'}}>
                        <span className='icon'>Descargar</span>
                    </a>
                   </button>
                </div>  
                      
            </div>       
                      
        </div>           
    </div> 
  )
}
