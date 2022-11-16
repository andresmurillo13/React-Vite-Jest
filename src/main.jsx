import React from 'react'


import   { createRoot }  from 'react-dom/client';
import './style.css'


import Saludo from './Saludo';



 const root =createRoot(document.getElementById('root'));
 root.render(  <React.StrictMode> 
    <Saludo />
    </React.StrictMode>);



    

