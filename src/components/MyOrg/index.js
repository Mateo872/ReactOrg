import "./MyOrg.css";

const MyOrg = (props) => {
  return (
    <section>
      <h3>Mi organización</h3>
      <img src="./img/add.png" alt="add" onClick={props.changeShow} />
    </section>
  );
};

export default MyOrg;
