import { ReactNode } from 'react';
import type { Session, SupabaseClient } from '@supabase/supabase-js';

export interface AuthenticationProps {
  children?: ReactNode;
}

/**
 * Provides Supabase client and current auth session via React Context.
 */
export default function Authentication(props: AuthenticationProps): JSX.Element;

/** Return current Supabase auth session (or null when unauthenticated). */
export function useAuth(): Session | null;
/** Return the shared Supabase client instance. */
export function useSupabase(): SupabaseClient;
/** Login / logout form component wiring Supabase Auth UI. */
export function LoginForm(): JSX.Element;
