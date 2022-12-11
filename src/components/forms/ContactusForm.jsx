import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ContactusForm = ({ onSubmitParent }) => {
  const schema = yup.object().shape({
    name: yup.string().required('Ingrese su usuario'),
    email: yup
      .string()
      .required('Ingrese su correo')
      .email('El email que ingreso es invalido'),
    phone: yup.string().required('Ingrese su usuario'),
    message: yup.string().required('Ingrese su contraseña'),
  });

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: { initialValues },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // enviar datos
    onSubmitParent(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="form-floating mb-3" controlId="name">
        <Form.Control
          type="text"
          name="name"
          placeholder="Nombre"
          {...register('name')}
          className={`${errors.name ? 'is-invalid' : ''}`}
        />
        <Form.Label>Nombre</Form.Label>
        <Form.Control.Feedback type="invalid">
          {errors.name?.message}
        </Form.Control.Feedback>
      </Form.Group>
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
          placeholder="Phone"
          {...register('phone')}
          className={`${errors.phone ? 'is-invalid' : ''}`}
        />
        <Form.Label>Phone</Form.Label>
        <Form.Control.Feedback type="invalid">
          {errors.phone?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-floating mb-3" controlId="message">
        <Form.Control
          as="textarea"
          rows="3"
          name="message"
          placeholder="Descripción"
          {...register('message')}
          className={`${errors.message ? 'is-invalid' : ''}`}
        />
        <Form.Label>Mensaje</Form.Label>
        <Form.Control.Feedback type="invalid">
          {errors.message?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <div className="text-center">
        <Button className="btn-lg btn-block" type="submit" id="submitButton">
          Enviar
        </Button>
      </div>
    </Form>
  );
};

export default ContactusForm;
