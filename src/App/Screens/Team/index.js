import React from "react";
import { Helmet } from "react-helmet";
import Team from "../../Components/Team/Team";

export default function TeamHome() {
  return (
    <div>
      <Helmet titleTemplate="Bechho | %s" title="Team" />
      <div style={{ background: "#111" }}>
        <Team />
      </div>
    </div>
  );
}
