import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import EditDeleteButton from "./EditDeleteButton";
import ViewDetailsButton from "./ViewDetailsButton";
import axios from "axios";

const LinkList = () => {
  const { setAuth } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/links");
        console.log(res);
        if (!(res.data.data === data)) setData(res.data.data);
      } catch (error) {
        console.log(error);
        setAuth(false);
      }
    };
    getData();
  });

  return (
    <div className="mt-0 overflow-auto">
      {data.map((l, key) => {
        return (
          <div key={key} className=" mt-2 mx-2 border-b-2">
            <div className="flex ">
              <div className="flex flex-col flex-grow ml-8 my-3">
                <span className="text-2xl font-semibold ">{l.title}</span>

                <span className="flex ml-2 mt-2">
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
                  </svg>

                  <a
                    href={l.key}
                    className="hover:text-blue-700 text-xl font-semibold mr-8"
                  >
                    {l.key}
                  </a>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="hover:text-blue-700 w-5 h-5 my-1"
                  >
                    <path
                      stokelinecap="round"
                      stokelinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                </span>

                {/* <a
              href={l.baseURL}
              className="hover:text-blue-700 text-sm w-1/3 ml-8 my-1"
            >
              {l.baseURL}
            </a> */}
              </div>
              <div className="mb-6">
                <EditDeleteButton type="links" key={l._id} id={l._id} />
                <div>
                  <ViewDetailsButton type="links" key={l._id} id={l._id} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LinkList;
