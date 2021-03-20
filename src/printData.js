import React, { useEffect, useState}  from 'react'


function PrintData() {
  // SE L'ITEM è NULLO?
  const [stock,setStock] = useState(JSON.parse(localStorage.getItem("word")))

  const [count,setCount] = useState(0)
  const [input, setInput] = useState(''); 
  const onChangeCerca = (e) =>{
    setInput(e.target.value)

  }

  const timerRef = React.useRef(null)
  timerRef.current = setInterval(() => {
    setCount(count+1)
  }, 1000);


  const putValue = (input) =>{
    const value = [...stock,{id:1,name:count}]
    setStock(value)
                // localStorage.setItem("word",JSON.stringify(stock.map(item => item)))
    setInput('')      //DIFFERENZE IMPLEMENTAZIONE USESTATE
  }                 
  useEffect(() =>{
                    localStorage.setItem("word",JSON.stringify(stock.map(item => item)))
  },[stock])
  
  return (
    <>
      <input type="button" onClick={() => setCount(() => count+1)} value="button1"/>
      <input type="text" id="ok" value={input} onChange={(e) => onChangeCerca(e)}/>  {/*NECESSARIO QUESTE PROPRIETA'*/}
      <input type="button" value="button2" onClick={() =>putValue(input)}/> 
      {/* <p>{stock.map(el => el.id)}</p> */} 
      <label>{stock.map(el => el.name)}</label>
      </>
  )
}

export default PrintData
