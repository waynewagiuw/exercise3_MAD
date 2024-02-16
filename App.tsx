import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan username anda"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan password anda"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <View style={styles.signInButtonContainer}>
          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 30, 
    alignItems: 'flex-start',
  },
  header: {
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold', 
    color: 'black', 
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold', 
  },
  input: {
    width: '100%', 
    height: 55,
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius: 7,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  signInButtonContainer: {
    width: '100%', 
    alignItems: 'center', 
  },
  signInButton: {
    backgroundColor: '#ff6600',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 35,
    alignItems: 'center',
    width: '100%', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
