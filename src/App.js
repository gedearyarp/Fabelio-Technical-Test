import React, { useState } from 'react';
import {ChakraProvider, Box, Skeleton} from "@chakra-ui/react";
import HeaderInfo from "./components/HeaderInfo"
import FooterInfo from "./components/FooterInfo"
import ProductImage from "./components/ProductImage"
import similars from "./similar.json"
import SimilarButton from './components/SimilarButton'

const App = () => {
  const [listSim, setListSim] = useState([similars.produk1, similars.produk2, similars.produk3, similars.produk4, similars.produk5, similars.produk6, similars.produk7, similars.produk8, similars.produk9])
  const [showSim, setShowSim] = useState(similars.produk1)
  const [idxSim, setIdxSim] = useState(1)
  const handleSimilarPage = () => {
    let now = idxSim % 9;
    setIdxSim(idxSim+1)
    listSim.map((row) => {
      if (row.code == now){
        setShowSim(row)
      }
    })
  }

  return (
    <ChakraProvider>
      <Box bgColor="gray.100" padding={4} h="100%">
      <Box 
        w="700px" 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        marginX="auto" 
        marginY={2}
        backgroundColor="#fff"
        shadow="lg"
        padding={8}
        borderRadius="xl"
      >
          <HeaderInfo nama={showSim.name} harga={showSim.price}/>  
          <ProductImage gambar={showSim.image}/>
          <FooterInfo warna={showSim.colours} bahan={showSim.material} panjang={showSim.length} lebar={showSim.width} tinggi={showSim.height}/>
        <SimilarButton setHandle={handleSimilarPage}/>
      </Box>
      </Box>

    </ChakraProvider>
  );
}

export default App;
