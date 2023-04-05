import "./ListOptions.css";

const ListOptions = () => {
  const teams = [
    "Programación",
    "Front-End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  return (
    <div className="list-options">
      <label>Equipos</label>
      <select>
        {teams.map((team, index) => (
          <option key={index}>{team}</option>
        ))}
      </select>
    </div>
  );
};

export default ListOptions;
