import React, { useState, useEffect } from "react";

export default function Question(props) {

    const [selected, setSelected] = useState(false);
    const [answer, setAnswer] = useState('');

    const grid = props['question']['layout'] === 'grid';

    function handleKeyPress(event) {
      if (event.which === 13 && selected) {
        props.onQuestionChange();
        setSelected(false);
      }
    }

    function handleResponseChange(event) {
      if (event.target.value !== '') {
        setSelected(true)
      } else {
        setSelected(false);
      }
    }

    function handleResponseClick(x) {
      if (answer !== x) {
        setAnswer(x);
      } else {
        setAnswer('');
      }
      setSelected(!selected);
    }

    useEffect(() => {
      window.addEventListener("keydown", handleKeyPress);
      return () => {
        window.removeEventListener("keydown", handleKeyPress)
      }
    })

  return (
    <>
    <div className='q-container'>
      <h2>{props['question']['question']}</h2>
    {props['question']['type'] === 'textResponse' &&
    <>
        <input className='text-answer' autoFocus type='text' name='name' onChange={handleResponseChange}
          placeholder='Type your response here...' />
      </>
    }
    <div className={`${grid ? 'grid-container' : 'column-container'}`}>
        {props['question']['options'].map(o => {
            return <div className={`${grid ? 'grid-option' : 'column-option'}`} key={o} onClick={() => {
              handleResponseClick(o)
            }}>
                <p>{o}</p>
                </div>
        })}
    </div>

    <div className={`help-text-container ${selected === false && 'unselected'}`}>
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