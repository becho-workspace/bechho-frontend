import React from "react";
import classes from "./TeamCard.module.css";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";

const TeamCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.box}>
        <ul className={classes.iconList}>
          <li className={classes.listItem}>
            <a href={props.socialHandleLink.facebook} target="blank">
              {" "}
              <Facebook className={classes.icon} />
            </a>
          </li>
          <li className={classes.listItem}>
            <a href={props.socialHandleLink.linkedin} target="blank">
              {" "}
              <LinkedIn className={classes.icon} />
            </a>
          </li>
          <li className={classes.listItem}>
            <a href={props.socialHandleLink.instagram} target="blank">
              {" "}
              <Instagram className={classes.icon} />
            </a>
          </li>
        </ul>

        <img alt="" src={props.src} className={classes.image}></img>
        <div className={classes.content}>
          <p className={classes.name}>{props.name}</p>
          <p className={classes.post}>{props.post}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
