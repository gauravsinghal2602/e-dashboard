import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () =>{
        // console.warn("apple");
        localStorage.clear();
        navigate('/signup')
    }
    return(
        
        <div >
                <img alt="logo" className='logo' src="https://logo.com/image-cdn/images/kts928pd/production/8d495d73d3f314ceeb07b9b4bee925a7e18630d0-500x375.webp?w=1080&q=72" />
                {auth ? <ul className='nav-ul'>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Products</Link></li>
                    <li><Link to="/update">Update Products</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li>
                </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li><Link to="/signup">Logout</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
        
    )
}

export default Nav;