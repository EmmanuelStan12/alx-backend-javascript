import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};

  try {
    const [photo, user] = Promise.all([uploadPhoto(), createUser()]);
    result = { photo, user };
  } catch (e) {
    result = { photo: null, user: null };
  }
  return result;
}
