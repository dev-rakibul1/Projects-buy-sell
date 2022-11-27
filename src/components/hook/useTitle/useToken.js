import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  //   console.log(user);
  //   console.log(userInfo);

  useEffect(() => {
    const email = user?.email;
    const name = user?.name;
    const image = user?.image;
    const role = user?.role;

    const currentUser = {
      email: email,
      name: name,
      image: image,
      role: role,
    };

    console.log(currentUser);

    if (user?.email) {
      axios
        .put(`http://localhost:5000/users/${email}`, currentUser)
        .then((res) => {
          const accessToken = res?.data?.data;
          setToken(
            `bearer ${localStorage.setItem("accessToken", accessToken)}`
          );
        });
    }
  }, [user]);

  return [token];
};
export default useToken;
