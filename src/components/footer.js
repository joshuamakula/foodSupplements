import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return ( 
        <div className='container food-footer'>
            <small> &copy; {currentYear} Joshua Makula</small>
        </div>
     );
}
 
export default Footer;