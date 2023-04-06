import { useState } from "react";
import "./Form.css";
import Field from "../Field";
import ListOptions from "../ListOptions";
import Button from "../Button";

const Form = (props) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const { collaboratorRegister, createTeam } = props;

  const handleForm = (e) => {
    e.preventDefault();

    const sendData = {
      name,
      job,
      photo,
      team,
    };
    collaboratorRegister(sendData);
  };

  const handleNewTeam = (e) => {
    e.preventDefault();

    createTeam({ title, primaryColor: color });
  };

  return (
    <section className="form-container">
      <form onSubmit={handleForm}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Field
          title="Nombre"
          placeholder="Ingresar nombre"
          required
          value={name}
          setValue={setName}
        />
        <Field
          title="Puesto"
          placeholder="Ingresar puesto"
          required
          value={job}
          setValue={setJob}
        />
        <Field
          title="Foto"
          placeholder="Ingresar enlace de foto"
          required
          value={photo}
          setValue={setPhoto}
        />
        <ListOptions title="Equipo" setTeam={setTeam} teams={props.teams} />
        <Button>Crear</Button>
      </form>
      <form onSubmit={handleNewTeam}>
        <h2>Rellena el formulario para crear el equipo.</h2>

        <Field
          title="Título"
          placeholder="Ingresar título"
          value={title}
          required
          updateValue={setTitle}
        />
        <Field
          title="Color"
          placeholder="Ingresar el color en Hex"
          value={color}
          required
          updateValue={setColor}
          type="color"
        />
        <Button>Registrar equipo</Button>
      </form>
    </section>
  );
};

export default Form;
