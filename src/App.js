import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Loader from '../src/components/Loader/Loader'
import { useContext } from 'react';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader/>
  }
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
