import React, { useState, useEffect } from 'react';
import {
  Flex,
  Text,
  Box
} from "@chakra-ui/react";

const HeaderInfo = ({name, price}) => {  
  return (
    <Flex justifyContent="space-between">
      <Box>
        <Text>{name}</Text>
      </Box>
      <Box>
        <Text>Rp{price}</Text>
      </Box>
    </Flex>
  );
}

export default HeaderInfo;