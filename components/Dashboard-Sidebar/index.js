import React from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const DashboardSidebar = ({ user, navigationItems, socialPlatforms }) => {
  const platformIcons = {
    facebook: { icon: faFacebook, color: "#4267B2" },
    instagram: { icon: faInstagram, color: "#E4405F" },
    twitter: { icon: faTwitter, color: "#1DA1F2" },
  };

  const SocialMediaProfile = ({ platform, user }) => {
    const platformInfo = platformIcons[platform];

    if (!platformInfo) return null;

    return (
      <div className={styles.Social}>
        <FontAwesomeIcon
          icon={platformInfo.icon}
          size="2x"
          style={{ margin: "0 10px", color: platformInfo.color }}
        />
        <div className={styles.SocialIdInfo}>
          <h4>{user.name}</h4>
          <h5 className={styles.email}>{user.email}</h5>
        </div>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon1} />
      </div>
    );
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.profileInfo}>
  <div className={styles.profilePic}>
    {user.profilePic ? (
      <img src={user.profilePic} alt={`${user.name}'s profile`} />
    ) : (
      <span className={styles.initials}>
        {user.name
          .split(' ')
          .map((n) => n[0])
          .join('')
          .toUpperCase()}
      </span>
    )}
  </div>
  <div className={styles.SocialIdInfo} style={{marginLeft: "10px"}}>
    <h4>{user.name}</h4>
    <h5 className={styles.email}>{user.email}</h5>
  </div>
  <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
</div>
      <div className={styles.navigation}>
        {navigationItems.map((item, index) => (
          <div key={index} className={styles.button}>
            <button>{item.label}</button>
            {item.hasSubmenu && (
              <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
            )}
          </div>
        ))}
      </div>
      <div className={styles.socialProfiles}>
        {socialPlatforms.map((platform, index) => (
          <SocialMediaProfile key={index} platform={platform} user={user} />
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
