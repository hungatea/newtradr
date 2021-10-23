import logo from './newtradr-logo.svg';
import Question from './Question.js';
import React, { useState } from "react";

function App() {

  const [completed, setCompleted] = useState(false);
  const [question, setQuestion] = useState(0);

  function handleQuestionChange() {
    setQuestion(question + 1);
  }

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
  'question' : 'A friend asks you to bet on the flip of a coin. Heads, you win $100. Tails, you lose $100. Do you...',
  'type' : 'selectResponse',
  'layout' : 'grid',
  'options' : ['Take the bet—why not make some extra money!', "Walk away—it's not worth the risk"]
},
{
  'id' : 3,
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
    'id': 4,
    'question' : 'How important is it to you that you have a lot of money when you str older?',
    'type' : 'selectResponse',
    'layout' : 'column',
    'options' : [
      'Very-I aim to have an expensive lifestyle.',
      'Somewhat-I want to make sure I can live where I want.',
      'A bit-I do not want to worry about money.',
      'Not very much-So long as I am doing what makes me happy.'
  ]
},
{
  'id': 5,
  'question' : 'How would you describe your typing speed?',
  'type' : 'selectResponse',
  'layout' : 'column',
  'options' : [
    'To infinity and beyond(more than 100 word per minute)',
    'Average (between 60 and 100 words per minute)',
    'Meh (less than 60 words per minute)'
]
},
{
  'id': 5,
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
  'id': 6,
  'question' : 'Lets just say current stock has a price of $50 per share, and its value has decreased to $42 per share only. If you sel it right now you will ose 8 dollars. 55% o the market analysts say the price will go up to $100 per share 3 months later, and 45% say it will go down evern futher by 10 dollars per month. What is your move here?',
  'type' : 'selectResponse',
  'layout' : 'column',
  'options' : [
    'Se it now.',
    'Find someone on the same boat for ideas.',
    'Wait till after the second month has passed to monitor the price.',
    'Wait until the price increases.'
]
}
]
