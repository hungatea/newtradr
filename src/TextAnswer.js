import React from "react";

export default function TextAnswer(props) {

  return (
    <>
    <div className='q-container'>
      <h2>{props['question']}</h2>
      <input className='text-answer' autoFocus type='text' name='name'
        placeholder='Type your response here...' />
    <div className='help-text-container'>
      <div className='help-text'>
      <p style={{marginRight:"8px"}}>Press</p>
      </div>
      <div  style={{marginRight:"8px"}} className='highlighted'>
        <p>Enter</p>
      </div>
      <div className='help-text'>
      <p style={{marginRight:"0px"}}>to continue</p>
      </div>
      </div>
    </div>
    </>
  );
}