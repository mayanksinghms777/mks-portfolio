import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#f3b461",
    fontWeight: 900,
    fontSize:(30, 8, 70),
    marginTop: 10,
    '@media (max-width: 600px)': {
      textAlign:"center",
      fontSize:(30, 8, 50),
    },
  },
  subtitle: {
    color: "white",
    fontWeight: 400,
    textTransform: "uppercase",
    fontSize:30,
    marginTop: 13,
    '@media (max-width: 600px)': {
      textAlign:"center",
      marginBottom:7,
      fontSize:20,
    },
  },
 
  
}));

const Typing = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Typography className={classes.title} variant="h2">
        <Typed strings={["Mayank Kumar Singh"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "I am a Computer Engineer",
            "I am a Developer",
            "I am a coder",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Typing;
