import logo from './newtradr-logo.svg';
import Question from './Question.js';
import React, { useState, useEffect } from "react";




function App() {

  const [completed, setCompleted] = useState(false);
  const [question, setQuestion] = useState(() => {
    const saved = localStorage.getItem("progress");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  })

  function handleQuestionChange(x) {
    if (x === 1) {
    setQuestion(question + x);
    } else {
      setQuestion(0)
    }
  }

  useEffect(() => {
    localStorage.setItem("progress", JSON.stringify(question))
  }, [question]);

  return (
    <>
    <div className='main-container'>
      <Question question={sampleQuestion[question]} onQuestionChange={handleQuestionChange}/>
    </div>
    <img src={logo} className='logo' />
    </>
  );
}

export default App;

const sampleQuestion = [
{
  'id' : 1,
  'question' : 'What is your name?',
  'type' : 'textResponse',
  'layout' : '',
  'options' : []
},
{
  'id' : 2,
  'question' : 'How much money do you have saved?',
  'type' : 'textResponse',
  'layout' : '',
  'options' : []
},
{
  'id' : 3,
  'question' : 'How much money do you want to invest?',
  'type' : 'textResponse',
  'layout' : '',
  'options' : []
},
{
  'id' : 4,
  'question' : "Great! Now we'd like to ask a few questions to get to know you better.",
  'type' : 'noResponse',
  'layout' : 'text',
  'options' : []
},
{
  'id' : 5,
  'question' : 'A friend asks you to bet on the flip of a coin. Would you bet ',
  'type' : 'selectResponse',
  'layout' : 'grid',
  'options' : ['Take the bet—why not make some extra money!', "Walk away—it's not worth the risk"]
},
{
  'id' : 6,
  'question' : 'How would others describe your driving?',
  'type' : 'selectResponse',
  'layout' : 'column',
  'options' : [
    'Slow and safe',
    'Normal, maybe a bit on the slow side',
    'A little bit fast',
    'Probably too fast for most people',
    "I don't drive"
  ]  
},
{
    'id': 7,
    'question' : 'How important is it to you that you have a lot of money when you are older?',
    'type' : 'selectResponse',
    'layout' : 'column',
    'options' : [
      'Very—I aim to have an expensive lifestyle.',
      'Somewhat—I want to make sure I can live where I want.',
      'A bit—I do not want to worry about money.',
      'Not very much, so long as I am doing what makes me happy.'
  ]
},
{
  'id': 8,
  'question' : 'How would you describe your typing speed?',
  'type' : 'selectResponse',
  'layout' : 'column',
  'options' : [
    'To infinity and beyond (over 100 words per minute)',
    'Average (between 60 and 100 words per minute)',
    'Meh (less than 60 words per minute)'
]
},
{
  'id': 9,
  'question' : 'How often do you leave work undone until your deadline?',
  'type' : 'selectResponse',
  'layout' : 'column',
  'options' : [
    'Always.',
    'Pretty often.',
    'Never.'
]
},
{
  'id': 10,
  'question' : "What are some things that you're interested in? Please choose three.",
  'type' : 'selectResponse',
  'layout' : 'imageGrid',
  'options' : [
"Biology",
"Cars",
"Cryptocurrency",
"Education",
"Environment",
"Fashion",
"Food",
"Healthcare",
"Hiking",
"Music",
"Social Media",
"Space",
"Tech",
"TV & Movies",
"Video Games"
]
},
{
  'id' : 11,
  'question' : "[investment advice]",
  'type' : 'noResponse',
  'layout' : 'text',
  'options' : []
},
]