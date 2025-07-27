import styles from "../styles/ConfirmPopUp.module.css";

const ConfirmPopUp = ({showPopUp}: {showPopUp: boolean}) => {
  return (
    <div style={{ display: showPopUp ? "block" : "none" }} className={styles.container}>
      <h1 className={styles.PopUp}>
        Your Loan Request has been submitted successfully
      </h1>
    </div>
  );
};

export default ConfirmPopUp;
