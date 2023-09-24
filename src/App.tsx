import './App.css'
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import Home from './pages/Quizpage';
import SignIn from './pages/SignInpage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={``} element={<Home />} />
        </Routes>
        <Routes>
          <Route path={`/signIn`} element={<SignIn />} />
        </Routes>

      </BrowserRouter>
  );
}

export default App;
