import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import ProtectedRoute from './components/protectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/account';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import './styles/App.css';

function App() {
  return (
    <>
      <AuthContextProvider>

        <Navbar />

        <Routes>

          <Route path='/' element={ <Home /> } />

          <Route path='/login' element={ <Login /> } />

          <Route path='/signup' element={ <Signup /> } />

          <Route path='/account' element={ <ProtectedRoute> <Account /> </ProtectedRoute> } />

        </Routes>

      </AuthContextProvider>
    </>
  );
}

export default App;
