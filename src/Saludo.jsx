import { useState } from 'react';
import PropTypes from 'prop-types';
const nombre = 'GOKU!!!'
const object = {
  name: 'andres',
  edad: '22'
}

const suma = () =>{
  return 18 + 4;
}
const Saludo = ({tittle, valor}) => {
  const [ counter , setCounter ] = useState( valor )
  function Suma(event){
    setCounter( counter + 1);
    }
    function Resta(event){
      setCounter( counter - 1);
      }
      function Reset(event){
        setCounter( 10 );
        }
    
  
  return (
    <>

    <h1>Hola mundo,</h1>
    <p> { tittle }</p>
    <p>Mi hook es { counter }</p>
    <p> Y mi edad es de {suma()}</p>
    <code>Soy {JSON.stringify(object)}</code>
    <button onClick={Suma}>+1</button>
    <button onClick={Resta}>-1</button>
    <button onClick={Reset}>reset</button>
    </>
    
  )
}
Saludo.propTypes = {
  tittle: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
}

Saludo.defaultProps ={
  tittle: "Este es mi aprendizaje react",
  name: "andres",
  valor: 100
}


export default Saludo;
