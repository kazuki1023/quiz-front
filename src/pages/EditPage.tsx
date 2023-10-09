import { useEffect, useState } from 'react';
import { FormControl, FormHelperText, TextField, Typography, Box, Button } from '@mui/material';
import Header from '../components/admin/parts/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Control, Controller, FieldValues, Path, useForm } from 'react-hook-form';
import Loader from '../components/Loader';
const validationRules = {
  comment: {
    maxLength: { value: 1000, message: '1000文字以内で入力してください' },
  },
};
const EditPage = () => {
  const [isLoading, setIsLoading] = useState(true); // ローディング中かどうかの状態
  const { id } = useParams<{ id: string }>();
  const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>();

  useEffect(() => {
    axios.get(`http://localhost/api/v1/quiz/${id}`)
      .then(response => {
        console.log(response.data.data)
        setIsLoading(false);
      }
      )
      .catch(error => console.error('Error fetching data:', error));
  }, [id])


  return (
    <>
      <Header />
      {isLoading ? <Loader /> :
        <Box component="form" sx={{ p: 2, width: 4 / 5, mx: 'auto', my: 2 }}>
          <Controller
            name={"content"}
            control={control}
            rules={validationRules.comment}
            render={({ field, fieldState }) => (
              <FormControl error={!!fieldState.error?.message} sx={{ width: '100%', m: 2 }}>
                <TextField
                  {...field}
                  error={fieldState.error ? true : false}
                  label="問題文"
                  variant="outlined"
                  fullWidth
                  rows={4}
                  multiline
                />
                <FormHelperText sx={{ position: 'absolute', top: '100%', m: 0.5 }}>
                  {fieldState.error?.message}
                </FormHelperText>
              </FormControl>
            )}
          />
          <Controller
            name={"content"}
            control={control}
            rules={validationRules.comment}
            render={({ field, fieldState }) => (
              <FormControl error={!!fieldState.error?.message} sx={{ width: '100%', m: 2 }}>
                <TextField
                  {...field}
                  error={fieldState.error ? true : false}
                  label="選択肢"
                  variant="outlined"
                  fullWidth
                  rows={1}
                  multiline
                />
                <FormHelperText sx={{ position: 'absolute', top: '100%', m: 0.5 }}>
                  {fieldState.error?.message}
                </FormHelperText>
              </FormControl>
            )}
          />
          <Controller
            name={"content"}
            control={control}
            rules={validationRules.comment}
            render={({ field, fieldState }) => (
              <FormControl error={!!fieldState.error?.message} sx={{ width: '100%', m: 2 }}>
                <TextField
                  {...field}
                  error={fieldState.error ? true : false}
                  label="選択肢"
                  variant="outlined"
                  fullWidth
                  rows={1}
                  multiline
                />
                <FormHelperText sx={{ position: 'absolute', top: '100%', m: 0.5 }}>
                  {fieldState.error?.message}
                </FormHelperText>
              </FormControl>
            )}
          />
          <Controller
            name={"content"}
            control={control}
            rules={validationRules.comment}
            render={({ field, fieldState }) => (
              <FormControl error={!!fieldState.error?.message} sx={{ width: '100%', m: 2 }}>
                <TextField
                  {...field}
                  error={fieldState.error ? true : false}
                  label="選択肢"
                  variant="outlined"
                  fullWidth
                  rows={1}
                  multiline
                />
                <FormHelperText sx={{ position: 'absolute', top: '100%', m: 0.5 }}>
                  {fieldState.error?.message}
                </FormHelperText>
              </FormControl>
            )}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 2}}>
            <Button variant="contained" type="submit" sx={{ mx: 'auto', w: 1 }}>
              登録・更新
            </Button>
          </Box>
        </Box>
      }
    </>
  );
}
export default EditPage;