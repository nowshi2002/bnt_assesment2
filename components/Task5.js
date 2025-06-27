function Task5() {
  const names = ["John", "Jane", "Alex"];
  return (
    <div>
      <h3>Task 5: List of Names</h3>
      <ul>
        {names.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Task5;
