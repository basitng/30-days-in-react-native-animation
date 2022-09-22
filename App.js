import { Feather } from "@expo/vector-icons";
import { MotiView } from "@motify/components";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Easing } from "react-native-reanimated";

const _color = "#6E01EF";
const _text = "#FFF";
export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.callBtn}>
          {[...Array(3).keys()].map((index) => (
            <MotiView
              from={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{
                type: "timing",
                ease: Easing.out(Easing.ease),
                duration: 2000,
                loop: true,
                delay: index * 100,
                repeatReverse: false,
              }}
              key={index}
              style={[styles.callBtn, StyleSheet.absoluteFillObject]}
            />
          ))}
          <Feather name="phone-outgoing" size={34} color={_text} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  callBtn: {
    width: 100,
    height: 100,
    backgroundColor: _color,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
