import { SimpleGrid, Button } from "@chakra-ui/react";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

export const HapticButtons = () => {
  return (
    <SimpleGrid
      id="top_level"
      columns={1}
      spacing={10}
      width={"sm"}
      alignItems={"center"}
    >
      {buttons.map(({ text, callback }) => (
        <Button colorScheme="blue" onClick={callback}>
          {text}
        </Button>
      ))}
    </SimpleGrid>
  );
};

const buttons = [
  {
    text: "impact medium",
    callback: async () => {
      await Haptics.impact({ style: ImpactStyle.Medium });
    },
  },
  {
    text: "impact light",
    callback: async () => {
      await Haptics.impact({ style: ImpactStyle.Light });
    },
  },
  {
    text: "vibrate",
    callback: async () => {
      await Haptics.vibrate();
    },
  },
  {
    text: "selection start",
    callback: async () => {
      await Haptics.selectionStart();
    },
  },
  {
    text: "selection changed",
    callback: async () => {
      await Haptics.selectionChanged;
    },
  },
  {
    text: "selection ends",
    callback: async () => {
      await Haptics.selectionEnd;
    },
  },
];
