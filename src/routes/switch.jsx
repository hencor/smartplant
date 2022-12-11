import { Routes, Route } from 'react-router-dom';
import SigninForm from '../components/forms/SigninForm';
import SignupForm from '../components/forms/SignupForm';
import Landing from '../pages/Landing/landing';
import Login from '../pages/Login/login';
import Fincas from '../pages/Fincas/fincas';
import Workspaces from '../pages/Workspaces/workspaces';
import Devices from '../pages/Devices/devices';

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
      <Route path='/fincas/:id/espacios' element={<Workspaces />} />
      <Route path='/fincas/:id/espacios/:id/dispositivos' element={<Devices />} />
      <Route path='/fincas/:id/espacios/:id/dispositivos/:id/escenas' element={<></>} />
    </Routes>
  );
}

export default Router;
