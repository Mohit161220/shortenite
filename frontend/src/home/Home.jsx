import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import home_img from "./home-img.JPG";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const Home = () => {

  let screenSize = useMediaQuery("(min-width : 769px) and (max-width : 1400px)") ;
  console.log(screenSize);
  const { auth, setAuth } = useAuth();
  const getAuth = async () => {
    try {
      const res =await  axios.get("/users/auth");
      if (res.data.success) setAuth(true);
      console.log(res);
    } catch (error) {}
  };
  useEffect(() => {
    getAuth();
  });

  return auth ? (
    <Navigate to="/dashboard/links" replace />
  ) : (
    <div>
      <header className="body-font md:mx-32 border-b-2 sticky top-0 bg-white">
        <div className="container mx-auto flex sm:p-2 h-1/2  items-center justify-between">
          <Link to="/" className="mx-4 md:mx-12">
            <div className="text-2xl md:text-3xl font-black  text-center text-indigo-600">
              SHORTENITE
            </div>
          </Link>
          <nav className="flex items-center font-semibold mr-4">
            <Link to="log_in" >
              <div className="m-1 p-2  text-base sm:text-xl  text-center rounded-lg hover:bg-gray-200">
                LogIn
              </div>
            </Link>

            <Link to="/sign_up">
            <div className="m-1 p-2 text-base sm:text-xl text-center rounded-lg hover:bg-gray-200">
                Sign Up
              </div>
            </Link>
          </nav>
        </div>
      </header>

      <div className=" body-font lg:mx-28">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 place-items-center ">
            {!screenSize &&
              <h1 className="title-font sm:text-4xl text-2xl mb-4 text-center font-medium text-gray-900">
              Shorten URLs. Generate QR Codes.
              Simple and fast URL shortener!
              </h1>
            }


            <div className="flex flex-col lg:flex-row justify-center content-center w-full lg:w-4/5  md:mt-10 mx-auto">
              <div className="mx-auto lg:mx-5 w-4/5 sm:max-lg:mb-6">
                <div className="border-2 p-2 h-1/2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" w-7 h-7 mx-auto" 
                      fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" 
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                  </svg>
                  <h3 className="mt-2 text-lg font-bold text-center">Easy</h3>
                  <p className="mt-1 text-base text-center">
                    ShortURL is easy and fast, enter the long link to get your shortened link
                  </p>
                </div>

                <div className="mt-6 border-2 p-2 pt-4 h-1/2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
                    stroke="currentColor" className=" w-7 h-7 mx-auto" >
                    <path stroke-linecap="round" stroke-linejoin="round" 
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                  <h3 className="mt-2 text-lg font-bold text-center">Shortened</h3>
                  <p className="mt-1 text-base text-center">
                  Use any link, no matter what size, ShortURL always shortens
                  </p>
                </div>
              </div>
              
              <div className="mx-auto lg:mx-5 w-4/5">
                <div className="border-2 p-2 h-1/2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    stroke-width="1.5" stroke="currentColor" className=" w-7 h-7 mx-auto" >
                    <path stroke-linecap="round" stroke-linejoin="round" 
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                  <h3 className="mt-2 text-lg font-bold text-center">Statistics</h3>
                  <p className="mt-1 text-base text-center">
                  Check the number of clicks that your shortened URL received
                  </p>
                </div>

                <div className="mt-6 border-2 p-2 pt-4 h-1/2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    stroke-width="1.5" stroke="currentColor" className=" w-7 h-7 mx-auto" >
                    <path stroke-linecap="round" stroke-linejoin="round" 
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  <h3 className="mt-2 text-lg font-bold text-center">Devices</h3>
                  <p className="mt-1 text-base text-center">
                  Compatible with smartphones, tablets and desktop
                  </p>
                </div>
              </div>

            </div>
          </div>  
 
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {screenSize &&
              <h1 className="title-font sm:text-4xl text-2xl mb-16 text-center font-medium text-gray-900">
              Shorten URLs. Generate QR Codes.
              Simple and fast URL shortener!
              </h1>
            }
            <img src={home_img} alt="IMG"></img>
          </div>
        </div>
      </div>

      <div className=" body-font lg:mx-32">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg shadow-xl overflow-hidden">
                <div className="p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    stroke-width="1.5" stroke="currentColor" className="w-16 h-16 mt-2 mx-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" 
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                  <h1 className="title-font text-xl mt-8 font-medium text-gray-900">URL Shortener</h1>  
                  <p className="leading-relaxed mt-4 text-gray-700">
                    Shortenite is a URL ShortenerPlatform. It offers a lot of features that will help you handle all your links in an intuitive way.
                    Link shorteners work by transforming any long URL into a shorter, more readable link. When a user clicks the shortened version, they’re automatically forwarded to the destination URL.
                  </p>
                </div>
                
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg shadow-xl overflow-hidden">
                <div className="p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                  stroke-width="1.5" stroke="currentColor" className="w-16 h-16 mt-2 mx-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" 
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>

                  <h1 className="title-font text-xl mt-8 font-medium text-gray-900">Link analytics</h1>  
                  <p className="leading-relaxed mt-4 text-gray-700">
                    Shortenite is an advanced Link Analytics platform that tracks clicks on short links and provides extensive statistics to help you measure the effectiveness of your short links.
                    A comprehensive solution to help make every point of connection between your content and your audience more powerful.
                  </p>
                </div>
                
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg shadow-xl overflow-hidden">
                <div className="p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    stroke-width="1.5" stroke="currentColor" className="w-16 h-16 mt-2 mx-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" 
                      d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" 
                      d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                  </svg>
                  <h1 className="title-font text-xl mt-8 font-medium text-gray-900">QR Codes</h1>  
                  <p className="leading-relaxed mt-4 text-gray-700">
                    With Shortenite, you can easily generate QR codes to match your brand and track their performance. Use QR codes to grow your business and measure their impact on your marketing efforts.
                    QR Code solutions for every customer, business and brand experience.
                  </p>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className=" body-font  lg:mx-32 m-8">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-2xl font-medium title-font text-center w-full mb-20 text-gray-900">OUR TEAM</h1>

          <div className="flex flex-wrap mx-auto">
            <div className="p-4 lg:w-1/3 w-full mt-5 lg:mt-0">
              <div className="h-full flex flex-col items-center text-center">
                <div className="w-full">
                  <h2 className="title-font font-medium text-xl md:text-3xl text-gray-900">Mohit Singh Rana</h2>
                  <h3 className="text-gray-500 text-xl mt-2">Developer</h3>
                  <span className="inline-flex mt-8">
                    <a className="text-gray-500" href="mailto:m8800757433@gmail.com">
                      <svg xmlns="http://www.w3.org/2000/svg"  
                        fill="currentColor" className="mx-3 w-8 h-8 hover:w-6 hover:h-6" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                    </a>
                    <a className=" text-gray-500" href="https://www.linkedin.com/in/mohit-singh-rana/">
                      <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="7.025 7.025 497.951 497.95" id="linkedin" className="mx-3 w-8 h-8 hover:w-6 hover:h-6">
                        <linearGradient id="a" x1="-974.482" x2="-622.378" y1="1306.773" y2="1658.877" 
                          gradientTransform="translate(1054.43 -1226.825)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#2489be"></stop>
                            <stop offset="1" stop-color="#0575b3"></stop>
                        </linearGradient>
                        <path fill="url(#a)" 
                          d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"></path>
                      </svg>
                    </a>
                    <a className=" text-gray-500" href="https://github.com/Mohit161220">
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="black" 
                      className="bi bi-github mx-3 w-8 h-8 hover:w-6 hover:h-6" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/3 w-full mt-5 lg:mt-0">
              <div className="h-full flex flex-col items-center text-center">
                <div className="w-full">
                  <h2 className="title-font font-medium text-xl md:text-3xl text-gray-900">Ritik Bhateley</h2>
                  <h3 className="text-gray-500 text-xl mt-2">Developer</h3>
                  <span className="inline-flex mt-8">
                    <a className="text-gray-500" href="mailto:ritikbhateley@gmail.com">
                      <svg xmlns="http://www.w3.org/2000/svg"  
                        fill="currentColor" className="mx-3 w-8 h-8 hover:w-6 hover:h-6" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                    </a>
                    <a className=" text-gray-500" href="https://www.linkedin.com/in/ritik-bhateley/">
                      <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="7.025 7.025 497.951 497.95" id="linkedin" className="mx-3 w-8 h-8 hover:w-6 hover:h-6">
                        <linearGradient id="a" x1="-974.482" x2="-622.378" y1="1306.773" y2="1658.877" 
                          gradientTransform="translate(1054.43 -1226.825)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#2489be"></stop>
                            <stop offset="1" stop-color="#0575b3"></stop>
                        </linearGradient>
                        <path fill="url(#a)" 
                          d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"></path>
                      </svg>
                    </a>
                    <a className=" text-gray-500" href="https://github.com/ritik-078">
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="black" 
                      className="bi bi-github mx-3 w-8 h-8 hover:w-6 hover:h-6" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/3 w-full mt-5 lg:mt-0">
              <div className="h-full flex flex-col items-center text-center">
                <div className="w-full">
                  <h2 className="title-font font-medium text-xl md:text-3xl text-gray-900">Prince Suman</h2>
                  <h3 className="text-gray-500 text-xl mt-2">Developer</h3>
                  <span className="inline-flex mt-8">
                    <a className="text-gray-500 " href="mailto:princesuman2211@gmail.com">
                      <svg xmlns="http://www.w3.org/2000/svg"  
                        fill="currentColor" className="mx-3 w-8 h-8 hover:w-6 hover:h-6" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                    </a>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="7.025 7.025 497.951 497.95" id="linkedin" className="mx-3 w-8 h-8 hover:w-6 hover:h-6">
                        <linearGradient id="a" x1="-974.482" x2="-622.378" y1="1306.773" y2="1658.877" 
                          gradientTransform="translate(1054.43 -1226.825)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#2489be"></stop>
                            <stop offset="1" stop-color="#0575b3"></stop>
                        </linearGradient>
                        <path fill="url(#a)" 
                          d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"></path>
                      </svg>
                    
                    <a className=" text-gray-500" href="https://github.com/PrinceSuman7">
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="black" 
                      className="bi bi-github mx-3 w-8 h-8 hover:w-6 hover:h-6" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="lg:px-28 mb-12">
        <h1 className="title-font sm:text-4xl text-2xl text-center font-medium text-gray-900">
            Proudly open-source
        </h1>
        <h3 className="title-font sm:text-2xl text-xl mt-5 text-center  text-gray-500">
            Our source code is available on GitHub - feel free to read, review, or contributeto it however you want!
        </h3>
        <div className="mx-auto w-24 h-24 mt-4 p-2">
          <a href="https://github.com/Mohit161220/shortenite">
              <svg xmlns="http://www.w3.org/2000/svg"  fill="black" 
                className="bi bi-github mx-auto  w-12 h-12 hover:w-16 hover:h-16" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
          </a>
        </div>
      </div>

      <footer className="flex flex-col content-center h-28 bg-gray-200">
        <div className="text-xl md:text-2xl font-black mt-6 text-center text-indigo-600">
          SHORTENITE
        </div>
        <p className="text-base text-gray-800  text-center  mt-2"> Copyright ©2023. All Rights Reserved</p>  
      </footer>

    </div>
  );
};

export default Home;
