import React from "react";
export const metadata = {
  title: "Register",

  description: "Register to become a part of our journey",
};

function pages() {
  return (
    <form action="" method="post" className="form">
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default pages;
