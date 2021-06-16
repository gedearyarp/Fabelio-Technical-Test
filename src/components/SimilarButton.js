import React from 'react';
import {
    Button,
    Box
} from "@chakra-ui/react"
import {FaSearch} from "react-icons/fa"


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
                bgColor="#fbd31c"
                leftIcon={<FaSearch />}
            >
            Find another similar product
            </Button>
        </Box>
    );
};

export default SimilarButton;