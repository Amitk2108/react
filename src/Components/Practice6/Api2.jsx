import { useState, useEffect } from "react";
import Apidata from "./Apidata";
import "./Api2.css"

const Api2 = () => {
  const [mobile, setMobile] = useState([]);

  useEffect(() => {
    let API = "https://dummyjson.com/products/category/womens-dresses";

    const fectchApiData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        // console.log(data.products);
        setMobile(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fectchApiData();
  }, []);

  return (
    <div>
        <h1>Get Product useEffect</h1>
    <div className="main2" >
      {mobile.map((phone) => {
        return <Apidata key={phone.id} {...phone} />;
      })}
    </div>
    </div>
  );
};

export default Api2;
