import React, { useState, useEffect } from "react";
import DashoardSidebar from "../Dashboard-Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import fetchData from "../Service/GetUser";

const DashoardProfile = () => {

  const user = {
    name: "John Doe",
    email: "Jhondoe@gmail.com",
  };
  
  const socialPlatforms = ["facebook", "instagram", "twitter"];

  const navigationItems = [
    { label: "Dashboard", hasSubmenu: true },
    { label: "Users", hasSubmenu: true },
    { label: "Learn", hasSubmenu: true },
    { label: "Help Center", hasSubmenu: true },
    { label: "Support", hasSubmenu: true },
    { label: "Privacy Policy", hasSubmenu: false },
  ];

  const defaultData = {
    firstName: "dasd",
    lastName: "asdasd",
    email: "asdfasfd@gmail.com",
    phone: "156151651",
    address: "Los Angles, CA",
    role: "Creator",
  }
  const [profileData, setProfileData] = useState(defaultData);

  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("profileData");
    if (storedData) {
      setProfileData(JSON.parse(storedData));
    } else {
      fetchInitialData();
    }
  }, []);

  const fetchInitialData = async () => {
    try {
      const data = await fetchData();
      const profile = data || defaultData;
      setProfileData(profile);
      localStorage.setItem("profileData", JSON.stringify(profile)); // Save fetched data to localStorage
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };
      localStorage.setItem("profileData", JSON.stringify(updatedData)); // Save changes to localStorage
      return updatedData;
    });
  };


  const toggleEditMode = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className={styles.profile}>
      <div className={styles.sidebar}>
        <DashoardSidebar user={user} navigationItems={navigationItems} socialPlatforms={socialPlatforms} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentBottom}>
         <div className={styles.header}>
         <h4>Profile Information</h4>
          <button className={styles.editButton} onClick={toggleEditMode}>
            {isEditable ? "Save Changes" : "Edit Profile"}
          </button>
         </div>
          <div className={styles.form}>
            {Object.keys(profileData || {}).map((key) => (
              <div className={styles.inputContainer} key={key}>
                <label className={styles.label}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type="text"
                  name={key}
                  value={profileData[key] || ""}
                  placeholder={`Enter ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                  className={styles.input}
                  disabled={!isEditable}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashoardProfile;
