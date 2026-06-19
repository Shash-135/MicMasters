import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

function printUsage() {
  console.log('Usage: node scripts/set-admin-claim.mjs --serviceAccount ./service-account.json --email admin@example.com');
  console.log('   or: node scripts/set-admin-claim.mjs --serviceAccount ./service-account.json --uid FIREBASE_UID');
}

function readArg(flag) {
  const index = process.argv.indexOf(flag);
  if (index === -1 || index + 1 >= process.argv.length) {
    return null;
  }

  return process.argv[index + 1];
}

async function main() {
  const serviceAccountArg = readArg('--serviceAccount');
  const email = readArg('--email');
  const uid = readArg('--uid');

  if (!serviceAccountArg || (!email && !uid)) {
    printUsage();
    process.exitCode = 1;
    return;
  }

  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const serviceAccountPath = path.isAbsolute(serviceAccountArg)
    ? serviceAccountArg
    : path.resolve(scriptDir, '..', serviceAccountArg);

  if (!fs.existsSync(serviceAccountPath)) {
    throw new Error(`Service account file not found: ${serviceAccountPath}`);
  }

  const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

  if (!getApps().length) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  const auth = getAuth();
  const user = email ? await auth.getUserByEmail(email) : await auth.getUser(uid);

  await auth.setCustomUserClaims(user.uid, { admin: true });

  console.log(`Admin claim applied to ${user.email || user.uid} (${user.uid})`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});