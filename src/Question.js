import React, { useState, useEffect } from "react";

//images

import Tree from './Tree_88398.png'
import Banana from './banana_1262865.png'
import Clothes from './Clothes_552721.png'
import Game from './Video_Game_4146469.png'
import Film from './Film_1043323.png'
import Biology from './Biology_3655198.png'
import Space from './Space_4038095.png'
import Social from './Social_4337981.png'
import iPhone from './iPhone_4051913.png'
import Crypto from './crypto_3663299.png'
import Education from './education_3401411.png'
import Car from './Car_2603312.png'
import Healthcare from './Healthcare_2135212.png'
import Music from './Music_4341623.png'
import Hiking from './Hiking_4303095.png'

const icons = [
  Biology,
  Car,
  Crypto,
  Education,
  Tree,

  Clothes,
  Banana,
  Healthcare,

  Hiking,
  Music,
  Social,
  Space,
  iPhone,
  Film,

  Game,
]

export default function Question(props) {

    const [selected, setSelected] = useState(false);
    const [risk, setRisk] = useState(0);
    const [answer, setAnswer] = useState('');
    const [multiAnswer, setMultiAnswer] = useState([]);

    const grid = props['question']['layout'] === 'grid';
    const image = props['question']['layout'] === 'imageGrid';

    function handleKeyPress(event) {
      if (event.which === 13 && selected) {
        props.onQuestionChange(1);
        setSelected(false);
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

    function handleResponseClick(x) {
      if (image) {
        if (multiAnswer.includes(x)) {
          setMultiAnswer(removeArray(multiAnswer,x));
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
      } else {
        setAnswer('');
        setSelected(false)
      }
    }
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
      <button onClick={(e) => {
        props.onQuestionChange(0)
        e.preventDefault();
      }}>Start Over</button>
      <h2>{props['question']['question']}</h2>
    {props['question']['type'] === 'textResponse' &&
    <>
        <input className='text-answer' autoFocus type='text' name='name' onChange={handleResponseChange}
          placeholder='Type your response here...' />
      </>
    }
    {props['question']['type'] !== 'textResponse' &&
    <div className={`${(grid || image) ? 'grid-container' : 'column-container'}`}>
        {props['question']['options'].map((o, index) => {
            return <>
            <a href=''>
              <div className={`${(grid || image) ? 'grid-option' : 'column-option'}
                               ${(answer === o || multiAnswer.includes(o)) ? 'selected' : ''}`} key={index} onClick={(e) => {
              e.preventDefault();
              handleResponseClick(o)
            }}>
                {image &&
                <img className='icon' src={icons[index]} />
        }
                <p>{o}</p>
                </div>
                </a>
                </>
        })}
    </div>
}

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