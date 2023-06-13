import React from 'react'
import LinkList from '../components/LinkList'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
 
const Links = () => {
  let isScreenMid = useMediaQuery("(min-width : 768px)");

  return (
    <div className="">

      <div className="sticky top-24 grid grid-col-12 w-full h-16 md:h-24 shadow-md">

        <span className="col-span-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4 md:my-6 pl-3 md:pl-8 font-semibold ">Links</span>
        
        <Link to={`/dashboard/links/create_new_link`}>
          {isScreenMid ?
            <Button className="col-start-2 col-span-1 my-4 md:my-6 w-3/5 " colorScheme="blue" >Create New</Button> :
            <Button className="col-start-2 col-span-1 my-4" colorScheme="blue" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </Button>
          }
          
        </Link>

        <div className="col-start-12 col-span-1">
          <Menu>
            <MenuButton className= "my-6">
              <span className="flex ml-12">
                <span className="text-sm sm:text-xl md:text-2xl font-semibold">Sort By </span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="w-3 h-3 sm:w-5 sm:h-5 mt-2 mx-1">
                    <path 
                      stokelinecap="round" 
                      stokelinejoin="round" 
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