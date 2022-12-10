import { Routes, Route } from 'react-router-dom';
import SigninForm from '../components/forms/SigninForm';
import SignupForm from '../components/forms/SignupForm';
import Landing from '../pages/Landing/landing';
import Login from '../pages/Login/login';
import Fincas from '../pages/Fincas/fincas';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/productos" element={<div>Productos</div>} />
      <Route
        path="/login"
        element={<Login children={<SigninForm />} />}
      />
      <Route
        path="/signup"
        element={<Login children={<SignupForm />} />}
      />
      <Route  path='/fincas' element={<Fincas /> } />
      <Route  path='/fincas/nueva' element={<>Hey</>} />
    </Routes>
  );
}

export default Router;
