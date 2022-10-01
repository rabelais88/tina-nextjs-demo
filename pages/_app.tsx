import LayoutBase from '@/layout/LayoutBase';
import { theme } from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Tina from '../.tina/components/TinaDynamicProvider';

// any HOC for stylings
const StyleProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

const App = ({
  Component,
  pageProps: { layout: _layout, ...pageProps },
}: AppProps<MyPageProps>) => {
  const Layout = _layout ?? LayoutBase;
  return (
    <Tina>
      <StyleProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyleProvider>
    </Tina>
  );
};

export default App;
