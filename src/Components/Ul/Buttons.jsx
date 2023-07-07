import React from 'react'
import { styled } from 'styled-components'

const Buttons = (props) => {
  return (
    <div>
        <ButtonStule color={props.color} onClick={props.onClick}>{props.text}</ButtonStule>

    </div>
  )
}

export default Buttons

export const ButtonStule = styled.button`
    padding: 6px 30px;
    font-size:50px;
    color: ${(props)=>props.color};
`