function Child({ message }) {
  return <div>Child: {message}</div>;
}
function Parent({ message }) {
  return <Child message={message} />;
}
function Task4() {
  return (
    <div>
      <h3>Task 4: GrandParent ➝ Parent ➝ Child</h3>
      <Parent message="Hello from GrandParent" />
    </div>
  );
}
export default Task4;
