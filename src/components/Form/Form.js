import "./Form.css";
import TextField from "../TextField";
import ListOptions from "../ListOptions";
import Button from "../Button";

const form = (e) => {
  e.preventDefault();
};

const Form = () => {
  return (
    <section className="form-container">
      <form onSubmit={form}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <TextField title="Nombre" placeholder="Ingresar nombre" required />
        <TextField title="Puesto" placeholder="Ingresar puesto" required />
        <TextField
          title="Foto"
          placeholder="Ingresar enlace de foto"
          required
        />
        <ListOptions title="Equipo" />
        <Button>Crear</Button>
      </form>
    </section>
  );
};

export default Form;
