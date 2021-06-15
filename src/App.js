import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Text,
  Box,
  Container
} from "@chakra-ui/react";
import {
  HeaderInfo,
  ProductImage,
  FooterInfo
} from "./components"
import similars from "./similar.json"
const App = () => {
  return (
    <ChakraProvider>
      <Box w="1000px" display="flex" flexDirection="column" justifyContent="center" marginX="auto" >
        <HeaderInfo />  
        <ProductImage />
        <FooterInfo />
      </Box>


      {/* <Box width="500px" height="100vh" backgroundColor="yellow">
        <Text>nama : {similars.produk1.image}</Text>
        <Text>price : {similars.produk1.price}</Text>
        <img src={produk1} alt=""></img>
        <Text>colour : {similars.produk1.colours}</Text>
        <Text>material : {similars.produk1.material}</Text>
        <Text>dimension : {similars.produk1.dimension}</Text>
      </Box> */}
    </ChakraProvider>
  );
}

export default App;
