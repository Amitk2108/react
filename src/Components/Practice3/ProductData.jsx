/* eslint-disable react/prop-types */
const ProductData = ({
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
}) => {
  return (
    <div>
      <h1> {title} </h1>

      <img src={thumbnail} alt="" />

      <h2>Price {price} </h2>

      <h2>Discount {discountPercentage} </h2>

      <p>
        Description {"="} {description}
      </p>

      <p>Rating {rating} </p>

      <h2> Brand {brand} </h2>

      <h2>Category {category} </h2>

      <h3>Stock {stock}</h3>
    </div>
  );
};
export default ProductData;
