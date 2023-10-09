import { useEffect, useState } from 'react';
import Header from '../components/admin/parts/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
const EditPage = () => {
  const [isLoading, setIsLoading] = useState(true); // ローディング中かどうかの状態
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    axios.get(`http://localhost/api/v1/quiz/${id}`)
      .then(response => {
        console.log(response.data.data)
        setIsLoading(false); // ローディングが終わったのでfalseに
      }
      )
      .catch(error => console.error('Error fetching data:', error));
  })
  return (
    <>
      <Header />
      {isLoading ? <Loader /> :
        <form action="" method="put" >
        </form>
      }
    </>
  );
}
export default EditPage;