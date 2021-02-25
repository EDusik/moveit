import styles from "../styles/components/Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/EDusik.png" alt="Eduardo Dusik" />
      <div>
        <strong>Eduardo Dusik</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
            Level 1
          </p>
      </div>
    </div>
  );
};
