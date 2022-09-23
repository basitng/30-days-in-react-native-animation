import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const nanoid = (range) => Math.random() * range;

const actions = [
  {
    icon: <Feather name="mic-off" size={24} color="#66686A" />,
    text: "Mute",
    id: nanoid(560),
  },
  {
    icon: <Ionicons name="keypad" size={24} color="#66686A" />,
    text: "Keypad",
    id: nanoid(560),
  },
  {
    icon: <Feather name="volume-2" size={24} color="#555" />,
    text: "Add Call",
    id: nanoid(560),
  },
  {
    icon: <MaterialIcons name="add-call" size={24} color="#BCBEC1" />,
    text: "Speaker",
    id: nanoid(1156),
  },
  {
    icon: (
      <MaterialCommunityIcons name="sim-outline" size={24} color="#66686A" />
    ),
    text: "Change SIM",
    id: nanoid(7586),
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="record-circle-outline"
        size={24}
        color="#BCBEC1"
      />
    ),
    text: "Record",
    id: nanoid(5086),
  },
];

export default actions;
