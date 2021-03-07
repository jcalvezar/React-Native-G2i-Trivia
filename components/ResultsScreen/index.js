import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decode } from "html-entities";
import { CLEAR_STORE } from "../../redux/actionTypes";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const Right = () => <Text style={{ color: "green" }}>&#10004; </Text>;
const Wrong = () => <Text style={{ color: "red" }}>&#10007; </Text>;

export default function ResultsScreen({ navigation }) {
  const questions = useSelector((state) => state);
  const score = questions.reduce(
    (acc, curr) =>
      curr.question.correct_answer === curr.answer ? acc + 1 : acc,
    0
  );
  const dispatch = useDispatch();

  const restart = () => {
    dispatch({
      type: CLEAR_STORE,
      payload: {},
    });
    navigation.replace("Trivia");
  };

  return (
    <ImageBackground
      source={require("../..//assets/background2.jpg")}
      style={styles.image}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "canter",
          alignContent: "center",
          width: "90%",
        }}
      >
        <View style={styles.card}>
          <Text style={styles.mainText}>You Scored {score} / 10</Text>
        </View>
        <View style={styles.card}>
          {questions.map((question, idx) => (
            <Text style={styles.mainText} key={idx}>
              {question.question.correct_answer === question.answer ? (
                <Right />
              ) : (
                <Wrong />
              )}
              {decode(question.question.question)}
            </Text>
          ))}
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.buttons}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={restart}
            >
              <Text style={styles.trueButton}>Play Again</Text>
            </TouchableHighlight>
          </View>
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
    alignItems: "center",
  },
  card: {
    backgroundColor: "yellow",
    marginTop: 10,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  mainText: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
  },
  trueButton: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 20,
    padding: 20,
    backgroundColor: "green",
  },
});
