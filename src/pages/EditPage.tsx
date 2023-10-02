import Header from '../components/admin/parts/Header';
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef} from 'react';
import Container from '@mui/material/Container';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { FormControl } from '@mui/base/FormControl';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

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
  const defaultChoice = data?.choices.find(choice => choice.valid === 1);

  // idから問題を取得
  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost/api/v1/quiz/${id}`)
      .then(response => {
        const fetchedData = response.data.data; // ここでAPIからのデータを取得
        setData(fetchedData);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [id]);

// 問題文を取得
const contentRef = useRef<HTMLTextAreaElement>(null);

// 選択肢を取得
const [choiceRefs, setChoiceRefs] = useState<React.RefObject<HTMLInputElement>[]>([]);
useEffect(() => {
  if (data?.choices) {
    // data.choicesの長さに基づいて新しいuseRef配列を作成
    const newRefs = data.choices.map(() => React.createRef<HTMLInputElement>());
    setChoiceRefs(newRefs);
  }
}, [data]);


  if (isLoading) {
    return (
      <>
        <Header />
        <p>ローディング中です</p>
      </>
    );// データがロード中の場合、ローディングメッセージを表示
  }


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget);

    // ここでフォームデータを収集
    const formData = new FormData(event.currentTarget);
    console.log(formData);
    const jsonData: Record<string, any> = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      const response = await axios.put(`http://localhost/api/v1/quiz/${id}`, jsonData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        console.log('更新に成功しました！');
        // 必要であれば、他のロジック（例：ページのリダイレクト）をここに追加
      } else {
        console.error('更新に失敗しました');
      }
    } catch (error) {
      console.error('エラー:', error);
    }
  };



  return (
    <>
      <Header />
      <form action="" method="put" onSubmit={handleSubmit}>
        <FormControl >
          <Container maxWidth="sm">
            <Box
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
            >
              <TextField id="standard-basic" label="問題番号" variant="standard" defaultValue={data?.id} disabled/>
              <TextareaAutosize id="standard-basic" placeholder="問題文" defaultValue={data?.content} name="content" ref={contentRef}/>
              <CardMedia
                component="img"
                height="194"
                image={data?.img}
                alt="問題の写真"
              />
              <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }} >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={defaultChoice ? defaultChoice.answer : ""}
                name="choices[]"
              >
                {
                  data?.choices.map((choice, index) => (
                    <React.Fragment key={index} >
                      <TextField label="正解の選択肢" variant="standard" defaultValue={choice.answer} name='text' inputRef={choiceRefs[index]} />
                      <FormControlLabel control={<Radio />} value={choice.answer} label="" sx={{ mb: 2 }} name='valid' />
                    </React.Fragment>
                  ))
                }
              </RadioGroup>
            </Box>
            <Button type="submit" variant="contained" color="primary">
              更新する
            </Button>
          </Container>
        </FormControl>
      </form>
    </>
  );
}
export default EditPage;