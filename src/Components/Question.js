import React, { useState, useEffect, useRef } from "react";
import Advice from './Advice.js';

//images

import Tree from './Tree_88398.png'
import Film from './Film_1043323.png'
import Space from './Space_4038095.png'
import Social from './Social_4337981.png'
import iPhone from './iPhone_4051913.png'
import Car from './Car_2603312.png'
import Healthcare from './Healthcare_2135212.png'
import Hiking from './Hiking_4303095.png'
import Finance from './finance_998012.png'
import Gas from './Gas_3553248.png'
import House from './House_3074794.png'
import Shop from './Shop_2729655.png'

const icons = [
  Car,
  Shop,
  Hiking,
  Film,
  Tree,
  Finance,
  Gas,
  Healthcare,
  House,
  Social,
  Space,
  iPhone
]

export default function Question(props) {

    const [selected, setSelected] = useState(false);
    const [invest, setInvest] = useState(0);
    const [save, setSave] = useState(0);
    const [answer, setAnswer] = useState('');
    const [multiAnswer, setMultiAnswer] = useState([]);
    const [name, setName] = useState('');

    const [conservative, setConservative] = useState(0);
    const [moderate, setModerate] = useState(0);
    const [aggressive, setAggressive] = useState(0);

    const inputRef = useRef();

    const grid = props['question']['layout'] === 'grid';
    const image = props['question']['layout'] === 'imageGrid';


    function handleKeyPress(event) {
      if (event.which === 13 && selected) {
        if (props['question']['id'] === 1) {
          setName(inputRef.current.value)
        }
        else if (props['question']['id'] === 2) {
          setSave(inputRef.current.value)
        } else if (props['question']['id'] === 3) {
          setInvest(inputRef.current.value)
        }
        if (props['question']['id'] > 3) {
        setConservative(conservative + answer['risk'][2]);
        setModerate(moderate + answer['risk'][1]);
        setAggressive(aggressive + answer['risk'][0]);
        }
        props.onQuestionChange(1);
        if (props['question']['id'] < 3) {
          inputRef.current.value = '';
        }
        setSelected(false);
      } else if (event.which === 13 && props['question']['type'] === 'noResponse') {
        props.onQuestionChange(1);
      } else if (event.which === 13 && multiAnswer.length === 3) {
        props.onQuestionChange(1);
      }
    }

    function handleResponseChange(event) {
      if (event.target.value !== '') {
        setAnswer(event.target.value);
        setSelected(true)
      } else {
        setSelected(false);
      }
    }

    function removeArray(array, el) {
      const array2 = array.filter(e => e !== el);
      return array2;
    }

    function addArray(array, el) {
      const array3 = [ ... array, el];
      return array3;
    }

    function maxRisk(array) {
      let max = Math.max(...array);
      return array.indexOf(max);
    }

    function handleResponseClick(x) {
      if (image) {
        if (multiAnswer.includes(x)) {
          setMultiAnswer(removeArray(multiAnswer,x));
          setSelected(false);
        } else {
          if (multiAnswer.length === 2) {
            setMultiAnswer(addArray(multiAnswer,x))
            setSelected(true);
          } else if (multiAnswer.length < 2) {
            setMultiAnswer(addArray(multiAnswer,x))
          }
        }
      }
      else if (!image) {
      if (answer !== x) {
        
        setAnswer(x);
        setSelected(true)
      }
      else {
        setAnswer('');
        setSelected(false)
      }
    }
    }

    function handleStartOver() {
      setSelected(false);
      setInvest(0);
      setSave(0);
      setAnswer('');
      setMultiAnswer([]);
      setName('');

      setConservative(0);
      setModerate(0);
      setAggressive(0);
    }

    useEffect(() => {
      window.addEventListener("keydown", handleKeyPress);
      return () => {
        window.removeEventListener("keydown", handleKeyPress)
      }
    })



  return (

    <div className='q-container'>
      <button onClick={(e) => {
        props.onQuestionChange(0)
        handleStartOver();
        e.preventDefault();
      }}>Start Over</button>

      {props['question']['id'] < 14 &&
      <>
      <h2>{`${props['question']['question']} ${props['question']['id'] === 5 ? `$${invest > 1 ? Math.round(invest / 10) : 1}?` : ''}`}</h2>
    {props['question']['type'] === 'textResponse' &&
        <>

        <input className='text-answer' autoFocus type='text' ref={inputRef} name='name' onKeyPress={(event) => {
        if (props['question']['id'] === 2 || props['question']['id'] === 3) {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }}
      }} onChange={handleResponseChange}
          placeholder={`${props['question']['id'] > 1 ? '$0' : 'Type your response here...'}`}/>
        </>
    }
    {props['question']['type'] !== 'textResponse' &&
    <div className={`${(grid || image) ? 'grid-container' : 'column-container'}`}>
        {props['question']['options'].map((o, index) => {
            return <>
              <div className={`${(grid || image) ? 'grid-option' : 'column-option'}
                               ${(answer === o || multiAnswer.includes(o)) ? 'selected' : ''}`} key={index} onClick={(e) => {
              e.preventDefault();
              handleResponseClick(o)
            }}>
                {image ?
                <>
                <img className='icon' src={icons[index]} />
                <p>{o}</p>
                </>
                :
                <p>{o['text']}</p>
        }
                </div>
                </>
        })}
    </div>
    }
    <div className={`help-text-container ${(selected === false && props['question']['type'] !== 'noResponse') && 'unselected'}`}>
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
    </>
    }
    {props['question']['id'] === 14 &&
    <Advice name={name} risk={maxRisk([conservative,moderate,aggressive])} interests={multiAnswer}/>
    }
    </div>
  );
}