import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Popup from "../components/Popup";
import styled, { keyframes } from "styled-components";

import { default as Typing } from "../assets/Homepage/Typing.jpg";
import useAuth from "../hooks/useAuth";

function Home() {
  const location = useLocation();
  let popupMessage = "login";

  if (!!location.state?.popupMessage) {
    popupMessage = location.state.popupMessage;
    location.state.popupMessage = "";
  } else popupMessage = "login";
  const { fromURL } = useAuth();

  useEffect(() => {
    console.log("Home rendered");
    console.log(location.state);

    console.log("Login: " + fromURL);
    return () => {
      if (!!location.state?.popupMessage) location.state.popupMessage = "";
    };
  }, []);

  // useEffect(() => {
  //   console.log(popup);
  // }, [popup]);

  return (
    <>
      <div className="mt-40"></div>
      {location.state ? <Popup message={popupMessage} /> : null}
      <main className="max-w-[1400px] mx-auto">
        <div className="sm:flex sm:flex-col md:flex md:flex-row justify-between px-12 gap-10 gap-y-10">
          <div className="max-w-[600px] min-w-[250px]">
            <h1 className="text-3xl font-roboto_regular font-bold w-full uppercase">
              Improve your typing skills with
            </h1>
            <h1 className="text-3xl font-bold w-full">
              Keyboard
              <RotateI>I</RotateI>
              <RotateO>O</RotateO>
            </h1>
          </div>
          <div className="max-w-[600px]">
            <img
              className="w-full rounded-t-3xl shadow-lg"
              src={Typing}
              alt="typing"
            />
          </div>
        </div>
      </main>
    </>
  );
}

const rotate = keyframes`
0%,60% {
  transform: rotateY(360deg) 
}
`;

const RotateI = styled.div`
  display: inline-block;
  animation: ${rotate} 2s infinite;
  animation-delay: calc(0.2s * 1);
`;
const RotateO = styled.div`
  display: inline-block;
  animation: ${rotate} 2s infinite;
  animation-delay: calc(0.2s * 2);
`;

export default Home;
