import React from 'react';
import {
  Flex,
  Text,
  Box,
  Skeleton
} from "@chakra-ui/react";
import NumberFormat from 'react-number-format'

const HeaderInfo = ({nama, harga}) => {  
  return (
    <Flex justifyContent="space-between">
      <Box>
        <Skeleton isLoaded>
          <Text casing="capitalize" fontWeight="700">{nama}</Text>
        </Skeleton>
      </Box>
      <Box>
      <Skeleton isLoaded>
        Rp<NumberFormat value={harga} displayType={'text'} thousandSeparator={true} />
      </Skeleton>
      </Box>
    </Flex>
  );
}

export default HeaderInfo;