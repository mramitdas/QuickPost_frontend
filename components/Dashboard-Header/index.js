import {
  faAngleLeft,
  faBell,
  faCircleQuestion,
  faCircleXmark,
  faGear,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

const DashoardHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="1x"
          style={{
            color: "grey",
            marginRight: "10px",
            cursor: "pointer",
            borderRadius: "50%",
            border: "1px solid black",
            padding: "0.625rem",
          }}
        />
        <h2>Quick Post</h2>
      </div>
      <div className={styles.center}>
        <ul>
          <li>Dashboard</li>
          <li>News</li>
          <li>Support</li>
          <li>More</li>
        </ul>
      </div>
      <div className={styles.right}>
        <FontAwesomeIcon icon={faBell} size="1x" style={{ color: "grey" }} />
        <FontAwesomeIcon
          icon={faCircleQuestion}
          size="1x"
          style={{ color: "grey" }}
        />

        <FontAwesomeIcon icon={faGear} size="1x" style={{ color: "grey" }} />
        <Link href="/subscribe"><button>Upgrade</button></Link>
        
        <FontAwesomeIcon
          icon={faUserLarge}
          size="1x"
          style={{ color: "grey" }}
        />
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="1x"
          style={{ color: "grey" }}
        />
      </div>
    </div>
  );
};

export default DashoardHeader;
