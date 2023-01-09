import { Box, Image, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next/types";
import { useState } from "react";

import ImageModal from "lib/components/ImageModal";
import MissionSection from "lib/components/MissionSection";
import type { Photo } from "lib/types/Rover";
import { ROVER_CAMERAS } from "lib/types/Rover";
import { randomIntFromInterval } from "utils/utils";

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const boxShadow = useColorModeValue(
    "2px 4px 6px 2px rgba(160, 174, 192, 0.6)",
    "2px 4px 6px 2px rgba(9, 17, 28, 0.6)"
  );

  const onClickImage = (image: Photo) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <>
      <MissionSection />
      <Box
        padding={4}
        w="100%"
        maxW="900px"
        mx="auto"
        bg="transparent"
        sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
      >
        {data &&
          data.map((item: Photo) => (
            <Image
              key={item.id}
              w="100%"
              borderRadius="xl"
              mb={2}
              display="inline-block"
              src={item.img_src}
              alt="Alt"
              boxShadow={boxShadow}
              onClick={() => onClickImage(item)}
            />
          ))}
        {selectedImage !== null && (
          <ImageModal image={selectedImage} onClose={onClose} isOpen={isOpen} />
        )}
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data?: Photo[];
}> = async ({ res }) => {
  const randomRover =
    ROVER_CAMERAS[Math.floor(Math.random() * ROVER_CAMERAS.length)];
  const finalPhotos: Photo[] = [];

  try {
    const result = await Promise.all(
      randomRover.cameras.map((item) => {
        const randomSolDay = randomIntFromInterval(1, 1000);

        return fetch(
          `https://mars-photos.herokuapp.com/api/v1/rovers/${randomRover.name.toLowerCase()}/photos?sol=${randomSolDay}&camera=${item.toLowerCase()}&api_key=FcABZYEWfoLphvgNrXkclS2ZMd3SLvay6SnjcQdr&api_key=FcABZYEWfoLphvgNrXkclS2ZMd3SLvay6SnjcQdr`
        ).then((response) => response.json());
      })
    );

    result.forEach((item) => {
      const group = item.photos.slice(0, 4);
      finalPhotos.push(group);
    });

    const flatArray = finalPhotos.flat();
    const unique: Photo[] = [...new Set(flatArray)];

    return {
      props: { data: unique },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default Home;
