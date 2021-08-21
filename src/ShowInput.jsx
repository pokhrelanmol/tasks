import React, { useEffect, useState } from 'react'

const ShowInput = () => {
      let[input,setInput] = useState([{someText:""}])
      
 const handleChange =(index,e)=>{
       let newFormValue = [...input]
       newFormValue[index][e.target.name] = e.target.value
       setInput(newFormValue)
 }
 const  onEnterPress=(e)=>{
       if(e.keyCode ===13){

       setInput([...input, { name: "", email: "" }])
       }
 }

      return (
            <div>
            {input.map((input,index)=>{
            return(
                  <>
            <input type="text" name='something'onChange={(e)=>handleChange(index,e)} onKeyDown={onEnterPress} value={input.someTexth} />    
  
                  </>
            )      

            })}

            </div>
      )
}

export default ShowInput
