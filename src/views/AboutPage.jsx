import React from "react";
import HeaderSec from "../component/common/HeaderSec";
import Mass from "../component/Mass";
import Asg from ".././assets/images/webp/gradientwithimg.webp";

const AboutPage = () => {
  return (
    <>
      <HeaderSec
        commonheading={{
          name: "Games somos un equipo apasionado de personas",
          btn: "submit",
        }}
        backgroundImage={Asg}
      />
      <Mass />
    </>
  );
};

export default AboutPage;
