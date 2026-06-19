import type { User } from 'firebase/auth';

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function getConfiguredAdminEmails(): string[] {
  const raw = import.meta.env.VITE_ADMIN_EMAILS || '';
  return raw
    .split(',')
    .map((email: string) => normalizeEmail(email))
    .filter(Boolean);
}

export async function isAdminUser(user: User): Promise<boolean> {
  const tokenResult = await user.getIdTokenResult();
  const hasAdminClaim = tokenResult.claims.admin === true || tokenResult.claims.role === 'admin';
  if (hasAdminClaim) {
    return true;
  }

  const refreshedTokenResult = await user.getIdTokenResult(true);
  const hasRefreshedAdminClaim = refreshedTokenResult.claims.admin === true || refreshedTokenResult.claims.role === 'admin';
  if (hasRefreshedAdminClaim) {
    return true;
  }

  const adminEmails = getConfiguredAdminEmails();
  if (!user.email || adminEmails.length === 0) {
    return false;
  }

  return adminEmails.includes(normalizeEmail(user.email));
}