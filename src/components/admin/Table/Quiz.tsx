import *  as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Row from './Row';



const QuizTable = () => {
  const [datas, setData] = useState<Array<{
    id: number;
    content: string;
  }>>([]);

  useEffect(() => {
    axios.get('http://localhost/api/v1/quiz')
      .then(response => {
        const fetchedData = response.data.data; // ここでAPIからのデータを取得
        // fetchedDataをQuizProps.quizDataの形に整形
        const formattedData = fetchedData.map((quiz: any) => {
          return {
            id: quiz.id,
            content: quiz.content,
          };
        });

        setData(formattedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDeleteQuiz = (id: number) => {
    // ここでAPI呼び出しを行う
    axios.delete(`http://localhost/api/v1/quiz/${id}`)
      .then((response) => {
        const newDatas = datas.filter((data) => data.id !== id);
        setData(newDatas);
      })
      .catch((error) => {
        console.error("Error deleting quiz:", error);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>問題番号</TableCell>
            <TableCell align="left">問題文</TableCell>
            <TableCell align="center">編集</TableCell>
            <TableCell align="center">削除</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data) => (
            <Row key={data.id} data={data} onDelete={handleDeleteQuiz} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default QuizTable;
