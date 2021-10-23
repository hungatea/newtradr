import logo from './newtradr-logo.svg';
import TextAnswer from './TextAnswer.js';
import SelectAnswer from './SelectAnswer.js';

function App() {

  return (
    <>
    <div className='main-container'>
      <SelectAnswer question={sampleQuestion[2]}/>
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
}
]
