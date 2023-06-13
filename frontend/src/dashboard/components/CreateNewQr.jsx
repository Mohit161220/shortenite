import React, { useState } from "react";
import { Input, Button, Switch } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateNewQr = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(url);
    console.log(title);
    try {
      const res = await axios.post("/qr/create-qr", {
        url: url,
        title: title,
      });
      console.log("no key");
      console.log(res);

      navigate("/dashboard/qrs");
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
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold mx-8">Create New</span>

        <div className="mx-8 mt-5">
          <label className="text-lg font-semibold" for="name">
            Destination URL
          </label>
          <Input
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            className="mt-3"
            variant="outline"
            placeholder="https://example.com/my-long-url"
          />
        </div>

        <div className="mx-8">
          <label className="text-lg font-semibold" for="title">
            Title
          </label>
          <Input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="mt-3"
            variant="outline"
            placeholder="My-Link"
          />
        </div>

        <div className="mx-8">
          <label className="text-lg font-semibold mr-5" for="title">
            Short Link (optional)
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

export default CreateNewQr;
