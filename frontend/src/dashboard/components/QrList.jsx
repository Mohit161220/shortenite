import { useEffect, useState } from "react";
import axios from "axios";
import EditDeleteButton from "./EditDeleteButton";
import ViewDetailsButton from "./ViewDetailsButton";
import { saveAs } from "file-saver";

const QrList = () => {
  const downloadImage =(img,title) => {
    console.log("Downloading");
    saveAs(img, `${title}.jpg`); // Put your image url here.
  };

  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("/qr");
    console.log("Qr");
    console.log(res);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const link = data.map((l, key) => {
    return (
      <div key={key} className="mx-2 border-b-2">
        <div className="flex ">
          <div className="flex flex-col flex-grow ml-8 my-3">
            <span className="text-2xl font-semibold ">{l.title}</span>

            <div className="flex">
              <img src={l.key} alt="QR" className=" my-1 mx-4 w-24 h-24"></img>
              <button onClick={()=>downloadImage(l.key,l.title)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mt-3 w-6 h-6 hover:text-blue-300"
                >
                  <path
                    stokelinecap="round"
                    stokelinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </button>
              {/* 
              <span className="flex ml-6 mt-8">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  role="graphics-document"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>redirect</title>
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path>
                </svg> */}

              {/* <a
                  href={l.shortURL}
                  className="hover:text-blue-700 text-xl font-semibold mr-8"
                >
                  {l.shortURL}
                </a> */}
              {/* 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hover:text-blue-700 w-5 h-5 my-1 "
                >
                  <path
                    stokelinecap="round"
                    stokelinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg> */}
              {/* </span> */}
            </div>
          </div>
          <div className="">
            <EditDeleteButton type="qrs" id={l._id} key={l._id} />
            <div>
              <ViewDetailsButton type="qrs" id={l._id} key={l._id} />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="mt-0">{link}</div>;
};

export default QrList;
