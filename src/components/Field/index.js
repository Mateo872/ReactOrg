import "./Field.css";

const Field = (props) => {
  const { type = "text" } = props;

  const handleChange = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div className={`field field-${type}`}>
      <label>{props.title}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        onChange={handleChange}
        type={type}
      />
    </div>
  );
};

export default Field;
