import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const SigninForm = () => {
  const schema = yup.object().shape({
    username: yup.string().required('Ingrese su usuario'),
    password: yup.string().required('Ingrese su contraseña'),
  });

  const initialValues = {
    username: '',
    password: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { initialValues },
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  
  const onSubmit = (data) => {
    console.log(data);
    navigate('/fincas');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="form-floating mb-3" controlId="username">
        <Form.Control
          type="text"
          name="username"
          placeholder="Usuario"
          {...register('username')}
          className={`${errors.username ? 'is-invalid' : ''}`}
        />
        <Form.Label>Usuario</Form.Label>
        <Form.Control.Feedback type="invalid">
          {errors.username?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-floating mb-3" controlId="password">
        <Form.Control
          type="password"
          name="password"
          placeholder="Contraseña"
          {...register('password')}
          className={`${errors.password ? 'is-invalid' : ''}`}
        />
        <Form.Label>Contraseña</Form.Label>
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <a href="#!">Olvidaste tu contraseña?</a>
      </div>
      <div className="text-center">
        <Button className="btn-lg btn-block" type="submit" id="submitButton">
          Iniciar Sesión
        </Button>
        <p className='mt-2 pt-1 mb-0'>
          No tienes una cuenta?&nbsp;<Link to='/signup' className='link-primary'>Registrate</Link>
        </p>
      </div>
    </Form>
  );
};

export default SigninForm;
