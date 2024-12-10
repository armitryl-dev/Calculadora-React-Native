import { Pressable, Text } from "react-native";
import * as Haptics from 'expo-haptics';
import { GlobalStyles } from "../themes/GlobalStyles";
import { Audio } from 'expo-av';
import React from "react";

interface Props {
    label: string,
    tipo: 'botonOperador' | 'botonNumero' | 'botonDemas',
    width: number,
    onPress?: () => void;
}

export const BotonOperacion = ({label, tipo = 'botonNumero',width, onPress}:Props) => {
    
    
    
    const [sound, setSound] = React.useState<Audio.Sound | null>(null);

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/sounds/retro-coin-4-236671.mp3')
        );
        setSound(sound);
        await sound.playAsync();
    };

    const handlePress = () => {
        if (onPress) {
            onPress();
        }
        Haptics.selectionAsync();
        playSound();
}  

    return (
        <Pressable>
            <Text 
                style={[
                    tipo === 'botonNumero' ? GlobalStyles.botonNumero :null,
                    tipo === 'botonOperador' ? GlobalStyles.botonOperador :null,
                    tipo === 'botonDemas' ? GlobalStyles.botonDemas :null,
                    {width}
                ]
            }
                onPress={handlePress}>{label}</Text>
        </Pressable>
    )
};
