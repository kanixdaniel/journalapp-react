import { Navigate, Route, Routes } from 'react-router-dom';
import { useCheckAuth } from '../../hooks';
import { CheckingAuth } from '../../ui';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {

  const status = useCheckAuth();

  if(status == 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>

      {
        (status === 'authenticated')
        ? <Route path="/*" element={ <JournalRoutes /> } />
        : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }

      <Route path="/*" element={ <Navigate to='/auth/login' /> } />

      {/* Login y Registro */}
      {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

      {/* JournalApp */}
      {/* <Route path="/*" element={ <JournalRoutes /> } /> */}
    </Routes>
  )
}
