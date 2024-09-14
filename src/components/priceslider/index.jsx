import { useState } from 'react';
import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Text } from "@chakra-ui/react";

export const PriceSlider = () => {
  const [price, setPrice] = useState(50); // Boshlang'ich qiymat

  return (
    <Box p={6} maxW="400px" mx="auto">

      <Slider
        aria-label="slider-ex-1"
        defaultValue={50}
        min={0}
        max={100}
        step={1}
        onChange={(val) => setPrice(val)} // Slider qiymatini o'zgartirish
      >
        <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
          0
        </SliderMark>
        <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
          $25
        </SliderMark>
        <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
          $50
        </SliderMark>
        <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
          $75
        </SliderMark>
        <SliderMark value={100} mt="1" ml="-2.5" fontSize="sm">
          $100
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Text fontSize="xl" mt={5}>Select Price: ${price}</Text>
    </Box>
  );
};