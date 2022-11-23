import React from 'react';
import './Loader.css'
const Loader = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: window.innerHeight - 50}}>
            <div className='lds-spinner'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loader;