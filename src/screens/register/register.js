import './register.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

const Register = ()=> {
    return (
        <div className={'container'}>

              <div className={'card'}>

        
            <div className={'title'}>
                <span className={'title-text'}>Register</span>
                
            </div>

           <div className={'inputs'}>

               <input className={'input'} placeholder={'Nom'}></input>
               <input className={'input'} placeholder={'prenom'}></input> 
               <input className={'input'}  placeholder={'Password'}></input>
           </div>

           <div className={'actions'}>



<div className={'seconnecter'}>
<span>Sinscrire</span>
</div>

<div className={'register'}>
<Link to="/login">Se connecter</Link>
</div>

           </div>

           </div>

        </div>
    )
        }

        export default Register;