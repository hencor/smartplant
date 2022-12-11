import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const FincaForm = ({ finca, onSubmitParent }) => {
  const schema = yup.object().shape({
    name: yup.string().required('Ingrese el nombre'),
    description: yup.string().required('Ingrese la función'),
  });

  const initialValues = {
    name: '',
    description: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { initialValues },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // controlar editar
    onSubmitParent(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="form-floating mb-3" controlId="name">
        <Form.Control
          type="text"
          name="name"
          placeholder="Nombre"
          defaultValue={finca ? finca.name : ''}
          {...register('name')}
          className={`${errors.name ? 'is-invalid' : ''}`}
        />
        <Form.Label>Nombre</Form.Label>
        <Form.Control.Feedback type="invalid">
          {errors.name?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-floating mb-3" controlId="description">
        <Form.Control
          as="textarea"
          rows='3'
          name="description"
          placeholder="Descripción"
          defaultValue={finca ? finca.description : ''}
          {...register('description')}
          className={`${errors.description ? 'is-invalid' : ''}`}
        />
        <Form.Label>Descripción</Form.Label>
        <Form.Control.Feedback type="invalid">
          {errors.description?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <div className="text-center">
        <Button className="btn-lg btn-block" type="submit" id="submitButton">
          Guardar
        </Button>
      </div>
    </Form>
  );
};

export default FincaForm;
