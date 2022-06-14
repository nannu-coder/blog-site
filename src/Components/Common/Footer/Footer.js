import React from 'react';

const Footer = () => {
    return (
        <div style={{textAlign:'center', padding:'18px 0', background:"#273746"}}>
            <p style={{color:'#ffffff', margin:0}}>All Right Reseerved &copy; {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;