import { ChakraProvider } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import theme from '../../styles/theme';

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Provider;
