import { useState, useEffect } from "react";
import Apidata from "./Apidata";
import "./Api4.css"

const Api2 = () => {
  const [mobile, setMobile] = useState([]);

  useEffect(() => {
    let API = "https://amitk2108.github.io/api/myntra.json";

    const fectchApiData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        console.log(data);
        setMobile(data);
      } catch (error) {
        console.log(error);
      }
    };

    fectchApiData();
  }, []);

  return (
    <div>
        <h1>Get Product useEffect</h1>
    <div className="main4" >
      {mobile.map((phone) => {
        return <Apidata key={phone.sku} {...phone} />;
      })}
    </div>
    </div>
  );
};

export default Api2;
