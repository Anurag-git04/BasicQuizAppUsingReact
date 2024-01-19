import React,{useState} from 'react'
import {QuizData} from '../Data/QuizData'

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clickedoption, setClickedoption] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const changeQuestion=()=>{
        updatescore();
        if(currentQuestion< QuizData.length -1){
            setCurrentQuestion(currentQuestion+1)
            setClickedoption(0)
        }else{
            
        }
    }
    const updatescore=()=>{
        if(clickedoption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
  return (
    <div>
        <div className="heading-text">
            Quiz App
        </div>
        <div className="container">
            <div className="question">
                <span id='question-number'>{currentQuestion+1}.</span>
                <span id='question-text'>{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button className="option-btn"
                        key={i}
                        onClick={()=> setClickedoption(i+1)}>
                            {option}
                        </button>
                    )
                })}
            </div>
            <input type="button" value="Next" onClick={changeQuestion} id='next-button' />
        </div>
    </div>
  )
}

export default Quiz