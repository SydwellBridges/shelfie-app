import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import  { Colors } from '../../constants/Colors'

// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {

    const handleSubmit = () => {
        console.log('Register button pressed')
        // Here you would typically handle form validation and authentication logic
    }

    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register Account
            </ThemedText>

            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: '#f2f2f2' }}>
                    Register
                </Text>
            </ThemedButton>

            <Spacer height={100} />
            <Link href="/login">
                <ThemedText style={{ textAlign: 'center' }}>
                    Login to an existing account
                </ThemedText>
            </Link>

        </ThemedView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8
    },
})