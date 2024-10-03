import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((promises) => (
      promises.map((promise) => ({
        status: promise.status,
        value: promise.status === 'fulfilled' ? promise.value : String(promise.reason),
      }))
    ));
}
