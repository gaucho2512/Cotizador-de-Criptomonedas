import React from 'react'
import styled from '@emotion/styled';

const TextoCripto = styled.h3`
    font-size: 16px;
    color: #fff;
    font-weight:400;
`
const SpanCripto = styled.span`
    color: #eeeeee;
    font-weight: 700;
`

const Resultado = ({resultadoFinal}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR , LASTUPDATE } = resultadoFinal

  return (
        <>
            <div className='container-resultado'> 
            <TextoCripto>
                EL PRECIO ES DE : <SpanCripto> {PRICE} </SpanCripto>
            </TextoCripto>

            <TextoCripto>
                PRECIO MAS ALTO DEL DIA : <SpanCripto> {HIGHDAY} </SpanCripto>
            </TextoCripto>

            <TextoCripto>
            PRECIO MAS BAJO DEL DIA : <SpanCripto> {LOWDAY} </SpanCripto>
            </TextoCripto>

            <TextoCripto>
               VARIACION DE LAS ULTIMAS 24HS : <SpanCripto> {CHANGEPCT24HOUR} </SpanCripto>
            </TextoCripto>

            <TextoCripto>
                ULTIMA ACTUALIZACION : <SpanCripto> {LASTUPDATE} </SpanCripto>
            </TextoCripto>

            </div>

        </>
  )
}

export default Resultado