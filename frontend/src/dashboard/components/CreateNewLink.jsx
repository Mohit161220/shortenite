import React, { useState } from "react";
import { Input, Button, Switch } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateNewLink = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [key, setKey] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(url)
    console.log(title)
    try {
      if (!key) {
        const res = await axios.post("/links/create-link", { url:url, title:title });
        console.log("no key")
        console.log(res);
      }else{
      const res = await axios.post("/links/create-link", { url, title });
      console.log(res)
      }
      navigate("/dashboard/links");
    } catch (error) {
    //   console.log(error);
    }
  };

  return (
    <div className="flex place-content-center place-items-center w-full h-5/6 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-evenly w-3/5 h-5/6 rounded-lg shadow-lg"
      >
        <span className="text-3xl font-bold mx-8">Create New</span>
        <div className="mx-8">
          <label className="text-lg font-semibold" htmlFor="name">
            Destination URL
          </label>
          <Input
            onChange={(e) => setUrl(e.target.value)}
            className="mt-3"
            variant="outline"
            placeholder="https://example.com/my-long-url"
          />
        </div>

        <div className="mx-8">
          <label className="text-lg font-semibold" htmlFor="title">
            Title
          </label>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            className="mt-3"
            variant="outline"
            placeholder="My-Link"
          />
        </div>

        <div className="mx-8">
          <label className="text-lg font-semibold" htmlFor="title">
            Custom back-half (optional)
          </label>
          <Input
            onChange={(e) => setKey(e.target.value)}
            className="mt-3"
            variant="outline"
            placeholder=""
          />
        </div>

        <div className="mx-8">
          <label className="text-lg font-semibold mr-5" htmlFor="title">
            QR Code (optional)
          </label>
          <Switch id="email-alerts" size="md" />
        </div>

        <div className="flex place-content-end mx-8">
          <Button className="mx-3" colorScheme="gray">
            Cancel
          </Button>
          <Button type="submit" className="mx-3" colorScheme="blue">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewLink;
