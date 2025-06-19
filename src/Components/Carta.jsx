
import '../Styles/Components/carta.scss';


export const Carta = ({carta}) => {

   
  return (
   
       
       <div className='carta-container d-flex flex-column animate__animated animate__zoomIn'>
        <div className="hex-container " 
             style={{backgroundImage: `url(${carta.reverso})`, 
                     backgroundSize: 'cover', 
                     backgroundPosition: 'center'
                     }}>                
        </div>           
    </div> 
  )
}
