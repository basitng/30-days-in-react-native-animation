import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import actions from "./Global/actions";
import { Surface } from "react-native-paper";

const _bgColor = "FFFFFFF";
const _primaryColor = "#F263C0";
const _secondaryColor = "#536bab";
const _textColor = "#0D0D0D";

const { width, height } = Dimensions.get("screen");
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contactInfo}>
        <View style={styles.contactInfoAvatar}>
          <Text style={styles.contactInfoNameIndex}>A</Text>
        </View>
        <Text style={styles.contactInfoNetwork}>
          Calling Vis{" "}
          <Text
            style={{ ...styles.contactInfoNetwork, color: _secondaryColor }}
          >
            {" "}
            MTN - NG{" "}
          </Text>
        </Text>
        <Text style={styles.contactInfoName}>Namesake</Text>
        <Text style={styles.contactInfoNumber}>Custom 07062602401</Text>
      </View>

      <View style={styles.contactActionBtns}>
        {actions.map((item) => (
          <TouchableOpacity key={item.id}>
            <View style={styles.contactActionBtn}>
              {item.icon}
              <Text style={styles.contactActionBtnText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Surface elevation={10} style={{ borderRadius: 100 }}>
        <TouchableOpacity>
          <View style={styles.callBTN}>
            <MaterialIcons name="call-end" size={30} color="white" />
          </View>
        </TouchableOpacity>
      </Surface>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: _bgColor,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  contactInfo: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 70,
  },
  contactInfoAvatar: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: _primaryColor,
    borderRadius: 100,
  },
  contactInfoNameIndex: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  contactInfoNetwork: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 5,
  },
  contactInfoName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333333100",
  },
  contactInfoNumber: {
    fontSize: 16,
    paddingTop: 10,
  },
  contactActionBtns: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    paddingHorizontal: 2,
  },
  contactActionBtn: {
    width: width / 3 - 10,
    height: width / 3 - 10,
    justifyContent: "center",
    alignItems: "center",
  },
  contactActionBtnText: {
    fontSize: 14,
    paddingTop: 10,
    color: _textColor,
  },
  callBTN: {
    width: width / 6,
    height: width / 6,
    backgroundColor: "#D93030",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
