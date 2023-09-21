import React, { useState } from 'react'
import PropTypes from 'prop-types'


function TextForm(props) {

  //to change text to uppercase
  const convertUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if(text===''){
      props.showAlert('Enter something to convert','info');
    }
    else{
      props.showAlert('succesfully converted to upperCase.','success');
    }
  }
  
  //to change text to lowercase
  const convertLowerCase =() =>{
    let newText = text.toLowerCase();
    setText(newText);
    if(text===''){
      props.showAlert('Enter something to convert','info');
    }
    else{
      props.showAlert('succesfully converted to lowerCase.','success');
    }
  }
  
  //to change text to lowercase
  const handelOnChange = (event) =>{
    // console.log("Running on Change");
    setText(event.target.value);
  }
  
  //to clear the text.
  const handelToClear = () =>{
    
    if(text===''){
      props.showAlert('Enter something first..','info');
    }
    else{
      const userConfirmed = window.confirm('are you sure! \nYou want to clear text..');
      if(userConfirmed){
        props.showAlert('cleared Text...','danger');
        let newText = '';
        setText(newText);

      }
      else{
        props.showAlert('Mission aboerted!!','info');
      }
    }


  }

  //to copy text
  const handelToCopy = () =>{

    navigator.clipboard.writeText(text);
    if(text===''){
      props.showAlert('Enter something to copy','info');
    }
    else{
      props.showAlert('Succesfull copied to clipboard','success');
    }
  }

  //to remove spaces
  const handelToRemoveSpace = () =>{
   let remove = text.split(/[ ]+/);
   setText(remove.join(' '));
  }

  //to count sentences
  const countSentences = (text) => {
    return text.split(/[.?!]/g).filter(Boolean).length;
  };

  //to count paragraphs
  const countParagraphs = (text) =>{
    return text.split(/\n\s*\n/).filter(Boolean).length;
  }

  const WordCount = (str) =>{
    return str.split(/\s+/).filter((element) => element !== '').length;
  }   
  
  const [text , setText] = useState('');
  return(
    <>
    <div className={`text-${props.mode==='light' ? 'dark' : 'light'}`}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        <div className="mb-3 my-3" >
            <h3>{props.heading}</h3>
            <textarea className="form-control" style={{backgroundColor: props.mode==='light' ? 'beige' : '#253338', color:props.mode==='light' ? '#253338 ' : 'white' }} value = {text} onChange={handelOnChange} id="myText" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" style={{border: ' 2px solid black'}} onClick = {convertUpperCase} >Convert to UpperCase</button>
        <button className="btn btn-secondary mx-2 my-1" style={{border: ' 2px solid black'}} onClick = {convertLowerCase}>Convert to lowerCase</button>
        <button className="btn btn-light mx-2 my-1" style={{border: ' 2px solid black'}} onClick = {handelToCopy}>Copy text</button>
        <button className="btn btn-success mx-2 my-1" style={{border: ' 2px solid black'}} onClick = {handelToRemoveSpace}>Remove spaces</button>
        <button className="btn btn-danger mx-2 my-1" style={{border: ' 2px solid black'}} onClick = {handelToClear}>Clear text</button>

    </div>
    <div className={`text-${props.mode==='light' ? 'dark' : 'light'}`}>
      <h2>Your text Summary</h2>
        <p>{WordCount(text)} Words and {text.length} characters</p>
        <p>{0.004 * WordCount(text)} Minutes to read.</p>
        <p> <b>Sentences : </b><span>{countSentences(text)}</span> </p>
        <p> <b>Paragraphs : </b><span>{countParagraphs(text)}</span> </p>
      <h2>PREVIEW</h2>
        <p>{text}</p> 
    </div>
    </>
  )
}

export default TextForm

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}
