import React, { useRef, useState } from 'react'
import ContentEditable from 'react-contenteditable'
const ShowInput = () => {
      let[input,setInput] = useState([{someText:""}])
 const handleChange =(index,e)=>{
       let newFormValue = [...input]
       newFormValue[index][e.target.name] = e.target.value
       setInput(newFormValue)
 }
 const  onEnterPress=(e)=>{
       if(e.keyCode ===13){
                   setInput([...input, {someText:e.target.value}])
       }
 }

 const remove =(id)=>{
  let newFormValue = [...input]
  newFormValue.splice(id,1)
  setInput(newFormValue)
 }

      return (
            <div key={input.length+1} style={{alignItems:"center"}} >
            {input.map((elem,index)=>{
            return(
                  <>
            <input placeholder="write something and enter" type="text" name='something'onChange={(e)=>handleChange(index,e)} onKeyDown={onEnterPress} value={input.someText}  />    
            {/* <ContentEditable name = "something" html={text.current} tagName="h1" style={{display:"inline-block",border:"1px solid red",padding:"1rem 2rem"}} onChange={(e)=>handleChange(index,e)} onKeyDown={onEnterPress} /> */}
            <button  onClick ={()=>remove(index)}>remove</button>
   <div> {elem.someText}</div> 
  
                  </>
            )      

            })}

            </div>) }
export default ShowInput
