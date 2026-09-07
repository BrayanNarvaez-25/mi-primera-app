import { StyleSheet,Text,View,Image,ImageSourcePropType } from "react-native";

interface ProfileCardProps{
    nombres: string,
    cargo: string,
    imagen: ImageSourcePropType;
}

export default function ProfileCard(props: ProfileCardProps){

    const {nombres,cargo,imagen} = props

    return(
        <View style={styles.card}>
            <Image
                style={styles.profileImage}
                source={imagen}
            />
            <Text style={styles.title}> {nombres} </Text>
            <Text style={styles.subtitle}> {cargo} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000', textShadowOffset: {width: 0,
        height: 2},shadowOpacity: 0.25, shadowRadius: 3.84
    },
    profileImage: {width: 100, height: 100, borderRadius: 50,
    marginBottom: 10},
    title:{fontSize: 24, fontWeight: 'bold'},
    subtitle: {fontSize: 16, color: 'gray'}
})