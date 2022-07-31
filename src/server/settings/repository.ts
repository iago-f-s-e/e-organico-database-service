const REPOSITORY_USER = process.env.REPOSITORY_USER || 'user';
const REPOSITORY_PASS = process.env.REPOSITORY_PASS || 'password';
const REPOSITORY_DOMAIN = process.env.REPOSITORY_DOMAIN || 'domain.com';
const REPOSITORY_PROFILE = process.env.REPOSITORY_PROFILE || 'profile';
const REPOSITORY_DIRECTORY = process.env.REPOSITORY_DIRECTORY || 'directory';

export const REPOSITORY_LOCATION = `https://${REPOSITORY_USER}:${REPOSITORY_PASS}@${REPOSITORY_DOMAIN}/${REPOSITORY_PROFILE}/${REPOSITORY_DIRECTORY}`;