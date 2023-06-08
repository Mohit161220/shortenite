import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "../axios";

const Loading = () => {
  //   const [shortUrl, changeShortUrl] = useState(useParams().shortUrl);
  const shortUrl=useParams().shortUrl
    const getUrl=async ()=>{
        try {
            const response=await axios.get(`/${shortUrl}`)
        } catch (error) {
            
        }
    }
  useEffect(() => {
    const Url = getUrl();
    window.location.replace(`https://www.${Url}.com`);
  }, []);
  return <div>Loading </div>;
};

export default Loading;
