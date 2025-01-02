import {
  Box,
  Grid,
  TextField,
  InputLabel,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { FC, FormEvent } from "react";
import { Link } from "react-router-dom";
const RegistrationForm: FC = () => {
  function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("clicked");
  }
  return (
    <Box
      sx={{
        border: 1,
        padding: 2,
        borderColor: "#cccccc",
        width: "350px",
        marginTop: 2,
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <Grid container direction="column" justifyContent="flex-start">
          <Typography variant="h4" component="h1">
            Create an account
          </Typography>
          <InputLabel
            sx={{ fontWeight: 600, marginTop: 1, color: "#000000" }}
            htmlFor="name"
          >
            Full Name
          </InputLabel>
          <TextField
            type="text"
            name="name"
            id="name"
            variant="outlined"
            size="small"
          />

          <InputLabel
            sx={{ fontWeight: 600, marginTop: 1, color: "#000000" }}
            htmlFor="email"
          >
            Email
          </InputLabel>
          <TextField
            type="text"
            name="email"
            id="email"
            variant="outlined"
            size="small"
          />

          <InputLabel
            sx={{ fontWeight: 600, marginTop: 1, color: "#000000" }}
            htmlFor="password"
          >
            Password
          </InputLabel>
          <TextField
            type="password"
            name="password"
            id="password"
            variant="outlined"
            size="small"
            placeholder="Minimum 6 caracters required"
          />

          <InputLabel
            sx={{ fontWeight: 600, marginTop: 1, color: "#000000" }}
            htmlFor="confirm-password"
          >
            Confirm Password
          </InputLabel>
          <TextField
            type="password"
            name="confirm-password"
            id="confirm-password"
            variant="outlined"
            size="small"
          />
          <Button
            variant="contained"
            type="submit"
            style={{
              marginTop: "16px",
              height: "31px",
              backgroundColor: "#f0c14b",
              color: "black",
              borderColor: "#a88734 #9c7e31 #846a29",
              textTransform: "none",
            }}
            disableElevation
          >
            Register
          </Button>
        </Grid>
      </form>
      <div style={{ marginTop: "30px" }}>
        <small>
          <span>By creating an account, you agree to Amazon's</span>
        </small>
      </div>
      <div>
        <small>
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            Conditions of use
          </a>{" "}
          and{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            Privacy Policy
          </a>
        </small>
      </div>
      <Divider sx={{ marginTop: "26px", marginBottom: "26px" }} />
      <div>
        <small>
          <span>Already have an account?</span>{" "}
          <Link
            to="/sign-in"
            style={{ textDecoration: "none", color: "#0000ee" }}
          >
            Sign-in
          </Link>
        </small>
      </div>
      <div>
        <small>
          Buying for work?
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            Create free business account
          </a>{" "}
        </small>
      </div>
    </Box>
  );
};

export default RegistrationForm;
