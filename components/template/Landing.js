import React from "react";
import Slide from "../modules/Slide";
import Attributes from "../modules/Attributes";
import Info from "../modules/Info";
import Guide from "../modules/Guide";
import Instruction from "../modules/Instruction";
import Restrictions from "../modules/Restrictions";

function Landing() {
  return (
    <div>
      <Slide />
      <div className="max-w-[1000px] mx-auto">
        {" "}
        <Attributes />
        <Info />
        <Guide/>
        <Instruction/>
        <Restrictions/>
      </div>
    </div>
  );
}

export default Landing;
