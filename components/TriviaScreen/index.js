import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { decode } from "html-entities";
import { ADD_QUESTION } from "../../redux/actionTypes";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

export default function TriviaScreen({ navigation }) {
  const [counter, setCounter] = useState(0);
  const [questions, setQuestions] = useState(false);
  const dispatch = useDispatch();

  const pressed = (option) => {
    dispatch({
      type: ADD_QUESTION,
      payload: { question: questions.results[counter], answer: option },
    });

    if (counter === 9) navigation.replace("Results");
    setCounter(counter + 1);
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      );

      const questions = await response.json();
      setQuestions(questions);
    };

    fetchQuestions();
  }, []);

  return (
    <ImageBackground
      source={require("../..//assets/background2.jpg")}
      style={styles.image}
    >
      {questions ? (
        <>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              alignContent: "center",
              width: "90%",
            }}
          >
            <View style={styles.card}>
              <Text style={styles.mainText}>
                {questions.results && questions.results[counter].category}
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.mainText}>
                {questions.results &&
                  decode(questions.results[counter].question)}
              </Text>
            </View>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              {counter + 1} of 10
            </Text>
            <View style={{ alignItems: "center" }}>
              <View style={styles.buttons}>
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  onPress={() => pressed("True")}
                >
                  <Text style={styles.trueButton}>True</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  onPress={() => pressed("False")}
                >
                  <Text style={styles.falseButton}>False</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </>
      ) : (
        <Text style={styles.falseButton}>Loading</Text>
      )}
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
    alignItems: "center",
    backgroundColor: "yellow",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
  },
  trueButton: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
    padding: 20,
    backgroundColor: "green",
  },
  falseButton: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
    padding: 20,
    backgroundColor: "red",
  },
});
