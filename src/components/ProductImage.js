import React from 'react';
import {
  Box,
  Image,
} from "@chakra-ui/react";

const ProductImage = ({gambar}) => {  
  return (
    <Box display="flex" justifyContent="center">
      <Image src={gambar} borderRadius="lg" my={4} />
    </Box>
  );
}

export default ProductImage;