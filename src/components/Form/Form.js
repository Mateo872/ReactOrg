import "./Form.css";
import TextField from "../TextField";
import ListOptions from "../ListOptions";

const Form = () => {
  return (
    <section className="form-container">
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <TextField title="Nombre" placeholder="Ingresar nombre" />
        <TextField title="Puesto" placeholder="Ingresar puesto" />
        <TextField title="Foto" placeholder="Ingresar enlace de foto" />
        <ListOptions title="Equipo" />
      </form>
    </section>
  );
};

export default Form;
