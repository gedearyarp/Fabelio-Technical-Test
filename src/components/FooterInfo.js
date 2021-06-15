import React, { useState, useEffect } from 'react';
import {
  Flex,
  Text,
  Box,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";

const FooterInfo = ({color, material, dimension}) => {  
  return (
    <Flex justifyContent="space-between">
      <Box>
        <Text>Color: {color}</Text>
      </Box>
      <Box>
        <Text>Material: <br /> {material}</Text>
      </Box>
      <Box>
      <UnorderedList>
        <ListItem>Panjang: {dimension}</ListItem>
        <ListItem>Lebar: {dimension}</ListItem>
        <ListItem>Tinggi: {dimension}</ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
}

export default FooterInfo;