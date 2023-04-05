import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import MyOrg from "./components/MyOrg";
import Team from "./components/Team";

function App() {
  const [showForm, updateShow] = useState(false);
  const [collaborators, setCollaborators] = useState([]);

  const changeShow = () => {
    updateShow(!showForm);
  };

  const collaboratorRegister = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const teams = [
    {
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      title: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },

    {
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },

    {
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  return (
    <div>
      <Header />
      {showForm && (
        <Form
          teams={teams.map((team) => team.title)}
          collaboratorRegister={collaboratorRegister}
        />
      )}

      <MyOrg changeShow={changeShow} />

      {teams.map((team) => (
        <Team
          data={team}
          key={team.title}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.title
          )}
        />
      ))}
    </div>
  );
}

export default App;
