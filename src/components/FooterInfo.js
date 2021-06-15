import React from 'react';
import {
  Flex,
  Text,
  Box,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";

const FooterInfo = ({warna, bahan, dimensi}) => {  
  return (
    <Flex justifyContent="space-between">
      <Box>
        <Text>Color: {warna}</Text>
      </Box>
      <Box>
        <Text>Material: <br /> {bahan}</Text>
      </Box>
      <Box>
      <UnorderedList>
        <ListItem>Panjang: {dimensi}</ListItem>
        <ListItem>Lebar: {dimensi}</ListItem>
        <ListItem>Tinggi: {dimensi}</ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
}

export default FooterInfo;