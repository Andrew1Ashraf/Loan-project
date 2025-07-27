import React, { useState } from "react";
import "../styles/Form.css";
import ConfirmPopUp from "./ConfirmPopUp";
import RejectionPopUp from "./RejectionPopUp";
const Form = () => {
  /*STATES*/
  const [confirmPopUp, setConfirmPopUp] = useState(false);
  const [rejectionPopUp, setRejectionPopUp] = useState(false);
  const [rejectionContent, setRejectionContent] = useState("");
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phone: "",
    age: "",
    employee: false,
    salary: "",
  });

  /*Handlers*/

  function handleSubmitBtn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (
      loanInputs.phone.trim().length >= 10 &&
      loanInputs.phone.trim().length <= 12 &&
      parseInt(loanInputs.age, 10) >= 18 &&
      parseInt(loanInputs.age, 10) <= 70
    ) {
      setConfirmPopUp(true);
      setRejectionPopUp(false);
    } else if (
      !(
        loanInputs.phone.trim().length >= 10 &&
        loanInputs.phone.trim().length <= 12
      )
    ) {
      setRejectionPopUp(true);
      setConfirmPopUp(false);
      setRejectionContent("Phone number is not valid");
    } else if (
      !(
        parseInt(loanInputs.age, 10) >= 18 && parseInt(loanInputs.age, 10) <= 70
      )
    ) {
      setRejectionPopUp(true);
      setConfirmPopUp(false);
      setRejectionContent(
        "Age is not Allowed , age should be between 18 and 70"
      );
    }
  }

  function handlePopUpClose() {
    if (confirmPopUp || rejectionPopUp) {
      setConfirmPopUp(false);
      setRejectionPopUp(false);
    }
  }

  function btnIsDisabled() {
    if (
      loanInputs.name === "" ||
      loanInputs.phone === "" ||
      loanInputs.age === "" ||
      loanInputs.salary === ""
    ) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <div onClick={handlePopUpClose} className="Form">
        <form className="Form-container">
          <h1
            className="Form-title"
            style={{
              textAlign: "center",
              marginBottom: "50px",
              color: "#ff6600ff",
            }}
          >
            Loan Application
          </h1>
          <label htmlFor="name">Name:</label>
          <input
            value={loanInputs.name}
            onChange={(e) =>
              setLoanInputs({ ...loanInputs, name: e.target.value })
            }
            type="text"
            id="name"
          />

          <label htmlFor="Phone">Phone:</label>
          <input
            value={loanInputs.phone}
            onChange={(e) =>
              setLoanInputs({ ...loanInputs, phone: e.target.value })
            }
            type="text"
            id="Phone"
          />

          <label htmlFor="Age">Age:</label>
          <input
            value={loanInputs.age}
            onChange={(e) =>
              setLoanInputs({ ...loanInputs, age: e.target.value })
            }
            type="text"
            id="Age"
          />

          <label htmlFor="Employee">Are you an Employee?</label>
          <input
            checked={loanInputs.employee}
            onChange={(e) =>
              setLoanInputs({ ...loanInputs, employee: e.target.checked })
            }
            type="checkbox"
            id="Employee"
          />

          <label htmlFor="Salary">Salary:</label>
          <select
            value={loanInputs.salary}
            onChange={(e) =>
              setLoanInputs({ ...loanInputs, salary: e.target.value })
            }
            id="Salary"
          >
            <option value="less than 500$">less than 500$</option>
            <option value="between 500$ and 2000$">
              between 500$ and 2000$
            </option>
            <option value="above 2000$">above 2000$</option>
          </select>

          <button
            style={{
              color: "white",
              backgroundColor: btnIsDisabled() ? "gray" : "#ff6600ff",
            }}
            disabled={btnIsDisabled()}
            onClick={handleSubmitBtn}
          >
            Submit
          </button>
        </form>
        <ConfirmPopUp showPopUp={confirmPopUp} />
        <RejectionPopUp
          showPopUp={rejectionPopUp}
          popUpContent={rejectionContent}
        />
      </div>
    </>
  );
};

export default Form;
