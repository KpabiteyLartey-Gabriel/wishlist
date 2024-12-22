import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter, useSegments } from 'expo-router';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (!user && !inAuthGroup) {
      // Redirect to login if user is not authenticated
      router.replace('/login');
    } else if (user && inAuthGroup) {
      // Redirect to home if user is authenticated and trying to access auth screens
      router.replace('/');
    }
  }, [user, loading, segments]);

  if (loading) {
    return null; // Or a loading spinner
  }

  return <>{children}</>;
} 