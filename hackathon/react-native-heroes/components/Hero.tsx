import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Modal,
} from "react-native";
import { Colors } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import Box from "./Box";
import { Upvote } from "./Upvote";

type HeroProps = {
  item: {
    id: string;
    avatar_url: string;
    full_name: string;
    github_username: string;
    twitter_username: string;
    counter: string;
  };
};

export const Hero = (hero: HeroProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => toggleModal()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{hero.item.full_name}</Text>
            <Image
              source={{ uri: hero.item.avatar_url }}
              style={{
                width: 200,
                height: 200,
                borderRadius: 10,
                borderWidth: 1,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <Text>Description </Text>
            <TouchableOpacity onPress={() => toggleModal()}>
              <AntDesign name="closecircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => toggleModal()}>
        <Image
          source={{ uri: hero.item.avatar_url }}
          style={{ width: 100, height: 100, borderRadius: 10, borderWidth: 1 }}
        />
      </TouchableOpacity>
      <View style={styles.middle}>
        <Text style={styles.text}>{hero.item.full_name}</Text>
        <Box flexDirection="row" justifyContent="space-around" p="m">
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL("https://github.com/" + hero.item.github_username)
            }
          >
            <Text>Github</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL(
                "https://twitter.com/" + hero.item.twitter_username
              )
            }
          >
            <Text>Twitter</Text>
          </TouchableOpacity>
        </Box>
      </View>
      <Box ml="m">
        <Upvote idHero={hero.item.id} heroCounter={hero.item.counter} />
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "white",
    width: "95%",
    flexDirection: "row",
    backgroundColor: Colors.yellow900,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: "2,5%",
  },
  button: {
    backgroundColor: Colors.grey100,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  vote: {
    backgroundColor: Colors.grey100,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    marginHorizontal: 10,
    padding: 8,
    alignItems: "center",
  },
  middle: {
    flex: 1,
    width: "55%",
  },
  text: {
    fontWeight: "bold",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    width: "80%",
    height: "45%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "space-around",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalText: {
    marginBottom: 15,
    paddingTop: 10,
    textAlign: "center",
  },
  buttonModal: {
    backgroundColor: Colors.grey100,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
});