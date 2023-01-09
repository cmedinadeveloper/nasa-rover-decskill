import {
  Box,
  chakra,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

import type { Photo } from "lib/types/Rover";

const ImageModal = ({
  image,
  onClose,
  isOpen,
}: {
  image: Photo;
  onClose: () => void;
  isOpen: boolean;
}) => {
  return (
    image && (
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody padding={0}>
            <Flex
              bg="#edf3f8"
              _dark={{
                bg: "#3e3e3e",
              }}
              w="full"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                mx="auto"
                rounded="lg"
                shadow="md"
                bg="white"
                _dark={{
                  bg: "gray.800",
                }}
                w="full"
              >
                <Image
                  w="full"
                  h="full"
                  fit="cover"
                  src={image.img_src || ""}
                  alt="Article"
                />

                <Box p={6}>
                  <Box>
                    <chakra.span
                      fontSize="xs"
                      textTransform="uppercase"
                      color="brand.600"
                      _dark={{
                        color: "brand.400",
                      }}
                    >
                      Rover {image.rover.name || ""}
                    </chakra.span>
                    <chakra.span
                      display="block"
                      color="gray.800"
                      _dark={{
                        color: "white",
                      }}
                      fontWeight="bold"
                      fontSize="2xl"
                      mt={2}
                      _hover={{
                        color: "gray.600",
                        textDecor: "underline",
                      }}
                    >
                      ({image.camera.name || ""}):{" "}
                      {image.camera.full_name || ""}
                    </chakra.span>
                  </Box>

                  <Box mt={4}>
                    <Flex alignItems="left" flexDirection="column">
                      <chakra.span
                        mx={1}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{
                          color: "gray.300",
                        }}
                      >
                        Martian Sol Date: {image.sol || ""}
                      </chakra.span>
                      <chakra.span
                        mx={1}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{
                          color: "gray.300",
                        }}
                      >
                        Earth Date: {image.earth_date || ""}
                      </chakra.span>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
  );
};

export default ImageModal;
