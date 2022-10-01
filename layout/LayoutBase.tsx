import { Box, Container } from '@chakra-ui/react';

const LayoutBase: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box data-layout="layout-base" bgColor="white" color="black">
      <Container maxW="container.md">{children}</Container>
    </Box>
  );
};

export default LayoutBase;
