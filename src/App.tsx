import './App.css'
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import Home from './pages/Quizpage';
import Login from './pages/Loginpage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={``} element={<Home />} />
        </Routes>
        <Routes>
          <Route path={`/login`} element={<Login />} />
        </Routes>

      </BrowserRouter>
  );
}

export default App;
