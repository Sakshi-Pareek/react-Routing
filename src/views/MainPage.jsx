import React from "react";
import HeaderSec from "../component/common/HeaderSec";
import FooterSec from "../component/FooterSec";
import Dsf from "../assets/images/webp/hero_sec_bg.webp";
import Mapwithfilter from "../component/Mapwithfilter";

const MainPage = () => {
  return (
    <>
      <HeaderSec
        commonheading={{ name: "las mejores experiencias de", btn: "swipe up" }}
        backgroundImage={Dsf}
      />
      <FooterSec />
      <Mapwithfilter />
    </>
  );
};

export default MainPage;
