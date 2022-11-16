import * as React from "react";
import { styled } from "@mui/material/styles";
import SpeedDial, { SpeedDialProps } from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import Popup from "./Popup";
import AssessmentIcon from "@mui/icons-material/Assessment";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
// import {setGenWords} from "../config/generatedWords";
// import {changeWords} from "../pages/Standard";

import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";
import { GET_STATISTICS_URL } from "../config/URLs";

const get_statistics_content = "Profile statistics: ";

const URL =
  // process.env.REACT_APP_DEVELOPMENT
  //   ? "localhost" //unfortunately the port isn't allowed here:
  "https://alireza9476.github.io/KeyboardIO/";

export default function HeaderMenu() {
  const hiddenFileInput = React.useRef(null);
  const navigate = useNavigate();

  const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: "relative",
  }));

  // const imgDots = "https://www.wearedevelopers.com/menu-24px.svg";

  const actions = [
    { id: 0, icon: <HomeIcon />, name: "Home" },
    { id: 1, icon: <UploadFileIcon />, name: "Upload File (.txt | .csv)" },
    { id: 2, icon: <AssessmentIcon />, name: "See statistics" },
    { id: 3, icon: <ShareIcon />, name: "Share" },
  ];

  const shareData = {
    title: "Keyboard I|O",
    text: "How fast do you type?",
    url: URL,
  };

  const onClick = async (id) => {
    switch (id) {
      case 0:
        navigate("/");
        break;
      case 1:
        hiddenFileInput.current.click();
        break;
      case 2:
        // auth.userAccColor !== undefined ? <Popup openProp={true} /> : null;
        break;
      case 3:
        try {
          await navigator.share(shareData);
        } catch (error) {
          console.log("Teilen fehlgehsclagen");
        }
        break;
      default:
        break;
    }
  };

  //https://www.w3.org/TR/FileAPI/#intro
  const handleChange = (e) => {
    let file = document.getElementById("fileInput")?.files[0];
    let fileType = file.name.slice(
      (Math.max(0, file.name.lastIndexOf(".")) || Infinity) + 1
    );
    let reader = new FileReader();
    let textType = /text.*/;

    if (file) {
      if (file.type.match(textType)) {
        reader.onload = function () {
          let content = reader.result.replace(/(\r\n|\n|\r)/gm, ",");
          let contentArr = content.split(",");
          // // setGenWords(contentArr);
          // changeWords(contentArr)
          // console.log(contentArr);
        };
        // setGenWords(reader.result);
        reader.readAsText(file, "UTF-8");
      } else {
        alert(
          "[" +
            file.name +
            "]" +
            " mit dem Datentyp: " +
            "[" +
            fileType +
            "]" +
            " wird nicht unterstüzt"
        );
      }
    } else {
      alert("Etwas ist schiefgelaufen");
    }
  };

  return (
    <div className="items-center">
      <StyledSpeedDial
        ariaLabel="SpeedDial"
        icon={<SpeedDialIcon />}
        direction="down"
        FabProps={{ size: "medium" }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.id}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              onClick(action.id);
            }}
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "#DA81F5",
                  color: "white",
                },
              },
            }}
          />
        ))}
      </StyledSpeedDial>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none", width: "45px" }}
        id="fileInput"
      />
    </div>
  );
}
