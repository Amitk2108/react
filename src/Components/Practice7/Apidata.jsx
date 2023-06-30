/* eslint-disable react/prop-types */
const Apidata = ({ title, description, price, image }) => {
  return (
    <div>
      <img src={image} alt="" />
      <p> {title} </p>

      <p>Price {price} </p>

      <p>
        Description {"="} {description}
      </p>
    </div>
  );
};
export default Apidata;
