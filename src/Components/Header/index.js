import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./index.css";
import { DateRange } from "react-date-range";
import { format, differenceInDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [isDateRangePickerVisible, setDateRangePickerVisibility] =
    useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  const toggleDateRangePicker = () => {
    setDateRangePickerVisibility(!isDateRangePickerVisible);
  };

  const numberOfDays = differenceInDays(
    selectionRange.endDate,
    selectionRange.startDate
  );

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels");
  };

  return (
    <>
      <div className="Header_Color">
        <div className="flex flex-wrap justify-center">
          <div class="m-auto w-full max-w-2xl p-6 mb-5 mt-7 bg-white border border-gray-200 rounded-lg shadow dark:white dark:white">
            <form className="mb-5">
              <div class="relative">
                <svg
                  class="w-6 h-6 text-gray-500 absolute top-3 left-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  // xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <input
                  type="search"
                  placeholder="Search Room, Hotels, Area & landmarks"
                  class="outline-none border-b-2 w-full border-gray-200 py-3 px-7"
                  required
                />
              </div>
            </form>

            {/* Date-Range-Pickers */}
            <div>
              <div style={{ position: "relative" }}>
                <div onClick={toggleDateRangePicker}>
                  <h1 className="font-xl"></h1>
                  <div class="flex justify-around font-medium text text-gray-600">
                    <div>
                      <p className="font-xl mb-1"> Check-in </p>
                      <div className="text-2xl text-black">
                        {format(selectionRange.startDate, "dd MMM yyyy")}
                      </div>
                    </div>
                    <div className="justify-center">
                      <div className="xl mb-1">Days</div>
                      <div className="text-2xl text-center text-black">
                        {numberOfDays}
                      </div>
                    </div>
                    <div>
                      <p className="font-xl mb-1">Check-out</p>
                      <div className="text-2xl text-black">
                        {format(selectionRange.endDate, "dd MMM yyyy")}
                      </div>
                    </div>
                  </div>
                </div>

                {isDateRangePickerVisible && (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "100%",
                      zIndex: 9999,
                    }}
                  >
                    <DateRange
                      ranges={[selectionRange]}
                      onChange={handleSelect}
                      showDateDisplay={false}
                    />
                  </div>
                )}
              </div>
            </div>

            <div class="mt-4">
              <hr class="h-px bg-gray-200 border-0 dark:bg-gray-300" />
            </div>

            <div className="mt-1">
              <Popup
                on={["hover", "focus"]}
                trigger={
                  
                  <button className="button">
                    <p className="flex justify-start text-xl mb-1">Guest & Room</p>
                    <p class="text-2xl font-medium text text-gray-600">{`${options.adult} Adult, ${options.children} Children & ${options.room} Room`}</p>
                  </button>
                }
                contentStyle={{
                  width: "350px",
                }}
                position="bottom center"
              >
                <span>
                <div className="flex flex-row justify-center content-center">
                  {/* Adult Count */}
                  <div className="block mr-2">
                    <div className="ms-3 me-5">Adult</div>
                    <div className="flex flex-row justify-center content-center">
                      <button
                        type="button"
                        disabled={options.adult <= 1}
                        onClick={() => handleOption("adult", "d")}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                      >  -  </button>

                      <span className="optionCounterNumber me-3 mt-1">
                        {options.adult}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleOption("adult", "i")}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
                      >
                        +{" "}
                      </button>
                    </div>
                  </div>

                  {/* Children Count */}
                  <div className="block mr-2">
                    <div className="ms-3 me-5">Children</div>
                    <div className="flex flex-row justify-center content-center">
                      <button
                        type="button"
                        disabled={options.children <= 0}
                        onClick={() => handleOption("children", "d")}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                      >
                        -{" "}
                      </button>

                      <span className="optionCounterNumber me-3 mt-1">
                        {options.children}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleOption("children", "i")}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
                      >
                        +{" "}
                      </button>
                    </div>
                  </div>

                  {/* Room Count */}
                  <div className="block">
                    <div className="ms-3 me-5">Room</div>
                    <div className="flex flex-row justify-center content-center">
                      <button
                        type="button"
                        disabled={options.room <= 1}
                        onClick={() => handleOption("room", "d")}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                      >
                        -{" "}
                      </button>

                      <span className="optionCounterNumber me-3 mt-1">
                        {options.room}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleOption("room", "i")}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
                      >
                        +{" "}
                      </button>
                    </div>
                  </div>
                </div>
                </span>
              </Popup>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                class=" text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-sm px-16 py-5 text-center me-2 mb-2"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>

          <div className="m-auto mt-7 mb-5">
            <div className="">
              <a
                href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:white dark:white"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Noteworthy technology acquisitions 2023
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2023 so far, in reverse chronological order.
                </p>
              </a>
            </div>

            <div>
              <div className="mt-2">
                <a
                  href="#"
                  class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2023
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
