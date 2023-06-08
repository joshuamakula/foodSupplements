import React from 'react';
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();

    const handleHome = () => {navigate("/")}

    return ( 
        <div className='container header-title'>
            <h1 className='' onClick={handleHome} style={{cursor:'pointer'}}>Food Supplements</h1>
        </div>
     );
}
 
export default Header;