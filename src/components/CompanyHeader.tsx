import {StyleSheet, Text, View,Image} from 'react-native';

export default function CompanyHeader() {
    return (
        <View style={styles.header}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Programando tus sueños</Text>
        </View>
    );
}

const styles =StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    title: {
        marginTop: 16,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#444',
        textAlign: 'center',
    },
})
