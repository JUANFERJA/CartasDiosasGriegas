import '../Styles/Pages/cartasPage.scss';
import { useState } from 'react';
import { Cartas } from '../Components/Cartas.jsx';
import { Carta } from '../Components/Carta.jsx';

export const CartasPage = () => {
    const [activeCarta, setActiveCarta] = useState(false);
    const [carta, setCarta] = useState();
    let contenido = activeCarta ? `¡Descarga la ficha de tu Diosa ${carta?.nombre}, llénala y adjúntala a tu bítacora!.` : `Haz click en la imagen que más resuene
                   contigo en este momento, esta será tu
                    arquetipo para guiarte en el camino.` ;

    return (
        <div className='contenedor d-flex flex-row'>
            <div className='texto d-flex flex-column'>
                <h1 className='titulo'>Identifica tu arquetipo...</h1>
                <p className='contenido'>{contenido}</p>
                {
                    activeCarta === true && (
                        <>
                            <button className='btn btn-descargar'>
                                <a href={carta?.documento} download style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white' }}>
                                    <span className='icon'> DESCARGAR PDF</span>
                                </a>
                            </button>
                            <button className='btn btn-regresar' onClick={() => setActiveCarta(false)}>
                                REGRESAR
                            </button>
                        </>
                    )
                }
            </div>
            {
                activeCarta === true ? (
                    <Carta carta={carta}/>
                ) : (
                    <Cartas setCarta={setCarta} setActiveCarta={setActiveCarta} />
                )
            }
        </div>
    )
}