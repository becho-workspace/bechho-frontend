import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import TeamCard from "./TeamCard";
import Fade from "react-reveal/Fade";
import teamData from "./teamData";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "5vh",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: "5vh",
  },
  wraper: {
    width: "100%",
    position: "relative",
    display: "block",
    textAlign: "center",
    margin: "4vh auto",
  },
  header: {
    fontSize: "3.5rem",
    textTransform: "uppercase",
    color: "#45A650",
    lineHeight: "60px",
    fontFamily: "Roboto !important",
    "@media (min-width:1260px) and (max-width:1650px)": {
      fontSize: "3rem",
    },
    "@media (min-width:600px) and (max-width:768px)": {
      fontSize: "40px",
    },
    "@media (max-width:500px)": {
      fontSize: "28px",
    },
    "@media (max-width:320px)": {
      fontSize: "24px",
    },
  },
}));

const data = teamData;
export default function TeamHeads() {
  const classes = useStyles();
  const teamGrid = data.map((item, index) => {
    return (
      <Fade bottom key={index}>
        <div className={classes.root}>
          <div className={classes.wraper}>
            <label className={classes.header}>{item.header}</label>
          </div>
          <Fade bottom>
            <Grid container justify="center">
              {item.array.map((person, id) => {
                return (
                  <Grid item xs={12} md={4} key={id}>
                    <TeamCard
                      src={person.src}
                      name={person.name}
                      post={person.post}
                      socialHandleLink={person.socialHandleLink}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Fade>
        </div>
      </Fade>
    );
  });

  return (
    <div>
      <div className={classes.root}>{teamGrid}</div>
    </div>
  );
}
