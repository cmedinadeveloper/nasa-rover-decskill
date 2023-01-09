import type { TextProps } from "@chakra-ui/react";
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
  Link,
} from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

const Content = ({ children, ...props }: PropsWithChildren<TextProps>) => {
  return (
    <Text
      fontSize="md"
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      color="gray.500"
      {...props}
    >
      {children}
    </Text>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        />
      </svg>
    </Box>
  );
}

const MissionSection = () => {
  return (
    <Container zIndex={-1} maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Box mr={{ base: 0, md: 5 }} pos="relative" zIndex={-1}>
          <DottedBox />
          <Image
            w="100%"
            h="100%"
            minW={{ base: "auto", md: "20rem", lg: "26rem" }}
            maxH="20rem"
            objectFit="cover"
            src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
            rounded="md"
            fallback={<Skeleton />}
            filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
          />
        </Box>
        <Stack direction="column" spacing={6} justifyContent="center">
          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
          >
            Mars Exploration Program
          </chakra.h1>
          <Box>
            <Content>
              The goal of the Mars Exploration Program is to explore Mars and to
              provide a continuous flow of scientific information and discovery
              through a carefully selected series of robotic orbiters, landers
              and mobile laboratories interconnected by a high-bandwidth
              Mars/Earth communications network.
            </Content>
          </Box>
          <Link
            href="https://mars.nasa.gov/"
            fontSize="sm"
            color={useColorModeValue("purple.500", "purple.200")}
          >
            About the program →
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MissionSection;
