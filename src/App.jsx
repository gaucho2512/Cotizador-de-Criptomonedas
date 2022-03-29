import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import './App.css';
import Banner from './assets/imagen-criptos.png'
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {

  const [ monedass , setMonedas] = useState({})
  const [resultadoFinal , setResultadoFinal] = useState({})
  const [ cargando , setCargamdo] = useState(false)

  useEffect(() => {
    if(Object.keys(monedass).length > 0) {

      const cotizarCripto = async() => {
        setCargamdo(true)

        const { monedas , criptoMoneda} = monedass
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${monedas}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultadoFinal(resultado.DISPLAY[criptoMoneda][monedas])

        setCargamdo(false) 
      }
      cotizarCripto()
     
    }
  }, [monedass])
  

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
`
const Heading = styled.h1`
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-top: 25px;
`
const Imagen = styled.img`
  width: 40%;
  padding: 15px 90px;
`


  return (
       <>
      

       <Contenedor> 
          
           <Heading> Cotizador de criptomonedas</Heading>

           <div className='formulario'>
               <Imagen 
               src={Banner}
               alt="imagen-cripto" 
               /> 

               <Formulario 
                setMonedas= {setMonedas}/>
            </div>

             { cargando && <Spinner />}
             { resultadoFinal.PRICE && <Resultado
                                       resultadoFinal={resultadoFinal}
                                         /> } 

       </Contenedor>

       </>
  );
}

export default App;
