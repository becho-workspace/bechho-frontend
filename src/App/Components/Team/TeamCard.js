import React from "react";
import { Instagram, Linkedin, GitHub } from "react-feather";

const TeamCard = (props) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ position: "relative" }}
    >
      <div className="th-team-box">
        <ul className="th-team-icon-list">
          <li className="th-team-list-item">
            <a href={props.socialHandleLink.github} target="blank">
              <GitHub className="th-team-social-icon" />
            </a>
          </li>
          <li className="th-team-list-item">
            <a href={props.socialHandleLink.linkedin} target="blank">
              <Linkedin className="th-team-social-icon" />
            </a>
          </li>
          <li className="th-team-list-item">
            <a href={props.socialHandleLink.instagram} target="blank">
              <Instagram className="th-team-social-icon" />
            </a>
          </li>
        </ul>

        <img alt="" src={props.src} className="th-team-member-img"></img>
        <div className="th-team-member-content">
          <p className="th-team-member-name mb-1">{props.name}</p>
          <p className="th-team-member-post ">{props.post} </p>
          {props.post2 && (
            <p className="th-team-member-post mt-0">{props.post2}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
