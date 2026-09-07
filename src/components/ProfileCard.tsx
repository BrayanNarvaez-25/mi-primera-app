import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageSourcePropType
} from "react-native";

interface ProfileCardProps {
    nombres: string;
    cargo: string;
    imagen: ImageSourcePropType;
}

export default function ProfileCard(props: ProfileCardProps) {

    const { nombres, cargo, imagen } = props;

    return (
        <View style={styles.card}>

            <Image
                style={styles.profileImage}
                source={imagen}
            />

            <Text style={styles.title}>
                {nombres}
            </Text>

            <Text style={styles.subtitle}>
                {cargo}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#151515',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',

        borderWidth: 1,
        borderColor: '#222222',

        elevation: 5,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 12,

        borderWidth: 2,
        borderColor: '#00E676',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4,
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 15,
        color: '#00E676',
        textAlign: 'center',
    },
});