import './Login.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
const Login = ()=> {
    return (
        <div className={'container'}>

            

              <div className={'card'}>

        
            <div className={'title'}>
                <span className={'title-text'}>Login</span>
                
            </div>

           <div className={'inputs'}>
               <input className={'input'} placeholder={'Login'}></input> 
               <input className={'input'}  placeholder={'Password'}></input>
           </div>

           <div className={'actions'}>
<div className={'seconnecter'}>
<span>Se connecter</span>
</div>

<div className={'register'}>
<Link to="/register">Sinscrire</Link>
</div>

           </div>

           </div>

        </div>
    )
}
export default Login;


