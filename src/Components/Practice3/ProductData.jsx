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
      <p> {title} </p>

      <img src={thumbnail} alt="" />

      <p>Price {price} </p>

      <p>Discount {discountPercentage} </p>

      <p>
        Description {"="} {description}
      </p>

      <p>Rating {rating} </p>

      <p> Brand {brand} </p>

      <p>Category {category} </p>

      <p>Stock {stock}</p>
    </div>
  );
};
export default ProductData;
