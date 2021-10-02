import React from "react";
import MainHeader from "../components/MainHeader";

const NotFound = () => {
  const [currentURL, setCurrentURL] = React.useState("");

  React.useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  return (
    <>
      <MainHeader />
      <section>
        <div className="container">
          <h1>Page Not Found.</h1>
          <h2>"{currentURL}" does not exist. :(</h2>
        </div>
      </section>
    </>
  );
};

export default NotFound;
