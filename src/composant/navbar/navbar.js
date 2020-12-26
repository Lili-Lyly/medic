import "./navbar.css"
import {Link} from "react-router-dom";
import car from  '../../assets/images/noun_Truck_3667956.png'
import phone from '../../assets/images/noun_Telephone_451622.png'

function Navbar() {
    return (
        <div>
            <div className={'Navbar-container'}>

                <div className={'navbar-left'}>
                    <img src={phone} className={'phone'}/>
                    <span>
                            Appelez-Nous au : 06 98 76 78 98
                    </span>
                     <img src={car} className ={'car'}/>
                    <span>Livraison Gratuite des 50 $ dachat</span>
                </div>

                <div className={'navbar-right'}>

                    <div className={'Navbar-item'}>
                        <span>Blog</span>
                    </div>

                    <div className={'Navbar-item'}>
                        <span>Contactez-Nous</span>
                    </div>

                    <div className={'Navbar-item'}>

                        <Link to="/login">Login</Link>
                    </div>

                </div>
            </div>







        </div>
    );
}

export default Navbar;