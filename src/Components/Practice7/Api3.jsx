import { useState, useEffect } from "react";
// import Apidata from "./Apidata";
// import "./Api2.css";

const Api2 = () => {
  const [mobile, setMobile] = useState([]);
  const [page, setPage] = useState(1);

  
  let API = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`;
  useEffect(() => {

    const fectchApiData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();   
        setMobile(data);
      } catch (error) {
        console.log(error);
      }
    };

    fectchApiData(page);
  }, [page]);

  const handlePage = (change) => {
    setPage(page + change);
  };


  return (
    <div>
      <h1>Posts</h1>

      <div>
        {/* <button onClick={fectchApiData}>Get Posts On Button Click</button> */}
        <div>
          {mobile.map((post) => (
            <div key={post.id}>{post.id}{"---"}{post.title} </div>
          ))}
        </div>
      </div>

      <div>
        <button disabled={page === 1} onClick={() => handlePage(-1)}>
          Prev
        </button>
        <button>{page}</button>
        <button onClick={() => handlePage(1)}>Next</button>
      </div>
    </div>
  );
};

export default Api2;
