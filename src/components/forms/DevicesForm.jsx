import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { iconsOpt } from '../../components/ui/icons';

const names = [
  'Luz artificial de germinación',
  'Estación meteorológica',
  'Sistema de riego',
  'Plagas',
];

const DevicesForm = ({ device, onSubmitParent }) => {
  const schema = yup.object().shape({
    mac: yup.string().required(),
    name: yup.string().required(),
    function: yup.string().required('Ingrese la función'),
  });

  const initialValues = {
    mac: '',
    name: '',
    function: '',
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
      <Form.Group className="form-floating mb-3" controlId="mac">
        <Form.Control
          type="text"
          name="mac"
          placeholder="MAC"
          defaultValue={device ? device.mac : ''}
          {...register('mac')}
          className={`${errors.mac ? 'is-invalid' : ''}`}
        />
        <Form.Label>MAC</Form.Label>
        <Form.Control.Feedback type="invalid">
          {errors.mac?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-floating mb-3" controlId="name">
        <Form.Select
          aria-label="select"
          defaultValue={device?.name}
          {...register('name')}
          className={`${errors.name ? 'is-invalid' : ''}`}
        >
          {names.map((name, index) => {
            return (
              <option key={index}>
                {name}
              </option>
            );
          })}
        </Form.Select>
        <Form.Label>Nombre</Form.Label>
        <Form.Control.Feedback type="invalid">
          {errors.name?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-floating mb-3" controlId="function">
        <Form.Control
          type="text"
          name="function"
          placeholder="Función"
          defaultValue={device ? device.function : ''}
          {...register('function')}
          className={`${errors.function ? 'is-invalid' : ''}`}
        />
        <Form.Label>Función</Form.Label>
        <Form.Control.Feedback type="invalid">
          {errors.function?.message}
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

export default DevicesForm;
