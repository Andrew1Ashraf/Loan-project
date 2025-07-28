const FormInputs = ({
  value,
  label,
  handleInputChange,
}: {
  value: string;
  label: string;
  handleInputChange(value: string): void;
}) => {
  return (
    <>
      <label htmlFor="Age">{label}</label>
      <input
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        type="text"
        id="Age"
      />
    </>
  );
};

export default FormInputs;
