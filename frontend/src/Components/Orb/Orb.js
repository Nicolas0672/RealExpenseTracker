import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

function Orb(){

    const{width, height} = useWindowSize()

    const moveOrb = keyframes`
        0%{
            transform: translate(0,0);
        }
        50%{
            transform: translate(${width}px, ${height/ 1.5} px);
        }
        100%{
            transform: translate(0,0);
        }
    
    `

    const OrbStyled = styled.div`
        width: 80vh;
        height: 80vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -40vh;
        margin-top: -40vh;
        background: linear-gradient(400deg, #F56692 50%, #F2994A 100%);
        filter: blur(400px);
        animation: ${moveOrb} 15s alternate linear infinite;
    
    `;

    return(
        <OrbStyled></OrbStyled>
    )
}

export default Orb