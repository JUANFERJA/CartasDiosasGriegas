
import '../Styles/Components/carta.scss';


export const Carta = ({carta}) => {

   
  return (
   
       
       <div className='carta-container d-flex flex-column animate__animated animate__zoomIn'>
        <img className="hex-container " src={carta.reverso}/>               
             
    </div> 
  )
}
