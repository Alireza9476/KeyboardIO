import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import { LOGIN_URL } from "../config/URLs";
import { default as SVGRefresh } from "../assets/SVGRefresh";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={12} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ openProp, statistics = false }) {
  const [open, setOpen] = React.useState(openProp);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          {statistics ? (
            <>
              <div className="flex justify-center">
                <h3>Your statistics</h3>
                <img src={SVGRefresh} alt="copy statistics" />
              </div>
              <div>Some Information</div>
            </>
          ) : (
            <>
              Login to use special features <br />
              <Link
                to={LOGIN_URL}
                // state={{ fromURL: fromURL }}
                className="login-btn"
              >
                Login
              </Link>
            </>
          )}
        </Alert>
      </Snackbar>
      {/* <Alert severity="info">This is an information message!</Alert> */}
    </Stack>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";

// const Popup = () => {
//   return (
//     <div className="fixed right-0 bottom-0 w-40">
//       You have to be loged in to use other functionalities
//       <Link to={"/login"} className="login-btn">
//         Login
//       </Link>
//     </div>
//   );
// };

// export default Popup;
