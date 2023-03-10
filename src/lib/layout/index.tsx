import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex direction="column" minH="100vh" width="full">
      <Header />
      <Box margin="0 auto" transition="0.5s ease-out">
        <Box margin="8">
          <Box as="main" marginTop="80px" marginBottom="100px">
            {children}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
