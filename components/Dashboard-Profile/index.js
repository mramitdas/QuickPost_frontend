import React, { use, useEffect } from "react";
import DashoardSidebar from "../Dashboard-Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import fetchData from "../Service/GetUser";
const DashoardProfile = () => {
  useEffect(() => {
     fetchData();
  },[])
  return (
    <div className={styles.profile}>
      <div className={styles.sidebar}>
        <DashoardSidebar />
      </div>
      <div className={styles.content}>
        {/* <div className={styles.contentTop}>
          <div className={styles.contentTopLeft}>
            <FontAwesomeIcon
              icon={faUserFriends}
              size="1x"
              className={styles.icon}
            />
            <h4>Users</h4>
          </div>
          <div className={styles.contentTopcenter}>
            <button className={styles.button1}>All Users</button>
            <button className={styles.button1}>Settings</button>
          </div>
          <div className={styles.contentTopRight}>
            <button className={styles.button2}>
              <FontAwesomeIcon />
              Add New User
            </button>
          </div>
        </div> */}
        <div className={styles.contentBottom}>
          <h4>Profile Information</h4>
          <div className={styles.form}>
            <div className={styles.inputContainer}>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className={styles.input}
              disabled
            />
            </div>
            <div className={styles.inputContainer}>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className={styles.input}
              disabled

            />
            </div>
            <div className={styles.inputContainer}>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className={styles.input}
            />
            </div>
            <div className={styles.inputContainer}>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className={styles.input}
            />
            </div>
            <div className={styles.inputContainer}>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className={styles.input}
            />
            </div>
            <div className={styles.inputContainer}>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className={styles.input}
            />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashoardProfile;
