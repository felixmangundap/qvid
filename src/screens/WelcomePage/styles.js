import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#04242E',
    },
    titleContainer: {
        left: 30
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 5
    },
    subtitle: {
        color: 'white',
        marginBottom: 10
    },
    logo: {
        flex: 1,
        height: 120,
        width: 120,
        resizeMode: 'contain',
        alignSelf: "baseline",
        marginTop: 10,
        left: 30
    },
    phone: {
        height: 250,
        width: 250,
        resizeMode: 'contain',
        margin: 30,
        alignSelf: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#43C9A8',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonWhite: {
        backgroundColor: 'white',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    buttonTitleGreen: {
        color: '#43C9A8',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: 'white'
    },
    footerLink: {
        color: 'rgb(74,219,182)',
        fontWeight: "bold",
        fontSize: 16
    },
    wave: {
        bottom: 115,
        zIndex: -1
    }
})