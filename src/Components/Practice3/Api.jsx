import { useState } from "react";
import ProductData from "./ProductData";
import "./Api.css"

const Api = () => {
  const [user, setUser] = useState([]);

  //   let API = "https://jsonplaceholder.typicode.com/posts?_limit=10";
  //   let API = "https://reqres.in/api/users";
  let API = "https://dummyjson.com/products/category/smartphones";

  const fectchApiData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data.products);
      setUser(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(dataa)

  return (
    <div>
      <h1>Posts</h1>

      <div className="ignore" >
        <button onClick={fectchApiData}>Get Posts On Button Click</button>
        <div className="main1" >
          {user.map((post) => (
            <ProductData key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Api;
