import "./card.css"
import img1 from '../../assets/images/produit1.jpg'


const Card = () => {

    return (
<>
     <div className={'card'}>

                <img src={img1} className={'card-container-img'}/>

                <span className='nouv-card-description'>
                  Desinfection
                  100 $
               </span>

              <div className={'nouv-card-actions'}>

<div className={'nouv-card-btn'}>Acheter</div>

<div className={'nouv-card-btn'}>Detail</div>
              </div>
                
    </div>










</>
    )
}

export default Card;