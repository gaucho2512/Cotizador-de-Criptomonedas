import {useEffect , useState} from 'react'
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';



const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 300px;
    color: #fff;
    font-weight: 700;
    padding: 10px;
    cursor: pointer;
    transition: all 0.5s;
    margin-top: 30px ;

    &:hover {
        background-color: #e1e2ff;
        color: #000
    }
`

const Formulario = ({setMonedas}) => {

    const [cripto , setCripto] = useState([])
    const [error , setError] = useState(false)


    useEffect(() => {
      
        const consultarApi = async() => {
              const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD"
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
             
              const arrayCriptos = resultado.Data.map( (cripto) => {

                    const objeto = {
                        id: cripto.CoinInfo.Name,
                        nombre: cripto.CoinInfo.FullName
                    }
                    return objeto
              })
              setCripto(arrayCriptos)
             
            }
            consultarApi()
    }, [])
    

    const monedass = [
        { id: 'USD' , nombre: 'Dolar de EE.UU'},
        { id: 'MXM' , nombre: 'Peso mexicano'},
        { id: 'EUR' , nombre: 'Euro'},
        { id: 'ARS' , nombre: 'Peso argentino'},
    ]
   
    const [ monedas, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedass)
    const [ criptoMoneda, SelectCriptoMoneda ] = useSelectMonedas('Elige tu criptomoneda', cripto)

    const handleSubmit = (e) => {
      e.preventDefault()
      if([monedass , criptoMoneda].includes("")) {
          setError(true)
          return;
      }

      setError(false)
      setMonedas({
          monedas, 
          criptoMoneda
      })
    }
   
   
  return (
      <>
        
         <Form
          onSubmit={handleSubmit}
         >
                <SelectMonedas />
                <SelectCriptoMoneda />

                {monedas}
              
                <InputSubmit
                 type="submit"
                 value= "Cotizar"
                  />

         { error && <p className='error'>Todos los campos son obligatorios</p>}

         </Form>
      
      
      </>
  )
}

export default Formulario