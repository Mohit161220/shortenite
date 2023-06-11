import React from "react";
import { useState } from 'react';
import { Input, Button } from "@chakra-ui/react";

const EditLink = (props) => {
    const [title, setTitle] = useState(props.title);
    const [destinationURL, setDestinationURL] = useState(props.destinationURL);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDestinationUrlChange = (e) => {
        setDestinationURL(e.target.value);
    };

    return(
        <div className="flex place-content-center place-items-center w-full h-5/6 ">
            <div className="flex flex-col justify-evenly w-1/2 h-5/6 rounded-lg shadow-lg">
                
                <span className="text-3xl font-bold mx-8">Edit Link</span>
                
                <div className="mx-8">
                    <label className="text-lg font-semibold" >Destination URL</label>
                    <Input className="mt-3" variant="outline"  
                        onChange={handleDestinationUrlChange}
                    />
                </div>

                <div className="mx-8">
                    <label className="text-lg font-semibold" >Title</label>
                    <Input className="mt-3" variant="outline"  
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="flex place-content-end mx-8">
                    <Button className="mx-3" colorScheme='blue'>Update</Button>
                </div>
                    
            </div>
        </div>
    )
}

export default EditLink