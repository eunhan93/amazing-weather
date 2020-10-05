import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze : {
        iconName: "weather-hazy",
        gradient : ["#4da0b0", "#d39d38"]
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title:"흐림",
        subtitle:"오늘은 흐립니다"
    },
    Thunderstorm : {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"]
    },
    Drizzle : {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain : {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"]
    },
    Snow : {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"]
    },
    Atmosphere : {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear : {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"]
    },
    Mist : {
        iconName : "weather-cloudy",
        gradient : ["#4da0b0", "#d39d38"]
    },
    Dust : {
        iconName : "weather-cloudy",
        gradient : ["#4da0b0", "#d39d38"]
    }
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}
          >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"]).isRequired
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent : "center",
        alignItems:"center"
    },
    temp: {
        fontSize: 42,
        color: 'white'
    },
    halfContainer:{
        flex: 1,
        justifyContent : "center",
        alignItems:"center"
    },
    title:{
        color: 'white',
        fontSize : 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle : {
        color: 'white',
        fontWeight:"600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal : 20,
        alignItems: "flex-start"
    }
});