import './App.css'
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import Home from './pages/Quizpage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={``} element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
