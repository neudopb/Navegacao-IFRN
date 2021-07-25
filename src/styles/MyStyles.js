import { StyleSheet, Platform } from 'react-native';

const MyStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2f9e41',
    },
    containerHome: {
        flex: 1,
        backgroundColor: '#2f9e41',
    },
    containerCurso: {
        flex: 1
    },
    imgCursos: {
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height: '100%',
    },
    imgBG: {
        justifyContent: 'space-around',
        width:'100%',
        height: '100%',
    },
    txtHome: {
        color: '#000',
        height: 120,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#97cea0c0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    descricao: {
        justifyContent: 'flex-end'
    }, 
    txtDesc: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'center',
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
    btn: {
        backgroundColor: '#2f9e41',
        width: 300,
        height: 50,
        margin: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtBtn: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 20
    },
    viewTxt: {
        width: '95%',
        height: '95%',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 15,
        justifyContent: 'space-evenly'
    },
    txtCursos: {
        fontSize: 15,
        color: '#000',
        textAlign: 'justify',
    },
    bold: {
        fontWeight: 'bold',
        lineHeight: 20
    },
    txtLink: {
        color: 'blue',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    redessociais: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 10
    },
    imgLogo: {
        width: '90%',
        height: 100,
    }
});

export default MyStyles;