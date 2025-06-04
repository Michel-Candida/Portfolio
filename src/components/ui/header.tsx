import { Box, Flex, Image, HStack, Button } from '@chakra-ui/react';

const Header = () => (
  <Box
    h="120px"
    as="header"
    color="white"
    p={4}
    bg="transparent"
    position="sticky"
    top={0}
    zIndex={10}
  >
    <Flex justify="space-between" align="center" h="100%">
      <Image src="/LogoBranca.svg" alt="Logo" boxSize={["148px"]} marginLeft="10"/>

      <Flex gap={4}>
        <Button variant="link" color="white" fontSize="xl" _hover={{ textDecoration: 'underline', color: 'purple'}}>
          PT
        </Button>
        |
        <Button variant="link" marginRight="150" fontSize="xl" color="white" _hover={{ textDecoration: 'underline', color: 'purple'}}>
          EN
        </Button>
      </Flex>
    </Flex>
  </Box>
);

export default Header;
