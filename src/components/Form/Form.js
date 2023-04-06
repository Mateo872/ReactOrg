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

  const { collaboratorRegister } = props;

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
        <ListOptions value={team} setTeam={setTeam} teams={props.teams} />
        <Button>Crear</Button>
      </form>
    </section>
  );
};

export default Form;
