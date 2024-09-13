import React from "react";
import HeaderSec from "../component/common/HeaderSec";
import Silver from "../component/Silver";
import Tcs from "../assets/images/webp/silver-layer.webp";

const Ofertas = () => {
  return (
    <>
      <HeaderSec
        commonheading={{
          name: "Estamos comprometidos a elevar tus expectativas",
          btn: "sign in",
        }}
        backgroundImage={Tcs}
      />
      <Silver />
    </>
  );
};

export default Ofertas;
