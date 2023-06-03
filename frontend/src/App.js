import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'


import Dashboard from "./dashboard/Dashboard.jsx"

function App() {

  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  )
}
export default App;