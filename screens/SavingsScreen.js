import {React} from "react";
import { StyleSheet, Text, View } from 'react-native';

const savingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text styles={styles.title}>Fixed Deposit management</Text>
            <Text>Secure your savings and grow wealth with our fixed deposit solutions.</Text>
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
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });

export default savingsScreen;