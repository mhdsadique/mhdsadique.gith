import logo from './logo.svg';
import './App.css';
import { Menudata, Navbar } from './component/navbar';
// import { Routes } from 'react-router-dom';
import { Routerpage } from './component/routes';
import { Box, color } from '@chakra-ui/react';
import { AuthContext } from './component/auth';
import { useContext } from 'react';

const mytheme={
 color:"white",
 backgroundColor: "#4A5568",
}//#805AD5
const myfalse={

 }
function App() {
  const {theme}=useContext(AuthContext)

  return (
<>
{
  theme?    <Box style={mytheme} >
  <header >
    <Box   >
          <Navbar/>
          <Menudata/>
    </Box>
    <Box  >

     <Routerpage />
    </Box>
  </header>
</Box>:
  <Box 
  bgGradient={[
 'linear(to-tr, teal.300, yellow.400)',
 'linear(to-t, blue.200, teal.500)',
 'linear(to-b, orange.100, purple.300)',
]}>
   <header >
     <Box   >
           <Navbar/>
           <Menudata/>
     </Box>
     <Box  >

      <Routerpage />
     </Box>
   </header>
 </Box>

}

   
</>
  );
}

export default App;
