import { useState, Fragment } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  HOMEPAGE_URL,
  LOGIN_URL,
  PROFILE_URL,
  ACCOUNT_SETTINGS_URL,
} from "../config/URLs";
import { logoutUser } from "../firebase/firebaseUserHandler";

export default function AccountMenu() {
  const { setAuth, auth, userAccColor } = useAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    // alert(auth.email);
    console.log("Something: " + auth?.email);
    if (!!auth?.email) navigate(auth?.uid);
    else navigate(LOGIN_URL);
  };

  const handleLogout = () => {
    try {
      logoutUser();
      setAuth({});
      navigate(HOMEPAGE_URL);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Fragment>
      <Box sx={{ alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 40, height: 40, bgcolor: "#DA81F5" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(10px 10px 5px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleProfile}>
          <Avatar sx={auth.email ? { bgcolor: userAccColor } : null}>
            {auth.email ? auth.email.charAt(0).toUpperCase() : null}
          </Avatar>{" "}
          {auth.email ? "Profile" : "Login"}
          {/* {console.log("content: " + auth.email)} */}
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => navigate(ACCOUNT_SETTINGS_URL)}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
