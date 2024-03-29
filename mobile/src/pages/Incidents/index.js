import React, {useState, useEffect} from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {

    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false); //salva o estado, se os casos ja estao sendo carregados

    function navigateToDetail(incident){
        navigation.navigate('Detail', {incident}); //name
    }

    async function loadIncidents(){

        if(loading)
            return;
        
        //evita recarregar caso o numero de casos ja seja o total que cabe
        if(total > 0 && incidents.length == total )
            return;
            
        setLoading(true);

        const response = await api.get('incidents', {
            params: {page} //passa a paginação
        });
        setIncidents([...incidents, ...response.data]);//permite concatenar os valores do array ja existentes com os novos
        setTotal(response.headers['x-total-count']);

        setPage(page + 1);
        setLoading(false);
    }

    useEffect(()=>{
        loadIncidents();
    },[]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text> 


            <FlatList
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={true}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item: incident}) =>(
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>
    
                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>
    
                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(incident.value)}</Text>
    
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}