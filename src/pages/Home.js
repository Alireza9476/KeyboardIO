import { useEffect } from "react";
import HeaderMenu from "../components/HeaderMenu";
import Standard from "./Standard";
import { useLocation } from "react-router-dom";
import Popup from "../components/Popup";

function Home() {
  const location = useLocation();
  let popup = undefined;

  if (location.state) {
    popup = location.state.popup;
    location.state.popup = false;
  } else popup = "";

  useEffect(() => {
    console.log("Home rendered");
    console.log(location.state);

    return () => {
      if (location.state) location.state.popup = false;
    };
  }, []);

  // useEffect(() => {
  //   console.log(popup);
  // }, [popup]);

  return (
    <>
      <div className="mt-20">Home</div>
      {location.state ? <Popup openProp={true} /> : null}
      {/* <HeaderMenu /> */}
    </>
  );
}

export default Home;
