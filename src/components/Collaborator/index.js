import "./Collaborator.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Collaborator = (props) => {
  const { name, job, photo, id, fav } = props.data;
  const { primaryColor, collaboratorDelete, favorites } = props;

  return (
    <div className="collaborator">
      <AiFillCloseCircle
        className="delete"
        onClick={() => collaboratorDelete(id)}
      />
      <div
        className="collaborator__header"
        style={{ backgroundColor: primaryColor }}
      >
        <img src={photo} alt={name} />
      </div>
      <div className="collaborator__info">
        <h4>{name}</h4>
        <h5>{job}</h5>
        {fav ? (
          <AiFillHeart color="red" onClick={() => favorites(id)} />
        ) : (
          <AiOutlineHeart onClick={() => favorites(id)} />
        )}
      </div>
    </div>
  );
};

export default Collaborator;
