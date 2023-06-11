import React from "react";
import { useState } from 'react';
import { Input, Button } from "@chakra-ui/react";

const EditLink = (props) => {

    const [link, setLink] = useState({
        title : props.title,
        destinationUrl : props.destinationUrl
    });
    
    const handleTitleChange = (e) => {
    setLink({
        ...link,
        title: e.target.value
    });
    };

    const handleDestinationUrlChange = (e) => {
    setLink({
        ...link,
        lastName: e.target.value
    });
    };
    const handleUpdate = () => {
    // Perform the update action here
        const updatedlink = {
            ...link,
            title: title,
            destinationUrl: destinationUrl
        };
    };

    return(
        <div className="flex place-content-center place-items-center w-full h-5/6 ">
            <div className="flex flex-col justify-evenly w-3/5 h-5/6 rounded-lg shadow-lg">
                
                <span className="text-3xl font-bold mx-8">Edit Link</span>
                
                <div className="mx-8">
                    <label className="text-lg font-semibold" for="name">Destination URL</label>
                    <Input className="mt-3" variant="outline" value={destinationUrl} onChange={handleDestinationUrlChange} />
                </div>

                <div className="mx-8">
                    <label className="text-lg font-semibold" for="title">Title</label>
                    <Input className="mt-3" variant="outline" value={title} onChange={handleTitleChange} />
                </div>
                <div className="flex place-content-end mx-8">
                    <Button className="mx-3" colorScheme='blue' onClick={handleUpdate}>Update</Button>
                </div>
                    
            </div>
        </div>
    )
}

export default EditLink