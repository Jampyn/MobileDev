import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MaiList from "../components/MaiList";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import HotelItem from "../components/Hotelltem";
function Hotel() {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelsContainer">
        <div className="hotellist">
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <button className="navsButton">Reserver or Book Now!</button>
        </div>
        <div className="hotelItem">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>{"   "}Elton St 125 New york</span>
        </div>
        <span className="title">Excellent location- 500m from center</span>
        <span className="hoteltitle">
          Book a stay over $114 at this property and get a free airport taxi
        </span>
        <HotelItem />
       
        <div className="hotelcontainerDetail">
          <div className="hDetail">
            <h1 className="hotelTitle">Stay in the heart City</h1>
            <span className="text">
              Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
              Street Apartments has accommondations with air conditioning and
              free WiFi.The units come with hardwood floors and feature a fully
              equippeped kitchenette with a microwave,a flat-screen TV,and a
              private bathroom with shower and a hairdryer,A fridge is also
              offered,as well as an electric tea pot and a coffee
              machine.Popular points of interest near the Apartments include
              Cloth Hall, Main Market Square and Town HAil Tower. The nearest
              airport is jhon Paul LL international Krakow-Balic,16.1 km from
              Tower Street Apartments,and the property offers a paid airport
              shuttle service.
            </span>
          </div>
          <div className="hDetail">
            <div className="detailhotel">
              <h1 className="texts">Perfect for a9-night stay!</h1>
              <p>Located in the real heart of Krakow,
            this property hos an excellent location score of 9.8!  </p>
            <h3 className="textss">$945 (9 nights)</h3>
              <button className="navsButtons">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MaiList />
      <Footer />
    </div>
  );
}

export default Hotel;
