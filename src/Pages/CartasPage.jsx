import '../Styles/Pages/cartasPage.scss';
import { useState } from 'react';
import { Cartas } from '../Components/Cartas.jsx';
import { Carta } from '../Components/Carta.jsx';

export const CartasPage = () => {
    const [activeCarta, setActiveCarta] = useState(false);
    const [carta, setCarta] = useState();
    const [girandoIndex, setGirandoIndex] = useState(null);
    const [animData, setAnimData] = useState(null);
    

    const handleSetCarta = (cartaSeleccionada, index) => {
        setGirandoIndex(index);
        setTimeout(() => {
            setGirandoIndex(null);
            setCarta(cartaSeleccionada);
            setActiveCarta(true);
        }, 500); // Duración de la animación
    };

    return (
        <div className='contenedor d-flex flex-row'>
            <div className='texto'>
                <h1 className='titulo'>Identifica tu arquetipo...</h1>
                <p className='contenido'>Haz click en la imagen que más resuene
                   contigo en este momento, esta será tu
                    arquetipo para guiarte en el camino.</p>
            </div>
            {
                activeCarta === true ? (
                    <Carta carta={carta} setActiveCarta={setActiveCarta}/>
                ) : (
                    <Cartas
                        setActiveCarta={setActiveCarta}
                        setCarta={handleSetCarta}
                        girandoIndex={girandoIndex}
                        setAnimData={setAnimData}
                        animData={animData}
                    />
                )
            }
        </div>    
    )
}