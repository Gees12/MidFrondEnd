import { useState, useEffect } from "react";
import axios from "axios";

const RestAPI = () => {
  sonst[(user, setUsers)] = useState([]);
  useEffect(() => {
    axios.get("").then((res) => console.log(res.data));
  }, []);
  return (
    <>
      {users.map(({ name, id }) => (
        <div key={id} className="">
          {name}
          <img src={""} />
        </div>
      ))}
    </>
  );
};
