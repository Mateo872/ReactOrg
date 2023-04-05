import "./ListOptions.css";

const ListOptions = (props) => {
  const teams = [
    "Programación",
    "Front-End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  const handleChange = (e) => {
    props.setTeam(e.target.value);
  };

  return (
    <div className="list-options">
      <label>Equipos</label>
      <select value={props.value} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>

        {teams.map((team, index) => (
          <option key={index}>{team}</option>
        ))}
      </select>
    </div>
  );
};

export default ListOptions;
