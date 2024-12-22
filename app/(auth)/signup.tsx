import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { useAuth } from '../../src/context/AuthContext';
import { Link, router } from 'expo-router';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      await signUp(email, password);
      Alert.alert(
        'Success',
        'Please check your email for verification',
        [{ text: 'OK', onPress: () => router.push('/login') }]
      );
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center p-6 bg-white">
      <Text className="text-3xl font-bold mb-6 text-center">Create Account</Text>
      
      <TextInput
        className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        editable={!loading}
      />
      
      <TextInput
        className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={!loading}
      />

      <TextInput
        className="w-full p-4 border border-gray-300 rounded-lg mb-6"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        editable={!loading}
      />
      
      <TouchableOpacity
        className={`w-full p-4 rounded-lg mb-4 ${
          loading ? 'bg-blue-300' : 'bg-blue-500'
        }`}
        onPress={handleSignUp}
        disabled={loading}
      >
        <Text className="text-white text-center font-bold">
          {loading ? 'Creating Account...' : 'Sign Up'}
        </Text>
      </TouchableOpacity>
      
      <Link href="/login" asChild>
        <TouchableOpacity>
          <Text className="text-blue-500 text-center">
            Already have an account? Sign in
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
} 