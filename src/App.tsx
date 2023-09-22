import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import LoginButton from './Auth/login';
import Header from './components/user/Header';
import Quiz from './components/quiz/Quiz';
import Footer from './components/user/Footer';

function App() {
  const [data, setData] = useState<Array<{
    content: string;
    choices: Array<{ answer: string; valid: number; }>;
  }>>([]);
  useEffect(() => {
  axios.get('http://localhost/api/v1')
    .then(response => {
      const fetchedData = response.data.data; // ここでAPIからのデータを取得

      // fetchedDataをQuizProps.quizDataの形に整形
      const formattedData = fetchedData.map((quiz: any) => {
        return {
          content: quiz.content,
          choices: quiz.choices.map((choice: any) => {
            return {
              answer: choice.answer,
              valid: choice.valid
            };
          })
        };
      });

      setData(formattedData);
    })
    .catch(error => console.error('Error fetching data:', error));
}, []);
  return (
    <>
      <Header />
      <LoginButton />
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
      <div className="p-quiz-container l-container">
          {data.map((quiz, index) => (
            <Quiz key={index} quizData={quiz} />
          ))}
        </div>
      <Footer />
    </>
  );
}

export default App;
