import { Box, Container } from '@chakra-ui/react';
import Header from './components/ui/header';
import Home from './pages/Home';

function App() {
  return (
    <Box>
      <Header />
      <Home />
    </Box>
  );
}

export default App;