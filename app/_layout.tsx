import { Stack } from 'expo-router';
import { AuthProvider } from '../src/context/AuthContext';
import { AuthGuard } from '../src/components/AuthGuard';

export default function RootLayout() {
  return (
    <AuthProvider>
      <AuthGuard>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </AuthGuard>
    </AuthProvider>
  );
} 