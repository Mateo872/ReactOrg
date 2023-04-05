import "./Collaborator.css";

const Collaborator = (props) => {
  const { name, job, photo, team } = props.data;
  const { primaryColor } = props;

  return (
    <div className="collaborator">
      {/* <AiFillCloseCircle className="delete" onClick={collaboratorDelete} /> */}
      <div
        className="collaborator__header"
        style={{ backgroundColor: primaryColor }}
      >
        <img src={photo} alt={name} />
      </div>
      <div className="collaborator__info">
        <h4>{name}</h4>
        <h5>{job}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
