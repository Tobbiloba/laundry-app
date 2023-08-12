import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const DressItems = ({ item }) => {
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: "#F8F8F8",
          borderRadius: 8,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 14,
        }}
      >
        <View>
          <Image
            source={{ uri: item.image }}
            style={{ width: 70, height: 70 }}
          />
        </View>
        <View>
          <Text style={{width: 83, height: 17, fontWeight: '500', marginBottom:7}}>{item.name}</Text>
          <Text style={{width: 60, color: 'gray', fontSize:15 }}>{item.price}</Text>
        </View>
        <Pressable style={{ width: 80, borderRadius: 6 }}>
          <Text
            style={{
              borderColor: "gray",
              borderRadius: 4,
              borderWidth: 0.8,
              marginVertical: 10,
              color: "#088F8F",
              textAlign: "center",
              padding: 5,
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            add
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default DressItems;

const styles = StyleSheet.create({});
