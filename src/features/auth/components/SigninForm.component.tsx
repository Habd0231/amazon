import { Box, Button, Divider, Grid, InputLabel, TextField, Typography } from '@mui/material';
import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom';

const SigninForm = () => {

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
                Sign in
              </Typography>
    
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
                Sign in
              </Button>
            </Grid>
          </form>
          <Divider sx={{ marginTop: "26px", marginBottom: "26px" }} />
          <div>
            <small>
              <span>Don't have an account?</span>{" "}
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#0000ee" }}
              >
                Register
              </Link>
            </small>
          </div>
        </Box>
      );
    
}

export default SigninForm