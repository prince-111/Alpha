import React, { useState } from "react";
import { DatePicker } from "antd";
import "./header.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Header = () => {
  const style = {
    border: `1px solid`,
    borderRadius: "100%",
  };

  const cellRender = React.useCallback(
    (current: number | Dayjs, info: CellRenderInfo<Dayjs>) => {
      if (info.type !== "date") {
        return info.originNode;
      }
      if (typeof current === "number") {
        return <div className="ant-picker-cell-inner">{current}</div>;
      }
      return (
        <div
          className="ant-picker-cell-inner"
          style={current.date() === 1 ? style : {}}
        >
          {current.date()}
        </div>
      );
    },
    []
  );

  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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

  return (
    <>
      <div className="flex">
        <div className="Back-Image">
          <div>
            {/* <img src={require("../../Assets/blob.svg")} alt="" /> */}
          </div>

          <div className="flex ms-16 justify-center mt-10">
            <div class="w-full max-w-md p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow dark:white dark:white">
              <form className="mb-5">
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Your Destination..."
                    required
                  />
                  <button
                    type="submit"
                    class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>

              <div className="pt-4, text-center">
                <DatePicker.RangePicker cellRender={cellRender} size="large" />
              </div>

              <div className="mt-4 ms-8">
                <Popup
                  on={["hover", "focus"]}
                  trigger={
                    <button>
                      {" "}
                      <span
                        // onClick={() => setOpenOptions(!openOptions)}
                        className="headerSearchText"
                      >{`${options.adult} Adult,  ${options.children} Children &  ${options.room} room`}</span>
                    </button>
                  }
                  position="bottom center"
                >
                  <div className="">
                    {/* Adult Count */}
                    <div className="block">
                      <div className="ms-3 me-5">Adult</div>
                      <div>
                        <button
                          type="button"
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                        >
                          -{" "}
                        </button>

                        <span className="optionCounterNumber me-3">
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
                    <div className="block">
                      <div className="ms-3 me-5">Children</div>
                      <div>
                        <button
                          type="button"
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                        >
                          -{" "}
                        </button>

                        <span className="optionCounterNumber me-3">
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
                      <div>
                        <button
                          type="button"
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                        >
                          -{" "}
                        </button>

                        <span className="optionCounterNumber me-3">
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
                </Popup>
              </div>

              <div></div>
            </div>
          </div>

        </div>
        <div className="me-2 second-backImg">
        <img src={require("../../Assets/excited-happy-young.png")} width="300" height="80px" alt="" />
        <hr class="w-48 h-1 mx-auto bg-gray-100 border-0 rounded md:my-0 dark:bg-gray-100"></hr>
        </div>
      </div>
    </>
  );
};

export default Header;
