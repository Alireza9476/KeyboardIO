import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import LoopIcon from "@mui/icons-material/Loop";

import { addDoc } from "firebase/firestore";
import { createUserFunc } from "../firebase/firebaseUserHandler";
import { firebaseAddUserToCollection } from "../firebase/collections/firebaseUserCollections";

import uuid from "react-uuid";

import {
  COPYRIGHT_URL,
  HOMEPAGE_URL,
  LOGIN_URL,
  REGISTER_URL,
} from "../config/URLs";

import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Popup from "../components/Popup";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to={COPYRIGHT_URL} className="underline">
        KeyboardIO
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const { saveCurrentUser } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState();

  const genPassword = () => {
    var chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    for (let i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    setPassword(password);
    setShowPassword(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newUserId = "";
    const inputData = new FormData(event.currentTarget);

    try {
      const res = await createUserFunc(
        inputData.get("email"),
        inputData.get("password")
      );
      firebaseAddUserToCollection(inputData, res?.user?.uid);
      saveCurrentUser();
      // const docRefRegisteredUser = firebaseRegisterUser(inputData);
      // newUserId = docRefRegisteredUser.id;

      navigate(HOMEPAGE_URL, {
        state: { popupMessage: "registration succeed" },
      }); //doc reference: https://reactrouter.com/en/main/hooks/use-navigate
    } catch (err) {
      navigate(HOMEPAGE_URL, {
        state: { popupMessage: "Could not register user" },
      });
      console.log(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
              defaultValue={"Tom"}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              defaultValue={"example@gmail.com"}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password || ""}
              InputProps={{
                endAdornment: (
                  <>
                    <InputAdornment position="end">
                      <Tooltip title="Generate Password" placement="top">
                        <Button
                          onClick={genPassword}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                          style={{ minWidth: "0px" }}
                        >
                          <LoopIcon />
                        </Button>
                      </Tooltip>
                    </InputAdornment>
                    <InputAdornment position="end">
                      <Button
                        onClick={() => setShowPassword(!showPassword)}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                        style={{ minWidth: "0px" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </Button>
                    </InputAdornment>
                  </>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign up
            </Button>
            <Grid container>
              <Grid item>
                <Link to={LOGIN_URL} className="login-btn">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
