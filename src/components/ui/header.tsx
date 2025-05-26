import { Box, Flex, Image, HStack, Button } from '@chakra-ui/react';

const Header = () => (
  <Box
    h="120px"
    as="header"
    color="white"
    p={4}
    bg="transparent"
    borderBottom="2px solid #9747FF"
    position="sticky"
    top={0}
    zIndex={10}
  >
    <Flex justify="space-between" align="center" h="100%">
      <Image
        src="/LogoBranca.svg"
        alt="Logo"
        boxSize={["148px"]}
        marginLeft="10"
      />

      <HStack spacing={55} marginRight="10">
        {['C: Home>', 'C: Sobre>', 'C: Portfólio>', 'C: Contato>'].map((label) => (
          <Button
          key={label}
          variant="unstyled"
          color="white"
          borderBottom="2px solid white"
          borderRadius={0}
          _hover={{
            borderBottom: '2px solid #9747FF',
            color: '#9747FF',
          }}
          _focus={{ boxShadow: 'none' }}
        >
          {label}
        </Button>
        ))}
      </HStack>
    </Flex>
  </Box>
);

export default Header;
