
import "./search.css"
import icone from '../../assets/images/icone.svg'
const Search =() => {
    return (
        <div className={'barre-recherche'}>

<div className={'titre'}><i> Medicament.Com</i></div>

    <div className={'barre'}>

<input placeholder={'Recherche'} className={'search-input'}/>

<div className={'search-icon-container'}>
<img src={icone} className={'icone'}  />
</div>      
         
   </div>
<div className={'panier'}></div>


</div>
    );
}

export default Search;