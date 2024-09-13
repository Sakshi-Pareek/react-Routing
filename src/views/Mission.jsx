import React from "react";
import HeaderSec from "../component/common/HeaderSec";
import Nuestra from "../component/Nuestra";
import Rdc from "../assets/images/webp/lunazatu.webp";

const Mission = () => {
  return (
    <>
      <HeaderSec
        commonheading={{
          name: " Nuestra visión es ser líderes indiscutibles",
          btn: "click on",
        }}
        backgroundImage={Rdc}
      />
      <Nuestra />
    </>
  );
};

export default Mission;
