import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useAuth } from '../../src/context/AuthContext';
import { Link } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View className="flex-1 justify-center p-6 bg-white">
      <Text className="text-3xl font-bold mb-6 text-center">Welcome Back</Text>
      
      <TextInput
        className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      
      <TextInput
        className="w-full p-4 border border-gray-300 rounded-lg mb-6"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity
        className="w-full bg-blue-500 p-4 rounded-lg mb-4"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-bold">Sign In</Text>
      </TouchableOpacity>
      
      <Link href="/signup" asChild>
        <TouchableOpacity>
          <Text className="text-blue-500 text-center">
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
} 