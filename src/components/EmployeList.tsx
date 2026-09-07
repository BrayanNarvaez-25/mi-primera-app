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

export default function EmployeList(){
    return(
        <View>
            <Text> Directorio de Empleados</Text>
            <TextInput
                placeholder="Buscar Empleado..."
                placeholderTextColor= '#999'
            />
            <FlatList
                data={EMPLEADOS}
                keyExtractor={(item)=> item.id}
                renderItem={({item})=>(

                    <View>
                        <ProfileCard
                            nombres={item.nombre}
                            cargo={item.cargo}
                            imagen={{uri: item.fotoUrl}}
                        />
                    </View>

                )}
            />
        </View>
    )
}