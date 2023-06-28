// eslint-disable-next-line react/prop-types

const Mcard = ({ poster, title, year }) => {
  // eslint-disable-next-line react/prop-types
  //    const = props
  return (
    <div>
      <img src={poster} alt="" />
      <h1>{title}</h1>
      <h1>{year}</h1>
    </div>
  );
};

export default Mcard;
