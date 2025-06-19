
import '../Styles/Components/carta.scss';


export const Carta = ({carta}) => {

   
  return (
   
       
       <div className='carta-container d-flex flex-column'>
        <div className="hex-container animate__animated animate__zoomIn" 
             style={{backgroundImage: `url(${carta.reverso})`, 
                     backgroundSize: 'cover', 
                     backgroundPosition: 'center'
                     }}>                
        </div>           
    </div> 
  )
}
