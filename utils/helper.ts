import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { jwtDecode } from "jwt-decode";
import { UserData } from "types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const transformUserData = (userCredential: any): UserData => {
  const userData = {} as UserData;
  const user = userCredential.user;
  const { accessToken, emailVerified, refreshToken } = user;
  const tokenDecoded: any = jwtDecode(accessToken);

  userData.id = user.uid;
  userData.userName = user.displayName || user.email || "Untitled";
  userData.avatar = user.photoURL || "";
  userData.exp = tokenDecoded.exp || "";
  userData.email = user.email || "";
  userData.emailVerified = emailVerified || false;
  userData.accessToken = accessToken || "";
  userData.refreshToken = refreshToken || "";

  return userData;
};
const transformGoogleUser = (userCredential: any): UserData => {
  const userData = {} as UserData;
  const accessToken = userCredential.accessToken;
  const refreshToken = userCredential.stsTokenManager.refreshToken;
  const tokenDecoded: any = jwtDecode(userCredential.accessToken);

  userData.id = userCredential.uid;
  userData.userName =
    userCredential.displayName || userCredential.email || "Untitled";
  userData.avatar = userCredential.photoURL || "";
  userData.exp = tokenDecoded.exp || "";
  userData.email = userCredential.email || "";
  userData.emailVerified = userCredential.emailVerified || false;
  userData.accessToken = accessToken || "";
  userData.refreshToken = refreshToken;

  return userData;
};

export { transformGoogleUser, transformUserData };
