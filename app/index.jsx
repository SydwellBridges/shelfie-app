import { StyleSheet, Text, View, Image } from 'react-native'
import {Link} from 'expo-router'
import Logo from '../assets/img/logo_light.png'
import React from 'react'

// themed view component
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'



const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20}/>

      <ThemedText style={styles.title} title={true}>
        The Number 1/10
      </ThemedText>

      <Spacer height={10}/>
        <ThemedText>Reading List App</ThemedText>
      <Spacer/>
      
      <Link href="/about" style={styles.link}>
       <ThemedText>About Page</ThemedText>
      </Link>
       
      <Link href="/contact" style={styles.link}> 
        <ThemedText>Contact Page</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,0.1)',
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})