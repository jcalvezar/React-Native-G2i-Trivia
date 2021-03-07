import React from "react";
import {
  Image,
  View,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../..//assets/background2.jpg")}
      style={styles.image}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
          alignContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/g2i logo.png")}
            style={{ width: 150, height: 150 }}
          />
        </View>
        <View style={{ alignItems: "center", paddingTop: 90 }}>
          <Image
            source={require("../../assets/trivia title.png")}
            style={{ width: 700, height: 150 }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.replace("Trivia")}
          >
            <Image
              source={require("../../assets/start.gif")}
              style={{ width: 600, height: 450 }}
            />
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
