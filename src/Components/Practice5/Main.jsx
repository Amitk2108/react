import Button from "./button";
import Hello from "./Hello";
import Avatar from "./Avatar";

const Main = () => {
  return (
    <div>
      <Hello />
      <Button text="John Wick" movie="matrix" />
      <Avatar />
    </div>
  );
};

export default Main;
