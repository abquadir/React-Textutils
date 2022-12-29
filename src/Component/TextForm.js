import React, { useState } from 'react'

const TextForm = props => {

const [text,SetText] = useState("")
const onChange =(e)=>{
 SetText(e.target.value)
}
const ChangeUpper =()=>{
  let entertext = text.toUpperCase()
  SetText(entertext)
  props.showAlert("Convert to upperCase", "success")
}
const ChangeLower =()=>{
  let entertext = text.toLowerCase()
  SetText(entertext)
  props.showAlert("Convert to lowerCase", "success")

}

const CopyText =()=>{
  let entertext = document.getElementById("box")
  entertext.select()
  navigator.clipboard.writeText(entertext.value);
  props.showAlert("Text Copied!", "success")

}

const clearText =()=>{
  SetText("")
  props.showAlert("Field Emptied!", "success")

}
const RemoveSpaces =()=>{
  let newText = text.split(/[ ]+/)
  SetText(newText.join(" "))
  props.showAlert("Extra Spaces removed", "success")

}
  return (
  <div>
    
<div className=" container mb-3">
<label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>Enter Text Here</h2></label>
<textarea className="form-control" id="box"
style={{backgroundColor :props.mode === 'dark' ? '#495579' : 'white',
color :props.mode === 'dark' ? 'white' : '#495579'}}
onChange={onChange} value={text} rows="10"></textarea>
</div>

<div className='container mb-3'>
<button className="btn btn-dark mx-2 my-2" onClick={ChangeUpper}>Upper case</button>
<button className="btn btn-dark mx-2 my-2" onClick={ChangeLower}>Lowercase case</button>
<button className="btn btn-dark mx-2 my-2" onClick={RemoveSpaces}>Remove Extra Spaces</button>
<button className="btn btn-dark mx-2 my-2" onClick={CopyText}>Copy Text</button>
<button className="btn btn-dark mx-2 my-2" onClick={clearText}>Clear Text</button>
</div>

<div className="container mb-3">
  <h5>Your Text : {text.length>0 ? text:"Enter something to preview"} </h5>
  <p>Number of Words: {text.split(" ").length}  , and Characters : {text.length}</p>
  <p> Time to read in minutes: { 0.008 * text.split(" ").length }</p>
</div>
  </div>
  )
}

export default TextForm
