import react, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { auth } from '../../firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 

const LoginScreen = ({navigation}) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

const handleLogin = async () => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate('Home');    // navigate to HomeScreen on successful login 
    } catch (error) {
        setError('invalid email or password');
    };
};

return (
    <view style={styles.container}>
        <Text style={styles.title}>Login</Text>
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
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />

        <Button title="Login" onPress={handleLogin} />
        <Button title="Register" onPress={() => navigation.navigate('Register')} />
        <Button title="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />    
    </view>
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
        marginBottom: 20,
    },

    input: {
        width: '100%',
        padding : 10,
        marginBottom: 20,
        borderWidth: 1,
    },

    error: {
        color: 'red',
        marginBottom: 20,
    },
});



export default LoginScreen;