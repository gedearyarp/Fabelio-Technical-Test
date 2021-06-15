import React from 'react';
import {
  Flex,
  Text,
  Box
} from "@chakra-ui/react";

const HeaderInfo = ({nama, harga}) => {  
  return (
    <Flex justifyContent="space-between">
      <Box>
        <Text>{nama}</Text>
      </Box>
      <Box>
        <Text>Rp{harga}</Text>
      </Box>
    </Flex>
  );
}

export default HeaderInfo;