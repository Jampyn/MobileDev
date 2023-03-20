import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SearchItem from "../components/SearchItem";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const List = () => {
  const location = useLocation();
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
  const [options, setOptions] = useState({
    //สิ่งที่เก็บใน state
    adult: 1,
    children: 0,
    room: 1,
  });
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="ListContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lititle">Search</h1>
            <div className="lsItem">
              <lable>Destination</lable>
              <input placeholder={destination} type={"text"} />
            </div>
            <div className="lsItem">
              <lable>Check-in Date</lable>
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
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptons">
                <div className="lsOpenItem">
                  <span className="lsOptionsText">
                    Min price <small>Per night</small>
                  </span>
                  <input type="number" className="lsOptionInput"/>
                </div>
                <div className="lsOpenItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.adult}
                />
                </div>
                  <div className="lsOpenItem">
                <span className="lsOptionText">children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={options.children}
                />
                </div>
                <div className="lsOpenItem">
                <span className="lsOptionText">room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.room}
                />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
