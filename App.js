import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  Animated,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const { width, height } = Dimensions.get("screen");

  const ITEM_WIDTH = width * 0.76;
  const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

  // const images = [
  //   "https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  //   "https://images.unsplash.com/photo-1663857162939-8c5624a71bf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  //   "https://images.unsplash.com/photo-1663791088119-07535b0fafeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  //   "https://images.unsplash.com/photo-1663857647856-dd3dfbfa7d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  //   "https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  //   "https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  //   "https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  //   "https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  //   "https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  //   "https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  //   "https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  //   "https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  // ];

  const images = [
    require("./assets/img1.jpg"),
    require("./assets/img2.jpg"),
    require("./assets/img3.jpg"),
    require("./assets/img4.jpg"),
    require("./assets/img5.jpg"),
    require("./assets/img6.jpg"),
    require("./assets/img6.jpg"),
    require("./assets/img6.jpg"),
  ];

  const _bgColor = ["tomato", "orange", "green", "yellow", "blue", "purple"];
  const data = images.map((image, index) => ({
    key: String(index),
    photo: image,
    avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
      Math.random() * 40
    )}.jpg`,
  }));
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX, x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });

          return (
            <Animated.View
              style={{
                width,
                justifyContent: "center",
                backgroundColor: "#EEE",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderRadius: 18,
                  borderWidth: 10,
                  borderColor: "#fff",
                }}
              >
                <View
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  <Animated.Image
                    source={item.photo}
                    style={{
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                      resizeMode: "cover",
                      borderRadius: 17,
                      transform: [{ translateX }],
                    }}
                  />
                </View>
                <Image
                  source={{ uri: item.avatar_url }}
                  style={{
                    width: 60,
                    height: 60,
                    position: "absolute",
                    bottom: -30,
                    right: 60,
                    borderRadius: 80,
                    borderWidth: 6,
                    borderColor: "#fff",
                  }}
                />
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
