import { styled } from 'styled-components';
import './App.css';
import Buttons, { ButtonStule } from './Components/Ul/Buttons';
import { useState } from 'react';
import Caunter from './Components/Caunter';

function App() {
  const [input, setInput] = useState('')
  const [state, setState] = useState('')


  function handleSubmit () {
    setState(`${input}`)
    setInput('')
  }
  function dataFunc(event) {
    setInput(event.target.value)
  }

  const color = "red"

  return (
    <div className="App">
      <Caunter/>


      <Wrapper color={color}>
        <Text>MY BOOKS</Text>
        <Forom>Add book</Forom>
      </Wrapper>
      {/* <main>
        <h1>BOOKS</h1>
        <div>
          <h2>Test1</h2>
          <img src=""/>
          <span>500 som</span>
          <button>delete</button>
        </div>
      </main> */}
        <DivContent>
          <input
          onChange={dataFunc}
          value={input}
          id='input'
          type="text"/>
          
          <Buttons color = 'green' text='Add'></Buttons>
          <Buttons color = 'red' text='Cancel'></Buttons>
          <Buttons color = 'blue' onClick={handleSubmit} text='Click'></Buttons>
          <H1Style color={state} >{state}</H1Style>

        </DivContent>
        
    </div>
  );
}

export default App;


const H1Style = styled.h1`
color: ${(p) => p.color}
`

const Wrapper = styled.header`
  border:2px solid black;
  width:800px;
  height:100px;
  background-color: ${(props)=>props.color};
  display:flex;
  justify-content:space-around;
  align-items: center;
  margin:auto;
  margin-top:30px;

`
const Text = styled.h1`
  width: 200px;
  height:50px;
  background-color:gold;
  border-radius:8px;

`
const Forom = styled.button`
  font-size:25px;
  width:200px;
  height: 40px;
  border-radius:8px;

`
const DivContent = styled.div`
  /* border: 2px solid red; */
  width: 600px;
  height: 450px;
  margin: auto;
  margin-top:30px;
  display:flex;
  align-items:center;
  flex-direction:column;
  background-color:gold;
  border-radius:10px;
  justify-content:space-between;
`

