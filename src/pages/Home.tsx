import { Box, Text, Stack } from '@chakra-ui/react';

const Home = () => (
  <Box
    w="100%"
    h="calc(100vh - 120px)"
    overflow="hidden"
  >
    {/*Background*/}
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100%"
      backgroundImage="url(/Home2.svg)"
      backgroundSize="cover"
      backgroundPosition="center"
      zIndex={0}
    />

    {/* Conteúdo centralizado */}
    <Stack
      position="relative"
      zIndex={2}
      w="100%"
      h="100vh"
      align="left"
      pl="20"
      justify="center"
      spacing={4}
      bottom="100px"
    >
        <Text
          fontSize="40"
          w="500"
          color="white"
          fontWeight="semibold"
          textAlign="left"
          lineHeight="52px"
          letterSpacing="4.8px"
          fontFamily="'Poppins', sans-serif"
        >
          Ola! sou o Michael V. Candida,
        </Text>
        <Text
          fontSize="40"
          w="500"
          color="white"
          fontWeight="semibold"
          textAlign="left"
          lineHeight="52px"
          letterSpacing="4.8px"
          fontFamily="'Poppins', sans-serif"
        >
          Desenvolvedor Full-Stack
        </Text>
    </Stack>
  </Box>
);

export default Home;
