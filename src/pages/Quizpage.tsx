import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import '../App.css';
import LoginButton from '../Auth/login';
import Header from '../components/user/Header';
import Quiz from '../components/quiz/Quiz';
import Footer from '../components/user/Footer';
import Loader from '../components/Loader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // ローディング中かどうかの状態
  const [data, setData] = useState<Array<{
    id: number;
    content: string;
    img: string;
    choices: Array<{ answer: string; valid: number; }>;
  }>>([]);
  useEffect(() => {
    axios.get('http://localhost/api/v1')
      .then(response => {
        const fetchedData = response.data.data; // ここでAPIからのデータを取得

        // fetchedDataをQuizProps.quizDataの形に整形
        const formattedData = fetchedData.map((quiz: any) => {
          return {
            id: quiz.id,
            content: quiz.content,
            img: quiz.img,
            choices: quiz.choices.map((choice: any) => {
              return {
                answer: choice.answer,
                valid: choice.valid
              };
            })
          };
        });

        setData(formattedData);
        setIsLoading(false); // ローディングが終わったのでfalseに
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <>
      <Header />
      <LoginButton />
      {isLoading ? <Loader /> :
        <div className="p-quiz-container l-container">
          {data.map((quiz, index) => (
            <Quiz key={index} quizData={quiz} />
          ))}
        </div>
      }
      <Footer />
    </>
  );
}
export default Home;