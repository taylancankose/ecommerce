import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import md5 from "md5";

function Avatar() {
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.clientReducer.user);

  useEffect(() => {
    if (user.email) {
      const emailHash = md5(user.email);
      setImage(
        `https://www.gravatar.com/avatar/${emailHash}${
          500 ? `?size=${500}` : ""
        }`
      );
    }
  }, [user]);

  return (
    <img
      src={image}
      height={100}
      alt="User Avatar"
      className="h-8 mr-2 rounded-full"
    />
  );
}

export default Avatar;
