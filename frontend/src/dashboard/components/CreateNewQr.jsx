import React from 'react'
import { Input, Button, Switch} from "@chakra-ui/react";

const CreateNewQr = () => {
    return(
        <div className="flex place-content-center place-items-center w-full h-5/6 ">
            <div className="flex flex-col justify-evenly w-3/5 h-5/6 rounded-lg shadow-lg">
                
                <span className="text-3xl font-bold mx-8">Create New</span>
                
                <div className="mx-8">
                    <label className="text-lg font-semibold" for="name">Destination URL</label>
                    <Input className="mt-3" variant="outline" placeholder="https://example.com/my-long-url" />
                </div>

                <div className="mx-8">
                    <label className="text-lg font-semibold" for="title">Title</label>
                    <Input className="mt-3" variant="outline" placeholder="My-Link" />
                </div>
                
                <div className="mx-8">
                    <label className="text-lg font-semibold mr-5" for="title">Short Link (optional)</label>
                    <Switch id='email-alerts' size='md'/>
                </div>
                
                <div className="flex place-content-end mx-8">
                    <Button className="mx-3" colorScheme='gray'>Cancel</Button>
                    <Button className="mx-3" colorScheme='blue'>Create</Button>
                </div>
                    
            </div>
        </div>
    )
}

export default CreateNewQr