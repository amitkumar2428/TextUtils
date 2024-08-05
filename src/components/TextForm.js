import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    //console.log("Uppercase was clicked "+ newText);
    setText(newText);
    props.showAlert("Converted to UPPERCASE", "success");


   }
   const handleLoClick=()=>{
    let newText=text.toLowerCase();
    //console.log("Uppercase was clicked "+ newText);
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
    
   }
   const handleClearClick=()=>{
    let newText='';
    //console.log("Uppercase was clicked "+ newText);
    setText(newText);
    props.showAlert("Text cleared", "success");
    
    
   }
   const handleOnChange=(event)=>{
    setText(event.target.value);
    setDisplayText(event.target.value);
    
   }
   const handleCopy=()=>{
  
    let text=document.getElementById("myBox");
    text.select();
    //text.setSelectionRange(0,9999); Not required if text.select() is used becaus eit selects whole text
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
   }

   const handleSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
   }
  
    const [text, setText]=useState('');
    const [displayText, setDisplayText]=useState('');
  
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}
        style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
      <button className="btn btn-dark mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-secondary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-success mx-2 my-2" onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Summary of entered text</h1>
      <p>{text.split (/\s+/).filter((word)=>word.length!==0).length} words & {text.length} characters, </p>
      <p>{0.008*text.split(/\s+/).filter((word)=>word.length!==0).length} minutes read</p>
      <h2>Entered text:</h2>
      {/*<p>{text.length>0? text:'Write something to preview it here'}</p>*/}
      <p>{displayText}</p>
      <h2>Converted text:</h2>
      <p>{text}</p>

    </div>
    </>
  );
}
