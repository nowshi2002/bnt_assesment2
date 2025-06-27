function InputField({ label, placeholder, name, onChange }) {
  return (
    <div>
      <label>{label}: </label>
      <input
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
function Task8() {
  return (
    <div>
      <h3>Task 8: Reusable InputField</h3>
      <InputField
        label="Username"
        placeholder="Enter username"
        name="username"
        onChange={e => console.log(e.target.value)}
      />
    </div>
  );
}
export default Task8;
