import React from 'react';
import {
    Button,
    Box
} from "@chakra-ui/react"


const SimilarButton = ({setHandle}) => {
    return(
        <Box minWidth='320px'>
            <Button
            onClick={(e) => setHandle(e)}   
            variant="solid"
            size="md"
            width="100%"
            mt={4}
            mb={4}
            bgColor="#ffd41c"
            >
            Find another similar product
            </Button>
        </Box>
    );
};

export default SimilarButton;