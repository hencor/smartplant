import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { iconsOpt } from '../../components/ui/icons';

const names = [
  'Invernadero',
  'Iluminación exterior',
  'Bomba de agua',
  'Cerca eléctrica',
];

const WorkspaceForm = ({ workspace, onSubmitParent }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    function: yup.string().required('Ingrese el nombre de la finca'),
  });

  const initialValues = {
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
      <Form.Group className="form-floating mb-3" controlId="name">
        <Form.Select
          aria-label="select"
          defaultValue={workspace?.name}
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
          defaultValue={workspace ? workspace.function : ''}
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

export default WorkspaceForm;
