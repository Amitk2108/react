// eslint-disable-next-line react/prop-types

const Mcard = ({ poster, title, year }) => {
  // eslint-disable-next-line react/prop-types
  //    const = props
  return (
    <div>
      <img src={poster} alt="" />
      <p>{title}</p>
      <p>{year}</p>
    </div>
  );
};

export default Mcard;
