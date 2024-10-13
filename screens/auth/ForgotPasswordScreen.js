import react, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';

const ForgotPasswordScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const handleForgotPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('Password reset email sent');     
        } catch (error) {
            setError('Error sending reset email');
        }
    };


    return (
        <View styles = {styles.container}>
            <Text style = {styles.title}>Forgot Password</Text>
            <TextInput
                style = {styles.input}
                placeholder = "Email"
                value = {email}
                onChangeText = {setEmail}
            />
            <Button
                title = "Send Reset Email"
                onPress = {handleForgotPassword}
            />
            {error && <Text style = {styles.error}>{error}</Text>}
            {message && <Text style = {styles.message}>{message}</Text>}
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


export default ForgotPasswordScreen;