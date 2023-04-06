import "./Team.css";
import Collaborator from "../Collaborator";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {
  const { title, primaryColor, secondaryColor, id } = props.data;
  const { collaborators, collaboratorDelete, updateColor, favorites } = props;

  return (
    <>
      {collaborators.length > 0 && (
        <section
          className="team"
          style={{ backgroundColor: hexToRgba(primaryColor, 0.6) }}
        >
          <input
            type="color"
            className="input-color"
            value={primaryColor}
            onChange={(e) => {
              updateColor(e.target.value, id);
            }}
          />

          <h3 style={{ borderColor: primaryColor }}>{title}</h3>
          <div className="collaborators">
            {collaborators.map((collaborator, index) => (
              <Collaborator
                data={collaborator}
                key={index}
                primaryColor={primaryColor}
                collaboratorDelete={collaboratorDelete}
                favorites={favorites}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
