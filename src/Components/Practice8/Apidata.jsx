/* eslint-disable react/prop-types */
const Apidata = ({ name, description, price, brand, gender, images }) => {
  return (
    <div>
      <img src={images} alt="" />
      <p> {name} </p>

      <p>Price {price} </p>

      <p>
        {/* Description {"="} {description} */}
      </p>

      <p> Brand {brand} </p>

      <p>Gender {gender} </p>
    </div>
  );
};
export default Apidata;
