import "./index.css";
import { Fragment, useState } from "react";
import Flecha from "../../assets/Footer/Vector.png"

function LI(props) {
  const [change, setChage] = useState(false);

  return (
    <Fragment>
      <li className={change ? "Selected" : "notSelected"}>
        <div
          onClick={() => {
            console.log(props.text);
            setChage(!change);
          }}
        >
          <img src={Flecha} alt="" />
          <h3>{props.text}</h3>
        </div>
        <p className={change ? "pSelected" : "PnotSelected"}>{props.p}</p>
      </li>
    </Fragment>
  );
}

export default LI;
