import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Food from "../icons/Food";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar"
import styles from "./Attributes.module.css";

function Attributes() {
  return (
    <div className={styles.container}>
      <h3>Why us?</h3>
      <div className={styles.subContainer}>
        <div>
          <Food />
          <p>Fast</p>
        </div>
        <div>
          <Location />
          <p>Best Restaurants</p>
        </div>
        <div>
          <Clock />
          <p>Your Choice</p>
        </div>
        <div>
          <Dollar />
          <p>24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
