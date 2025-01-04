import React from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const DashoardSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profileInfo}>
        <div>
          <h4>John Doe</h4>
          <h5 className={styles.email}>Jhondoe@gmail.com</h5>
        </div>
        <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
      </div>
      <div className={styles.navigation}>
        <div className={styles.button}>
          <button>Dashboard</button>
          <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
        </div>
        <div className={styles.button}>
          <button>Users</button>
          <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
        </div>
        <div className={styles.button}>
          <button>Learn</button>
          <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
        </div>
        <div className={styles.button}>
          <button>Help Center</button>
          <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
        </div>
        <div className={styles.button}>
          <button>Support</button>
          <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
        </div>
        <div className={styles.button}>
          <button>Privacy Policy</button>
          <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default DashoardSidebar;
