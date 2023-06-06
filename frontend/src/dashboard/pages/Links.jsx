import React from 'react'
import LinkList from '../components/LinkList'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import { Link } from "react-router-dom";


const Links = () => {
  return (
    <div className=" ">

      <div className="sticky top-16 grid grid-col-12 w-full h-24 shadow-md bg-white">

        <span className="col-span-1 text-4xl my-6 pl-8 font-semibold ">Links</span>
        
        <Link to={`/dashboard/links/create_new_link`}>
          <Button className="col-start-2 col-span-1 my-6 w-3/5 " colorScheme="blue" >Create New</Button>
        </Link>

        <div className="col-start-12 col-span-1">
          <Menu>
            <MenuButton className= "my-6">
              <span className="flex ml-12">
                <span className="text-2xl font-semibold">Sort By </span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="w-5 h-5 mt-2 mx-1">
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5" 
                    />
                  </svg>
              </span>
            </MenuButton>
            
            <MenuList>
              <MenuItem>Name</MenuItem>
              <MenuItem>Size</MenuItem>
              <MenuItem>Newest to Oldest</MenuItem>
              <MenuItem>Oldest to Newest</MenuItem>
            </MenuList>
          </Menu>
        </div>

      </div>

      <div className=" w-full">
        <LinkList />
      </div>
    </div>
  )
}

export default Links