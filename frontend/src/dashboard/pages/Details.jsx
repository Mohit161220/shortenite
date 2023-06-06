import React from "react";

import EditDeleteButton from "../components/EditDeleteButton";
import BarGraph from "../components/BarGraph";
import LocationList from "../components/LocationList";
import PieGraph from "../components/PieGraph";

const l = {
  id: 0,
  title: "Describing the UI React",
  baseURL: "https://react.dev/learn/describing-the-ui",
  shortURL: "https://bit.ly/3MMW5UE",
  qr: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Freact.dev%2F&chs=180x180&choe=UTF-8&chld=L|2",
  date: "12/10/2023",
  clicks: 100,
};

const Details = () => {
  return (
    <div className="mr-2">
      <div className=" border-2 rounded-lg mt-4 pl-4">
        <div className="grid grid-cols-6">
          <div className="col-span-5 text-4xl font-semibold p-2">{l.title}</div>
          <div className="col-span-1">
            <EditDeleteButton />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-4 p-2">
          <div className="col-span-1">
            <div className="grid grid-cols-6 my-4">
              <div className="col-span-2 text-lg font-semibold">
                Short Url :
              </div>
              <div className="col-span-4 text-lg ">{l.shortURL}</div>
            </div>
            <div className="grid grid-cols-6 my-4">
              <div className="col-span-2 text-lg font-semibold">
                Destination :
              </div>
              <div className="col-span-4 text-lg ">{l.baseURL}</div>
            </div>
            <div className="grid grid-cols-6 my-4">
              <div className="col-span-2 text-lg font-semibold">Date :</div>
              <div className="col-span-4 text-lg ">{l.date}</div>
            </div>
            <div className="grid grid-cols-6 my-4">
              <div className="col-span-2 text-lg font-semibold">
                No. of Clicks :
              </div>
              <div className="col-span-4 text-lg ">{l.clicks}</div>
            </div>
            <div className="grid grid-cols-6 my-4">
              <div className="col-span-2 text-lg font-semibold">Qr Code:</div>
              <img
                src={l.qr}
                alt="QR"
                className="w-24 h-24 col-span-4 text-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-4 gap-y-4 ">
      <div className="col-span-1 border-2 rounded-lg pt-4 mr-2 max-h-72"> <BarGraph /></div>
      <div className="col-span-1 border-2 rounded-lg mx-2 max-h-72 overflow-auto pl-8"><LocationList/></div>

      <div className="col-span-1 border-2 rounded-lg pt-4 mr-2 h-72"><PieGraph/></div>
      <div className="col-span-1 border-2 rounded-lg pt-4 ml-2 h-72"><PieGraph/></div>
      </div>
    </div>
  );
};

export default Details;
