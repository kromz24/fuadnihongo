// src/hooks/useAuth.ts
import { useState, useEffect, useRef } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../services/supabaseClient';
import { readLocalProgress, writeLocalProgress, pullProgress, mergeProgress } from '../services/progressSync';

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const hasAutoSyncedRef = useRef(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      setSession(newSession);

      // Begitu user login, otomatis tarik progres dari cloud & gabungkan
      // dengan progres lokal (device ini), supaya nggak ada data yang hilang.
      if (event === 'SIGNED_IN' && newSession?.user && !hasAutoSyncedRef.current) {
        hasAutoSyncedRef.current = true;
        const remote = await pullProgress(newSession.user.id);
        if (remote) {
          const local = readLocalProgress();
          writeLocalProgress(mergeProgress(local, remote));
        }
      }
      if (event === 'SIGNED_OUT') {
        hasAutoSyncedRef.current = false;
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    return supabase.auth.signUp({ email, password });
  };

  const signIn = async (email: string, password: string) => {
    return supabase.auth.signInWithPassword({ email, password });
  };

  const signOut = async () => {
    return supabase.auth.signOut();
  };

  return { session, user: session?.user ?? null, loading, signUp, signIn, signOut };
};
