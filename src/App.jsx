/* eslint-disable react-hooks/exhaustive-deps */
import HeaderContent from "./components/HeaderContent";
import SectionContainer from "./components/SectionContainer";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import React, { useState, useEffect, useRef } from "react";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitter,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
  faSpotify,
  faChevronLeft,
  faChevronRight
);

function App() {
  return (
    <React.Fragment>
      <HeaderContent />
      <SectionContainer />
      <Footer />
    </React.Fragment>
  );
}

export default App;
