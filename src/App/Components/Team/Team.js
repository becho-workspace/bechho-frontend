import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TeamCard from "./TeamCard";
import teamData from "./Data";

const data = teamData;

export default function TeamHeads() {
  const teamGrid = data.map((item, index) => {
    return (
      <div className="th-team-root" key={index}>
        <div className="th-team-wrapper"></div>
        <Row className="justify-content-center ml-0 mr-0">
          {item.array.map((person, id) => {
            return (
              <Col xs={12} md={5} key={id}>
                <TeamCard
                  src={person.src}
                  name={person.name}
                  post={person.post}
                  socialHandleLink={person.socialHandleLink}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  });

  return (
    <div>
      <div className="th-team-root">{teamGrid}</div>
    </div>
  );
}
