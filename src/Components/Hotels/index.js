import React from "react";
import Navbar from "../Navbar";

const Hotels = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-around m-4">
        <div class="max-w-sm p-6 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2023
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2023 so
            far, in reverse chronological order.
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2023 so
            far, in reverse chronological order.
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2023 so
            far, in reverse chronological order.
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2023 so
            far, in reverse chronological order.
          </p>
        </div>

        <div>
          <div className="mt-3 mb-2">
            <a href="#"
              class="flex flex-col bg-white border border-gray-100 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-100 dark:bg-gray-100 dark:hover:bg-gray-100"
            >
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
              />
              <div className="flex justify-evenly">
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <div className="flex justify-between">
                    <span>
                      <h1 className="text-2xl font-bold">
                        Tower Street Apartments
                      </h1>
                    </span>
                  </div>

                  <div>
                    <span className="font-normal text-gray-700 dark:text-gray-400">
                      500 m from Center, Metro access
                    </span>
                  </div>
                  <div>
                    <span className="font-normal text-gray-900 dark:text-gray-800">
                      Studio Apartment with Air conditioning
                    </span>
                  </div>
                  <div>
                    <span className="font-normal text-gray-700 dark:text-gray-600">
                      Entire studio • 1 bathroom • 21m² 1 full bed
                    </span>
                  </div>
                  <div>
                    <span className="text-xm text-teal-700">
                      You can cancel later, so lock in this great price today!
                    </span>
                  </div>
                </div>

                <div className="flex-col">
                  <div className="mb-4">
                    <span className="flex">
                      <span className="font-semibold">Excllent</span>
                      <span className="ms-3 font-semibold">4.5</span>
                    </span>
                    {/* <span>1213 Reviews</span> */}
                    <p class="text-xs font-normal text-gray-700 dark:text-gray-500">
                      1213 Reviews
                    </p>
                  </div>

                  <div className="">
                    <div className="mt-10">
                      <div>2 nights, 2 Adults</div>
                      <span className="line-through text-red-600">₹ 2000</span>
                      <span className="ms-3 font-bold text-green-700">
                        ₹ 1500{" "}
                        <span className="font-normal text-gray-700 dark:text-gray-800">
                          🛈
                        </span>
                      </span>
                      <div className="text-xs">Includes taxes and charges</div>
                    </div>

                    <div className="mt-1">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        See availability
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-3 mb-2">
            <a href="#"
              class="flex flex-col bg-white border border-gray-100 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-100 dark:bg-gray-100 dark:hover:bg-gray-100"
            >
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
              />
              <div className="flex justify-evenly">
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <div className="flex justify-between">
                    <span>
                      <h1 className="text-2xl font-bold">
                        Tower Street Apartments
                      </h1>
                    </span>
                  </div>

                  <div>
                    <span className="font-normal text-gray-700 dark:text-gray-400">
                      500 m from Center, Metro access
                    </span>
                  </div>
                  <div>
                    <span className="font-normal text-gray-900 dark:text-gray-800">
                      Studio Apartment with Air conditioning
                    </span>
                  </div>
                  <div>
                    <span className="font-normal text-gray-700 dark:text-gray-600">
                      Entire studio • 1 bathroom • 21m² 1 full bed
                    </span>
                  </div>
                  <div>
                    <span className="text-xm text-teal-700">
                      You can cancel later, so lock in this great price today!
                    </span>
                  </div>
                </div>

                <div className="flex-col">
                  <div className="mb-4">
                    <span className="flex">
                      <span className="font-semibold">Excllent</span>
                      <span className="ms-3 font-semibold">4.5</span>
                    </span>
                    {/* <span>1213 Reviews</span> */}
                    <p class="text-xs font-normal text-gray-700 dark:text-gray-500">
                      1213 Reviews
                    </p>
                  </div>

                  <div className="">
                    <div className="mt-10">
                      <div>2 nights, 2 Adults</div>
                      <span className="line-through text-red-600">₹ 2000</span>
                      <span className="ms-3 font-bold text-green-700">
                        ₹ 1500{" "}
                        <span className="font-normal text-gray-700 dark:text-gray-800">
                          🛈
                        </span>
                      </span>
                      <div className="text-xs">Includes taxes and charges</div>
                    </div>

                    <div className="mt-1">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        See availability
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-3 mb-2">
            <a href="#"
              class="flex flex-col bg-white border border-gray-100 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-100 dark:bg-gray-100 dark:hover:bg-gray-100"
            >
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
              />
              <div className="flex justify-evenly">
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <div className="flex justify-between">
                    <span>
                      <h1 className="text-2xl font-bold">
                        Tower Street Apartments
                      </h1>
                    </span>
                  </div>

                  <div>
                    <span className="font-normal text-gray-700 dark:text-gray-400">
                      500 m from Center, Metro access
                    </span>
                  </div>
                  <div>
                    <span className="font-normal text-gray-900 dark:text-gray-800">
                      Studio Apartment with Air conditioning
                    </span>
                  </div>
                  <div>
                    <span className="font-normal text-gray-700 dark:text-gray-600">
                      Entire studio • 1 bathroom • 21m² 1 full bed
                    </span>
                  </div>
                  <div>
                    <span className="text-xm text-teal-700">
                      You can cancel later, so lock in this great price today!
                    </span>
                  </div>
                </div>

                <div className="flex-col">
                  <div className="mb-4">
                    <span className="flex">
                      <span className="font-semibold">Excllent</span>
                      <span className="ms-3 font-semibold">4.5</span>
                    </span>
                    {/* <span>1213 Reviews</span> */}
                    <p class="text-xs font-normal text-gray-700 dark:text-gray-500">
                      1213 Reviews
                    </p>
                  </div>

                  <div className="">
                    <div className="mt-10">
                      <div>2 nights, 2 Adults</div>
                      <span className="line-through text-red-600">₹ 2000</span>
                      <span className="ms-3 font-bold text-green-700">
                        ₹ 1500{" "}
                        <span className="font-normal text-gray-700 dark:text-gray-800">
                          🛈
                        </span>
                      </span>
                      <div className="text-xs">Includes taxes and charges</div>
                    </div>

                    <div className="mt-1">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        See availability
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="max-w-2xl mt-3 mb-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:white dark:white">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Noteworthy technology acquisitions 2023
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2023 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hotels;
