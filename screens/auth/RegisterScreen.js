import react, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigation.navigate('Login');
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            {error && <Text style={styles.error}>{error}</Text>}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Register" onPress={handleRegister} />
            <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    input: {
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
    },
    error: {
        color: 'red',
        marginBottom: 20,
    },
});

export default RegisterScreen;