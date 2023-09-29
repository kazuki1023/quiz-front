import Header from '../components/admin/parts/Header';
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { FormControl } from '@mui/base/FormControl';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const EditPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<{
    id: number;
    content: string;
    img: string;
    choices: Array<{ answer: string; valid: number; }>;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // idから問題を取得
  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost/api/v1/quiz/${id}`)
      .then(response => {
        const fetchedData = response.data.data; // ここでAPIからのデータを取得
        setData(fetchedData);
        setIsLoading(false);
        console.log(fetchedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <>
        <Header />
        <p>ローディング中です</p>
      </>
    );// データがロード中の場合、ローディングメッセージを表示
  }
  return (
    <>
      <Header />
      <FormControl >
        <Container maxWidth="sm">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="問題番号" variant="standard" defaultValue={data?.id} disabled />
            <TextareaAutosize id="standard-basic" placeholder="問題文" defaultValue={data?.content} />
            <CardMedia
              component="img"
              height="194"
              image={data?.img}
              alt="問題の写真"
            />
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}sx={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }} >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <TextField id="standard-basic" label="問題番号" variant="standard" defaultValue={data?.id} />
            <TextField id="standard-basic" label="問題番号" variant="standard" defaultValue={data?.id} />
          </Box>
        </Container>
      </FormControl>
    </>
  );
}
export default EditPage;