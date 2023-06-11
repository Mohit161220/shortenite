import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";


const Loading = () => {
  const [shortUrl, changeShortUrl] = useState(useParams().shortUrl);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(shortUrl);
    async function getUrl() {
      try {
        console.log("starting");
        const res = await axios.get(shortUrl);
        console.log(res);
        const url = res.data.data;
        console.log(`https://${url}`)
        window.location.replace(`https://${url}`);
      } catch (error) {
        console.log("Error Occured");
        console.log(error);
        navigate("/error");
      }
    }
    getUrl();
  },[]);
  return <div>Loading </div>;
};

export default Loading;
