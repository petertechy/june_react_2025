import { useState, useEffect } from "react";
import axios from "axios";

export const User = () => {
  const [user, setuser] = useState([]);
  const [isloading, setisloading] = useState(true);

  const getData = () => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    axios.get("https://api.github.com/users").then((res) => {
      console.log(res.data);
      setuser(res.data);
      setisloading(false);
    });
  };

  useEffect(() => {
    // console.log("MOUNT");
    getData();
  }, []);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       console.log(interval);
  //     }, 1000);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

  return (
    <div>
      <button>Get Data</button>

      <div>
        {isloading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          user.map((items, index) => (
            <div key={index}>
              <li>{items.id}</li>
              <li>{items.login}</li>
              {/* <img src={items.avatar_url} alt={items.name} /> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
