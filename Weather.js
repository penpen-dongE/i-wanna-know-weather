import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar, TextComponent } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"]
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"]
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    }
};
export default function Weather ({temp, condition}) {
    return (
  
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName} 
                    color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfcontainer, ...styles.TextContainer}}>
                <View></View>
                <Text style = {styles.title}>{weatherOptions[condition].title}</Text>
                <Text style = {styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>

        </LinearGradient>
       
    );  
} 

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color:"white",
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
    },
    TextContainer: {
        paddingHorizontal:20,
        alignItems: "flex-start"
    }
});
