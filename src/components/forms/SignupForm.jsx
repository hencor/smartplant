import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required('Ingrese su nombre'),
    lastName: yup.string().required('Ingrese su apellido'),
    email: yup.string().required('Ingrese su email').email('El email que ingreso es invalido'),
    phone: yup.string().required('Ingrese su telefono'),
    password: yup
      .string()
      .required('Ingrese su contraseña')
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: yup
      .string()
      .required('Confirme la contraseña')
      .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    // controlar registro
    console.log(data);
    
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md={6} className="mb-4">
          <Form.Group className="form-floating" controlId="firstName">
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Nombres"
              {...register('firstName')}
              className={`${errors.firstName ? 'is-invalid' : ''}`}
            />
            <Form.Label>Nombres</Form.Label>
            <Form.Control.Feedback type="invalid">
              {errors.firstName?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6} className="mb-4">
          <Form.Group className="form-floating" controlId="lastName">
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Apellidos"
              {...register('lastName')}
              className={`${errors.lastName ? 'is-invalid' : ''}`}
            />
            <Form.Label>Apellidos</Form.Label>
            <Form.Control.Feedback type="invalid">
              {errors.lastName?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="form-floating mb-3" controlId="email">
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          {...register('email')}
          className={`${errors.email ? 'is-invalid' : ''}`}
        />
        <Form.Label>Email</Form.Label>
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-floating mb-3" controlId="phone">
        <Form.Control
          type="text"
          name="phone"
          placeholder="Teléfono"
          {...register('phone')}
          className={`${errors.phone ? 'is-invalid' : ''}`}
        />
        <Form.Label>Phone</Form.Label>
        <Form.Control.Feedback type="invalid">
          {errors.phone?.message}
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
      <Form.Group className="form-floating mb-3" controlId="confirmPassword">
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="Repita la Contraseña"
          {...register('confirmPassword')}
          className={`${errors.confirmPassword ? 'is-invalid' : ''}`}
        />
        <Form.Label>Repita la Contraseña</Form.Label>
        <Form.Control.Feedback type="invalid">
          {errors.confirmPassword?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <div className="text-center">
        <Button className="btn-lg btn-block" type="submit" id="submitButton">
          Registrar
        </Button>
        <p className="mt-2 pt-1 mb-0">
          Ya tienes una cuenta?&nbsp;
          <Link to="/login" className="link-primary">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default SignupForm;
