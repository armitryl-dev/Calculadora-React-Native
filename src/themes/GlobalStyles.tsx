import { StyleSheet } from 'react-native';


export const GlobalStyles = StyleSheet.create({

    pantallaPrincipal: {
        fontSize: 70,
        fontFamily: 'pixel',
        textAlign: 'right',
        fontWeight: 400,
        width: '90%'
    },

    pantalla2: {
        fontSize: 40,
        fontFamily: 'pixel',
        textAlign: 'right',
        fontWeight: 400,
        width: '90%'
    },

    botonOperador: {
        fontFamily: 'pixelButtonFont',
        width: 80,
        backgroundColor: '#527c50',
        textAlign: 'center',
        padding: 10,
        fontSize: 50,
        fontWeight: 300,
        borderWidth: 2,
        borderColor: '#2C602A',
        borderRadius: 20,
        elevation: 10,
        marginEnd: 2,
        marginStart: 2,
    },

    botonNumero: {
        fontFamily: 'pixelButtonFont',
        width: 80,
        backgroundColor: '#586158',
        textAlign: 'center',
        padding: 10,
        fontSize: 50,
        fontWeight: 300,
        borderWidth: 2,
        borderColor: '#202920',
        borderRadius: 20,
        elevation: 10,
    },

    botonDemas: {
        fontFamily: 'pixelButtonFont',
        width: 80,
        backgroundColor: '#2d692d',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 10,
        fontSize: 40,
        paddingBottom: 20,
        fontWeight: 300,
        borderWidth: 2,
        borderColor: '#2C602A',
        borderRadius: 20,
        elevation: 10,
        marginEnd: 2,
        marginStart: 2,
    },

    container: {
        flex: 1,
        backgroundColor: '#7DCA79',
        alignItems:  'center',
        justifyContent: 'flex-end',
        paddingBottom:20,
    },

    fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:16,
        paddingHorizontal:10,
        width: '100%',
    },

});