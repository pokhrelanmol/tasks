import React, { useEffect, useState } from 'react'
import '../css/progressCircle.css'
 

const ProgressCircle = () => {
   const [value,setvalue] = useState("")
   const[stroke,setStroke] = useState("442.444")
const handleChange =(e)=>{
setvalue(e.target.value)
}

useEffect(()=>{
   

setStroke(`${stroke-2.44}`)

},[value])




     return (
           <>
           <input type="text" value={value} onChange={handleChange} maxLength="180"/>
           <div className="box">
           <div className="percent">

           <svg>
              <circle cy="70" cx="70" r="70"></circle>
              <circle cy="70" cx="70" r="70" style={{strokeDashoffset:`${stroke}`,stroke:"violet"}}></circle>
           </svg>

           </div>
           </div>
</>
     )
}

export default ProgressCircle
