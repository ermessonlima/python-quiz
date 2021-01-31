/* eslint-disable react/prop-types */
import React from 'react';
import { Lottie } from '@crello/react-lottie';
// import db from '../../../db.json';
import  { WidgetPrimary, Header, Content, Topic, WidgetResposta } from '../../components/Widget';
import QuizLogo from '../../components/QuizLogo';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import AlternativesForm from '../../components/AlternativesForm';
import Button from '../../components/Button';
import BackLinkArrow from '../../components/BackLinkArrow';

import loadingAnimation from './animations/loading.json';
import boopSfx from '../../../pages/sounds/clicka.mp3';
import useSound from 'use-sound';


function ResultWidget({ results }) {
    return (
      <WidgetPrimary>
        <Header>
        <BackLinkArrow href="/" />
          Tela de Resultado:
        </Header>
  
        <Content>
          <p>
            Você acertou
            {' '}
            {/* {results.reduce((somatoriaAtual, resultAtual) => {
              const isAcerto = resultAtual === true;
              if (isAcerto) {
                return somatoriaAtual + 1;
              }
              return somatoriaAtual;
            }, 0)} */}
            {results.filter((x) => x).length}
            {' '}
            perguntas
          </p>
          <ul>
            {results.map((result, index) => (
              <li key={`result__${result}`}>
                #
                {index + 1}
                {' '}
                Resultado:
                {result === true
                  ? 'Acertou'
                  : 'Errou'}
              </li>
            ))}
          </ul>
        </Content>


      </WidgetPrimary>
    );
  }
  
  function LoadingWidget() {
    return (
      <WidgetPrimary>
        <Header>
          Carregando...
        </Header>
  
        <Content style={{ display: 'flex', justifyContent: 'center' }}>
          <Lottie
            width="200px"
            height="200px"
            className="lottie-container basic"
            config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
          />
        </Content>
      </WidgetPrimary>
    );
  }
  
  function QuestionWidget({
    question,
    questionIndex,
    totalQuestions,
    onSubmit,
    addResult,
  }) {
    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
    const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
    const questionId = `question__${questionIndex}`;
    const isCorrect = selectedAlternative === question.answer;
    const hasAlternativeSelected = selectedAlternative !== undefined;
    const [isChecked, setIsChecked] = React.useState(true);


    const [playOn] = useSound(
      boopSfx,
      { volume: 0.25 }
    );
    const [playOff] = useSound(
      boopSfx,
      { volume: 0.25 }
    );
    
    function handleButtonClick (){
    
    
      isChecked ? playOff() : playOn();
    }
    
    return (

     <>
      <WidgetPrimary>
        <Header>
          <BackLinkArrow href="/" />
          <h3>
            {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
          </h3>
        </Header>
  
        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          src={question.image}
        />
        <Content>
          <h2>
            {question.title}
          </h2>
          <p>
            {question.description}
          </p>
  
          <AlternativesForm
            onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              setIsQuestionSubmited(true);
              setTimeout(() => {
                addResult(isCorrect);
                onSubmit();
                setIsQuestionSubmited(false);
                setSelectedAlternative(undefined);
              }, 3 * 1000);
            }}
          >
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
              const isSelected = selectedAlternative === alternativeIndex;
              return (
                <Topic
                  as="label"
                  key={alternativeId}
                  htmlFor={alternativeId}
                  data-selected={isSelected}
                  data-status={isQuestionSubmited && alternativeStatus}
                >
                  <input
                    style={{ display: 'none' }}
                    id={alternativeId}
                    name={questionId}
                    onChange={() => setSelectedAlternative(alternativeIndex)}
                    type="radio"
                  />
                  {alternative}
                </Topic>
              );
            })}
  
            {/* <pre>
              {JSON.stringify(question, null, 4)}
            </pre> */}
            <Button type="submit" disabled={!hasAlternativeSelected} onClick={handleButtonClick}>
              Confirmar
            </Button>
                  {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
           {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}    
          




          </AlternativesForm>
        </Content>
        
      </WidgetPrimary>
      
      <WidgetResposta style={{marginLeft: 900, position:'absolute', marginTop: -600}}>
        <Header>
      
          <h3>
            {`Sua resposta está: `}
          </h3>
        </Header>
  
      
        <Content>
         
            {isQuestionSubmited && isCorrect && <h1 style={{color:"#4CAF50"}}>Correta!</h1>}
            {isQuestionSubmited && !isCorrect && <h1 style={{color:"#FF5722"}}>Errada :(</h1>}




        </Content>
        
      </WidgetResposta>

</>
    );
  }
  
  const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
  };
  export default function QuizPage({ externalQuestions, externalBg }) {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const [results, setResults] = React.useState([]);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const questionIndex = currentQuestion;
    const question = externalQuestions[questionIndex];
    const totalQuestions = externalQuestions.length;
    const bg = externalBg;
  
    function addResult(result) {
      // results.push(result);
      setResults([
        ...results,
        result,
      ]);
    }
  
    // [React chama de: Efeitos || Effects]
    // React.useEffect
    // atualizado === willUpdate
    // morre === willUnmount
    React.useEffect(() => {
      // fetch() ...
      setTimeout(() => {
        setScreenState(screenStates.QUIZ);
      }, 1 * 2000);
    // nasce === didMount
    }, []);
  
    function handleSubmitQuiz() {
      const nextQuestion = questionIndex + 1;
      if (nextQuestion < totalQuestions) {
        setCurrentQuestion(nextQuestion);
      } else {
        setScreenState(screenStates.RESULT);
      }
    }
  
    return (
      <QuizBackground backgroundImage={bg}>
        <QuizContainer>
          <QuizLogo />
          {screenState === screenStates.QUIZ && (
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
              onSubmit={handleSubmitQuiz}
              addResult={addResult}
            />
          )}
 
          {screenState === screenStates.LOADING && <LoadingWidget />}
  
          {screenState === screenStates.RESULT && <ResultWidget results={results} />}
        </QuizContainer>
      </QuizBackground>
    );
  }