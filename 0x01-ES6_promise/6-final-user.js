import uploadPhoto from "./5-photo-reject";
import signUpUser from "./4-user-promise";

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName
) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((res) =>
    res.map((obj) => ({
      status: obj.status,
      value: obj.status === "fulfilled" ? obj.value : String(obj.reason),
    }))
  );
}
