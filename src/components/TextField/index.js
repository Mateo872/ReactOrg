import "./TextField.css";

const TextField = (props) => {
  return (
    <div className="text-field">
      <label>{props.title}</label>
      <input placeholder={props.placeholder} required={props.required} />
    </div>
  );
};

export default TextField;
