import React from 'react';
import {
  Grid,
  Text,
  Box,
  UnorderedList,
  ListItem,
  Heading
} from "@chakra-ui/react";

const FooterInfo = ({warna, bahan, panjang, lebar, tinggi}) => {  
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <Box>
        <Heading size="xs">Color</Heading>
        <Text casing="capitalize">{warna}</Text>
      </Box>
      <Box>
        <Heading size="xs">Material</Heading>
        <Text casing="capitalize">{bahan}</Text>
      </Box>
      <Box>
        <Heading size="xs">Dimension</Heading>
        <UnorderedList>
          <ListItem>Panjang: {panjang} cm</ListItem>
          <ListItem>Lebar: {lebar} cm</ListItem>
          <ListItem>Tinggi: {tinggi} cm</ListItem>
        </UnorderedList>
      </Box>
    </Grid>
  );
}

export default FooterInfo;