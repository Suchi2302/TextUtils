import React, { useState } from "react";

export default function TextForm(props) {
    const [text,setText]=useState('')
    const handletext=(e)=>{
        e.preventDefault()
        setText(e.target.value)
    }
    const handleUpclick =()=>{
        let newText=text.toUpperCase()
        props.showAlert('Converted to UpperCase','success')
        setText(newText)
    }
    const handleLoclick =()=>{
        let newText=text.toLowerCase()
        props.showAlert('Converted to LowerCase','success')
        setText(newText)
    }
    const handleClear =()=>{
        props.showAlert('Cleared the prompt','success')
        setText('')
    }
    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert('Speak the text','success')
      }
      const handleCopy =()=>{
        var text=document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert('Copied to the clipboard','success')
      }
  return (
    <>
    <div className="container" style={{color:props.mode=='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handletext} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode=='dark'?'white':'black'}}></textarea>
      </div>
     <button className="btn btn-primary mx-2" type='button' onClick={handleUpclick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-2 " type='button' onClick={handleLoclick}>Convert to LowerCase</button>
     <button className="btn btn-primary mx-2" type='button' onClick={handleClear}>Clear Text</button>
     <button className="btn btn-primary mx-2" type='button' onClick={handleCopy}>Copy Text</button>
     <button type="submit" onClick={handleSpeak} className="btn btn-warning mx-2 my-2">Speak</button>
        </div>
        <div className="container my-3" style={{color:props.mode=='dark'?'white':'#042743'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p> { 0.008 *text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
  );
}
