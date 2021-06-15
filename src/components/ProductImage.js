import React, { useState, useEffect } from 'react';
import {
  Box,
  Image,
} from "@chakra-ui/react";

const ProductImage = ({image}) => {  
  return (
    <Box display="flex" justifyContent="center">
      <Image src={image} />
    </Box>
  );
}

export default ProductImage;