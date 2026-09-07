import { StyleSheet,Text,View,TextInput, FlatList } from "react-native";
import ProfileCard from "./ProfileCard";

const EMPLEADOS = [
    {
        id: '1', nombre: 'Brayan Narváez', cargo: 'Informático',fotoUrl:'https://img.magnific.com/vector-gratis/hacker-que-opera-ilustracion-icono-historieta-ordenador-portatil-concepto-icono-tecnologia-aislado-estilo-dibujos-animados-plana_138676-2387.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
        id: '2', nombre: 'Daniela Romo', cargo: 'Informática',fotoUrl:'https://img.magnific.com/vector-gratis/hacker-que-opera-ilustracion-icono-historieta-ordenador-portatil-concepto-icono-tecnologia-aislado-estilo-dibujos-animados-plana_138676-2387.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
        id: '3', nombre: 'Carolina Arco', cargo: 'Informática',fotoUrl:'https://img.magnific.com/vector-gratis/hacker-que-opera-ilustracion-icono-historieta-ordenador-portatil-concepto-icono-tecnologia-aislado-estilo-dibujos-animados-plana_138676-2387.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
        id: '4', nombre: 'Steven Aguirre', cargo: 'Informático',fotoUrl:'https://img.magnific.com/vector-gratis/hacker-que-opera-ilustracion-icono-historieta-ordenador-portatil-concepto-icono-tecnologia-aislado-estilo-dibujos-animados-plana_138676-2387.jpg?semt=ais_hybrid&w=740&q=80'
    },
];

export default function EmployeList() {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Directorio de Empleados
            </Text>

            <TextInput
                style={styles.search}
                placeholder="Buscar Empleado..."
                placeholderTextColor="#777"
            />

            <FlatList
                data={EMPLEADOS}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View>
                        <ProfileCard
                            nombres={item.nombre}
                            cargo={item.cargo}
                            imagen={{ uri: item.fotoUrl }}
                        />
                    </View>
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0A0A',
        paddingHorizontal: 16,
        paddingTop: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 15,
    },

    search: {
        height: 48,
        backgroundColor: '#151515',
        borderRadius: 12,
        paddingHorizontal: 16,
        color: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#00E676',
        marginBottom: 15,
    }
});