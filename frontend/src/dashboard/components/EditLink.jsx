import React, { useEffect } from "react";
import { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const EditLink = () => {
  const [title, setTitle] = useState("");
  const [destinationURL, setDestinationURL] = useState("");
  const [id, setId] = useState(useParams().id);
  const navigate=useNavigate()
  const getLink = async () => {
    try {
      const res = await axios.get(`/links/details/${id}`);
      const data = res.data.data;
      setTitle(data.title);
      setDestinationURL(data.url);
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`/links/edit/${id}`, {
        title: title,
        url: destinationURL,
      });
      if(res.data.success)
      navigate('/dashboard/links')
    } catch (error) {}
  };

  useEffect(() => {
    getLink();
  });

  return (
    <div className="flex place-content-center place-items-center w-full h-5/6 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-evenly w-1/2 h-5/6 rounded-lg shadow-lg"
      >
        <span className="text-3xl font-bold mx-8">Edit Link</span>

        <div className="mx-8">
          <label className="text-lg font-semibold">Destination URL</label>
          <Input
            className="mt-3"
            variant="outline"
            onChange={(e) => setDestinationURL(e.target.value)}
            placeholder={destinationURL}
          />
        </div>

        <div className="mx-8">
          <label className="text-lg font-semibold">Title</label>
          <Input
            className="mt-3"
            variant="outline"
            onChange={(e) => setTitle(e.target.value)}
            placeholder={title}
          />
        </div>
        <div className="flex place-content-end mx-8">
          <Button type="submit" className="mx-3" colorScheme="blue">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditLink;
