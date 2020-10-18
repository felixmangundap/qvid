import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#04242E',
        flex: 1,
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'red',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    wave: {
        width: '100%',
        position: 'absolute',
        top: 80,
        left: 0
    },
    logo: {
        position: 'absolute',
        top: 50,
        left: 12,
        justifyContent: 'center',
        paddingLeft: 100,
        width: 45, 
        height: 30,
        resizeMode: 'contain'
    },
    homeContainer: {
        position: 'absolute',
        borderRadius: 35 ,
        top: 250,
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        bottom: 0
    },
    heading: {
        left: 25,
        top: 120,
        zIndex: 1
    },
    title: {
        margin: 25,
        fontSize: 24,
        fontWeight: 'bold'
    }
})
