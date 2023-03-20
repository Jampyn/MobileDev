import React, { useState } from "react";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom"; //โยนไปหน้าอื่น

const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false); //คลิกวันที่หรือยัง
  const [date, setDate] = useState([
    //เลือกวันที่ สิ่งที่เก็บอยู่ใน state
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false); //สิ่งที่คลิก แสดงป๊อบอัพ
  const [options, setOptions] = useState({
    //สิ่งที่เก็บใน state
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate(); //เรีกยใช้ navigate
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = ({type}) => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faPlane} />
            <span>Fligths</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faEarthAmericas} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
          <h1 className="headerTitle"> A lifetime od discount ? It's Genius.</h1>
        <p className="headerDescription">
          Get rewarded for your travel - unlick instant savings of 10% or more
          with a free SE Booking account.
        </p>

        <button className="headerBtn ">Sign in / Register</button>

        <div className="headerSearch ">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => {
                setOpenDate(!openDate);
              }}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => {
                setOpenOptions(!openOptions);
              }}
              className="headerSearchText"
            >
              {`${options.adult} adults - ${options.children} children - ${options.room} room`}
            </span>
            {openOptions && (
              <div className="options">
                <div className="optionsItem">
                  <span className="optionText"> Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {""}
                      {options.adult}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionsItem">
                  <span className="optionText"> children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {""}
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionsItem">
                  <span className="optionText">room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {""}
                      {options.room}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="headerSearchItem">
            <button className="headerBtns" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
          </>
        )}
        
      </div>
    </div>
  );
};

export default Header;
