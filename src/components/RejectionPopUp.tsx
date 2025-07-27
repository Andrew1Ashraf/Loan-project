import styles from "../styles/RejectionPopUp.module.css";

const RejectionPopUp = ({ showPopUp,popUpContent }: { showPopUp: boolean, popUpContent: string }) => {
  return (
    <div style={{ display: showPopUp ? "block" : "none" }} className={styles.container}>
      <h1 className={styles.PopUp}>{popUpContent}</h1>
    </div>
  );
};

export default RejectionPopUp;
