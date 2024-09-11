import { useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../utils/api";
const Main = () => {
  const subscribe_data = useSelector((store) => store);

  useEffect(() => {
    api
      .get("/restaurants")
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);

  return <div>Main</div>;
};

export default Main;
