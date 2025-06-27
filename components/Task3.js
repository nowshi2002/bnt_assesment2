function ChildComponent({ message }) {
  return <p>{message}</p>;
}
function Task3() {
  return (
    <div>
      <h3>Task 3: Parent to Child</h3>
      <ChildComponent message="Good morning" />
    </div>
  );
}
export default Task3;
