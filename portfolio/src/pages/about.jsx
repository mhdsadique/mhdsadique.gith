import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  return (
    <Box w={'100%'} bg='rgba(0,0,0,.9)' color={'white'} padding='1rem' >

    <Box w={'50%'} h='2xs' display='grid' alignItems='center' justifyContent={'center'}  textAlign="center" margin={"auto"}>
      <Heading fontSize='2xl'
  fontWeight='extrabold'>
About
</Heading>
  <Text>
  Full-Stack Web Developer with the ability to learn and collaborate in rapidly 
  changing environments and compositions. Worked through 1000+ hours of Bootcamp structure learning JavaScript, Node.Js, React.Js, MongoDB, Express, HTML5, and CSS3.
  I  hereby  declare  that  all  the  information 
 mentioned  above  is  true  to  the  best  of  my  knowledge. I will make it my earnest endeavor to discharge competently and carefully  the duties you may be pleased to entrust with me..
  </Text>
    </Box>
    </Box>
  )
}


