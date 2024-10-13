import {react} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoansScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Loan Services </Text>
            <Text>Apply for loans and access credit efficiently through our secure platform.</Text>
        </View>
    ); 
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default LoansScreen;