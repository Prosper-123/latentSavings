import {react} from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import LoanCalculator from '../components/LoanCalculator';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>welcome to latentSavings Application</Text>
           

        <Button
        title= "Access Loans"
        onPress={() => navigation.navigate('Loans')}    
        />   

        <Button
        title = "Fixed Deposits"
        onPress={() => navigation.navigate('Savings')}
        />

        <LoanCalculator/>
        
         </View>
        
    );
}


const styles = StyleSheet.create({ 
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        margin: 40,
    },

    title : {
        fontSize: 24,
        fontWeight: 'bold',
        margin : 40,
    },

    Button : {
        fontSize: 24,
        fontWeight: 'bold',
        margin : 40,
    }
});


export default HomeScreen;