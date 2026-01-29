import { View, Text, StyleSheet,Pressable } from 'react-native';
import {useState} from "react";

export default function MagicColor() {
    const [backColor, setbackColor] = useState('#FFFFFF');
    const { random, floor } = Math;

    let generateColor = 0;
    let hexadecimalCharacters = '0123456789ABCDEF';
    
    const handlePress = () => {
    let simbolo = '#';
    for (let i = 0; i < 6; i++) {
        generateColor = floor(random() * 16);
        simbolo += hexadecimalCharacters.charAt(generateColor);
    }
    setbackColor(simbolo);
    }
    

    return (
        <View style={{flex: 1, backgroundColor: backColor}}>
            <Pressable onPress={handlePress} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: '#FFFFFF'}}>Press Me!</Text>
            </Pressable>
        </View>

        
    )



}