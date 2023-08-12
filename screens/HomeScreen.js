import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import DressItems from "../components/DressItems";
const HomeScreen = () => {
  const [displayCurrentAddress, setdDisplayCurrentAddress] = useState(
    "we are loading your location"
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLoaction();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentLoaction = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();
    console.log(coords);

    if (coords) {
      const { latitude, longitude } = coords;
      // console.log(latitude)

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        // console.log(address)
        setdDisplayCurrentAddress(address);
      }
    }
  };




  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];
  return (
    <ScrollView style={{backgroundColor: '#F0F0F0'}}>
      {/* Location and Navbar */}
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 10}}>
      <MaterialIcons name="location-on" size={24} color="#fd5c63" />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>

        <Pressable style={{marginLeft: 'auto'}}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={{
              uri: "https://icons.iconarchive.com/icons/iconarchive/incognito-animals/512/Bear-Avatar-icon.png",
            }}
          />
        </Pressable>
      </View>


      {/* Search Bar */}
            <View style={{padding: 10, margin: 10, display: 'flex', alignContent: 'center', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.8, borderColor: 'C0C0C0', borderRadius: 7}}>
              <TextInput placeholder="Search for item or more"/>
              <Feather name="search" size={24} color="#fd5c63" />
            </View>


            {/* Carousel */}
            <Carousel />


            {/* Services */}
            <Services />


            {/* Render all the products */}
            {services.map((item, index) => (
              <DressItems key={index} item={item}/>
            ))}

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
