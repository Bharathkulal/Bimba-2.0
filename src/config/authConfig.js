/**
 * BIMBA AI 2.0 — Demo Authentication Configuration
 * ------------------------------------------------
 * IMPORTANT: This is for initial development and interactive demo evaluation.
 * Do not use hardcoded credentials in production environments.
 * This module isolates authentication so it can be seamlessly swapped
 * with the real backend API (POST /api/v1/auth/login) in later phases.
 */

export const DEMO_CREDENTIALS = {
  username: 'admin',
  password: 'Bimba@123',
  userProfile: {
    name: 'Admin Student',
    role: 'Student Candidate',
    college: 'Dr. B. B. Hegde First Grade College, Kundapura',
    email: 'admin@bimba.ai',
    avatar: 'A',
    program: 'BCA AI & ML',
    batch: '2026',
    atsScore: 94,
  },
};

const SESSION_KEY = 'bimba_auth_session';

/**
 * Validates credentials against demo configuration.
 * Returns a Promise that resolves with user data or rejects with an error message.
 */
export async function authenticateDemo(username, password) {
  // Simulate network/validation delay for professional UX feel
  await new Promise((resolve) => setTimeout(resolve, 800));

  const trimmedUser = (username || '').trim();
  const trimmedPass = (password || '').trim();

  if (!trimmedUser || !trimmedPass) {
    throw new Error('Please enter both username and password.');
  }

  const isUserMatch =
    trimmedUser.toLowerCase() === DEMO_CREDENTIALS.username.toLowerCase() ||
    trimmedUser.toLowerCase() === DEMO_CREDENTIALS.userProfile.email.toLowerCase();

  const isPassMatch = trimmedPass === DEMO_CREDENTIALS.password;

  if (isUserMatch && isPassMatch) {
    return {
      authenticated: true,
      user: DEMO_CREDENTIALS.userProfile,
      token: 'demo-jwt-token-bimba-2026',
      timestamp: new Date().toISOString(),
    };
  }

  throw new Error('Invalid username or password. Please verify your credentials.');
}

export function saveSession(authData, rememberMe = true) {
  try {
    const dataStr = JSON.stringify(authData);
    if (rememberMe) {
      localStorage.setItem(SESSION_KEY, dataStr);
    } else {
      sessionStorage.setItem(SESSION_KEY, dataStr);
    }
  } catch (err) {
    console.warn('Session storage error:', err);
  }
}

export function getSession() {
  try {
    const local = localStorage.getItem(SESSION_KEY);
    if (local) return JSON.parse(local);
    const session = sessionStorage.getItem(SESSION_KEY);
    if (session) return JSON.parse(session);
  } catch (err) {
    console.warn('Session retrieval error:', err);
  }
  return null;
}

export function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
  } catch (err) {
    console.warn('Session clearing error:', err);
  }
}
