import logo from '../newtradr-logo.svg';
import Question from '../Question';
import React, { useState } from "react";

function Survey(){
    const [completed, setCompleted] = useState(false);
    const [question, setQuestion] = useState(0);

    function handleQuestionChange() {
        setQuestion(question + 1);
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

export default Survey;

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
      'layout' : 'column',
      'options' : [
        {
          'text' : 'Take the bet—why not make some extra money!',
          'risk' : [1,0,0]
        },
        {
          'text' : "Walk away—it's not worth the risk",
          'risk' : [0,0.3,0.3]
        } 
        ]
    },
    {
      'id' : 6,
      'question' : 'How would others describe your driving?',
      'type' : 'selectResponse',
      'layout' : 'column',
      'options' : [
        {
          'text' : "Slow and safe",
          'risk' : [0,0,1]
        }, 
        {
          'text' : "Normal, maybe a bit on the slow side",
          'risk' : [0,0.7,0.3]
        }, 
        {
          'text' : "A little bit fast",
          'risk' : [0.4,0.6,0]
        }, 
        {
          'text' : "Probably too fast for most people",
          'risk' : [0.5,0.5,0]
        }, 
        {
          'text' : "I don't drive",
          'risk' : [0,0,0]
        } 
      ]  
    },
    {
        'id': 7,
        'question' : 'How important is it to you that you have a lot of money when you are older?',
        'type' : 'selectResponse',
        'layout' : 'column',
        'options' : [
          {
            'text' : "Very—I aim to have an expensive lifestyle",
            'risk' : [0.7,0.3,0]
          }, 
          {
            'text' : "Somewhat—I want to make sure I can live where I want",
            'risk' : [0,0.6,0.4]
          }, 
          {
            'text' : "A bit—I do not want to worry about money",
            'risk' : [0.5,0.5,0]
          }, 
          {
            'text' : "Not very much, so long as I am doing what makes me happy",
            'risk' : [0,0,0]
          }
      ]
    },
    {
      'id': 8,
      'question' : 'How would you describe your typing speed?',
      'type' : 'selectResponse',
      'layout' : 'column',
      'options' : [
        {
          'text' : "To infinity and beyond (over 100 words per minute)",
          'risk' : [0,0,0]
        },
        {
          'text' : "Average (between 60 and 100 words per minute)",
          'risk' : [0,0,0]
        },
        {
          'text' : "Meh (less than 60 words per minute)",
          'risk' : [0,0,0]
        }
    ]
    },
    {
      'id': 9,
      'question' : 'Do you prefer chocolate or fruit?',
      'type' : 'selectResponse',
      'layout' : 'grid',
      'options' : [
        {
          'text' : "Chocolate",
          'risk' : [0,0,0]
        },
        {
          'text' : "Fruit",
          'risk' : [0,0,0]
        }
    ]
    },
    {
      'id': 10,
      'question' : 'Would you describe yourself as an introvert or an extrovert?',
      'type' : 'selectResponse',
      'layout' : 'grid',
      'options' : [
        {
          'text' : "Introvert",
          'risk' : [0,0.2,0.3]
        },
        {
          'text' : "Extrovert",
          'risk' : [0.4,0.1,0]
        }
    ]
    },
    {
      'id': 11,
      'question' : 'How often do you leave work unfinished until your deadline?',
      'type' : 'selectResponse',
      'layout' : 'grid',
      'options' : [
        {
          'text' : "Always",
          'risk' : [0.7,0.3,0]
        },
        {
          'text' : "Pretty often",
          'risk' : [0.6,0.3,0]
        },
        {
          'text' : "Almost never",
          'risk' : [0,0,0.8]
        }
    ]
    },
    {
      'id': 12,
      'question' : 'How often do you do something because it looks fun (and other people are doing it)?',
      'type' : 'selectResponse',
      'layout' : 'grid',
      'options' : [
        {
          'text' : "Very often",
          'risk' : [0.6,0.4,0]
        },
        {
          'text' : "Sometimes",
          'risk' : [0.3,0.5,0]
        },
        {
          'text' : "Not much at all",
          'risk' : [0,0.1,0.7]
        }
    ]
    },
    {
      'id': 13,
      'question' : "What are some things that you're interested in? Please choose three.",
      'type' : 'selectResponse',
      'layout' : 'imageGrid',
      'options' : [
    "Cars",
    "Consumer Goods",
    "Earth Sciences",
    "Entertainment",
    "Environment",
    "Finance",
    "Gas & Energy",
    "Healthcare",
    "Housing",
    "Social",
    "Space & Logistics",
    "Tech"
    ]
    },
    {
      'id' : 14,
      'question' : "[investment advice]",
      'type' : 'noResponse',
      'layout' : 'text',
      'options' : []
    },
    ]
    