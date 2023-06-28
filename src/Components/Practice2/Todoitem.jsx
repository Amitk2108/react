const Todoitem = ({ title, status }) => {
  return (
    <div>
      <p>
        {title}
        {"-----"}
        {status ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
};

export default Todoitem;
