import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import MyOrg from "./components/MyOrg";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [showForm, updateShow] = useState(false);
  const [collaborators, setCollaborators] = useState([
    {
      id: uuid(),
      team: "Front End",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      job: "Instructor",
      fav: false,
    },
    {
      id: uuid(),
      team: "Programación",
      photo: "https://github.com/genesysaluralatam.png",
      name: "Genesys Rondón",
      job: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuid(),
      team: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      job: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuid(),
      team: "Programación",
      photo: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      job: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuid(),
      team: "Innovación y Gestión",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      name: "Jose Gonzalez",
      job: "Dev FullStack",
      fav: false,
    },
  ]);

  const [teams, setTeams] = useState([
    {
      id: uuid(),
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      id: uuid(),
      title: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      id: uuid(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },

    {
      id: uuid(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },

    {
      id: uuid(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ]);

  const changeShow = () => {
    updateShow(!showForm);
  };

  const collaboratorRegister = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const collaboratorDelete = (id) => {
    const newCollaborators = collaborators.filter(
      (collaborator) => collaborator.id !== id
    );
    setCollaborators(newCollaborators);
  };

  const setColor = (color, id) => {
    const updatedTeams = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = color;
      }

      return team;
    });

    setTeams(updatedTeams);
  };

  const createTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuid() }]);
  };

  const favorites = (id) => {
    const updatedCollaborators = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.fav = !collaborator.fav;
      }
      return collaborator;
    });

    setCollaborators(updatedCollaborators);
  };

  return (
    <div>
      <Header />
      {showForm && (
        <Form
          teams={teams.map((team) => team.title)}
          collaboratorRegister={collaboratorRegister}
          createTeam={createTeam}
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
          collaboratorDelete={collaboratorDelete}
          setColor={setColor}
          favorites={favorites}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
