import React from "react";

const SideList = () => {
  return (
    <ul className="">
      <li className="hover:bg-gray-100 hover:rounded-lg m-3 h-12 my-4">
        <div className="flex items-center">
          <span className="inline-block mx-5 mt-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-link"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 15l6 -6"></path>
              <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>
              <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>
            </svg>
          </span>
          <span className="text-xl font-semibold mt-2">Links</span>
        </div>
      </li>
      <li className="hover:bg-gray-100 hover:rounded-lg m-3 h-12 my-4">
        <div className="flex items-center">
          <span className="inline-block mx-5 mt-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-qrcode"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
              <path d="M7 17l0 .01"></path>
              <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
              <path d="M7 7l0 .01"></path>
              <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
              <path d="M17 7l0 .01"></path>
              <path d="M14 14l3 0"></path>
              <path d="M20 14l0 .01"></path>
              <path d="M14 14l0 3"></path>
              <path d="M14 20l3 0"></path>
              <path d="M17 17l3 0"></path>
              <path d="M20 17l0 3"></path>
            </svg>
          </span>
          <span className="text-xl font-semibold mt-2">QR Codes</span>
        </div>
      </li>
      <li className="hover:bg-gray-100 hover:rounded-lg m-3 h-12 my-4">
        <div className="flex items-center">
          <span className="inline-block mx-5 mt-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-address-book"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"></path>
              <path d="M10 16h6"></path>
              <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M4 8h3"></path>
              <path d="M4 12h3"></path>
              <path d="M4 16h3"></path>
            </svg>
          </span>
          <span className="text-xl font-semibold mt-2">Link-in-Bio</span>
        </div>
      </li>
      <li className="hover:bg-gray-100 hover:rounded-lg m-3 h-12 my-4">
        <div className="flex items-center">
          <span className="inline-block mx-5 mt-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-settings"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
            </svg>
          </span>
          <span className="text-xl font-semibold mt-2">Settings</span>
        </div>
      </li>
    </ul>
  );
};

export default SideList;
