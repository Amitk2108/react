// eslint-disable-next-line react/prop-types
const Button = ({ text, movie }) => {
  const movierelease = true;

  return (
    <>
      <button>{text}</button>
      <br />
      <br />
      <img src="" alt="" />
      <button>{movie}</button>
      <h1>Update {movierelease ? "Yes Movie In cinema" : " No Wait For It"}</h1>
    </>
  );
};
export default Button;
