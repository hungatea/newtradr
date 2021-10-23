import React from "react";

export default function Question(props) {

    const grid = props['question']['layout'] === 'grid';

  return (
    <>
    <div className='q-container'>
      <h2>{props['question']['question']}</h2>
    {props['question']['type'] === 'textResponse' &&
    <>
        <input className='text-answer' autoFocus type='text' name='name' placeholder='Type your response here...' />
      </>
}
    <div className={`${grid ? 'grid-container' : 'column-container'}`}>
        {props['question']['options'].map(o => {
            return <div className={`${grid ? 'grid-option' : 'column-option'}`} key={o}>
                <p>{o}</p>
                </div>
        })}
    </div>

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