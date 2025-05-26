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
      backgroundImage="url(/background.jpg)"
      backgroundSize="cover"
      backgroundPosition="center"
      filter="auto" 
      zIndex={0}
    />

    {/* Camada de escurecimento com blur extra */}
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100%"
      bg="rgba(0, 0, 0, 0.45)"
      backdropFilter="blur(5px)"
      zIndex={1}
    />

    {/* Conteúdo centralizado */}
    <Stack
      position="relative"
      zIndex={2}
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      spacing={4}
      bottom="100px"
    >
      <Text
        fontSize="4xl"
        color="white"
        fontWeight="bold"
        textAlign="center"
        lineHeight="1.2"
        letterSpacing="4.8px"
        fontFamily="'Poppins', sans-serif"
      >
        PORTFÓLIO
      </Text>

      <Text
        fontSize={["8xl"]}
        color="white"
        fontWeight="bold"
        textAlign="center"
        lineHeight="1.2"
        fontFamily="'Poppins', sans-serif"
      >
        MICHAEL V. CANDIDA
      </Text>

      <Text
        fontSize="2xl"
        color="white"
        fontWeight="normal"
        textAlign="center"
        lineHeight="1.6"
        fontFamily="'Lora', serif"
      >
        | Full-Stack Developer |
      </Text>
    </Stack>
  </Box>
);

export default Home;
