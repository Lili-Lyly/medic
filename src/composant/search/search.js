import React, {useState} from 'react';
import "./search.css"
import icone from '../../assets/images/icone.svg'
import panier from '../../assets/images/panier.svg'
import arrow from '../../assets/images/arrow.svg'
const Search =() => {

    const [degree, setDegree] = useState('rotate(-90deg)');
    const changeRotation = () => {
        if (degree === 'rotate(-90deg)') {
            setDegree('rotate(90deg)')
        }
        if (degree === 'rotate(90deg)') {
            setDegree('rotate(-90deg)')
        }
    }

   const reset = ()=>{
            setDegree ('rotate(-90deg)')
        }

    return (

        <div className={'barre-recherche'}>

<div className={'titre'}><i> Medicament.Com</i></div>

    <div className={'barre'}>

<input type={'search'} placeholder={'Recherche'} className={'search-input'}/>

<div className={'search-icon-container'}>
<img src={icone} className={'icone'}/>
</div>      
         
   </div>


<div className={'panier-input'}>


<div className={'left-panier'}>
<img src={panier} className={'icone-panier'}/>
<span className={'text-panier'}>Panier</span>

</div>

<img style={{transform: degree}}
     onMouseOver={changeRotation}
     onMouseLeave={reset}
     src={arrow} className={'arrow'}/>
    
</div>


</div>
    );

    }

export default Search;