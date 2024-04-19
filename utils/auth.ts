import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  FacebookAuthProvider,
  UserCredential,
} from "firebase/auth";

import { FireBaseAuth } from "./firebase";
import { transformGoogleUser, transformUserData } from "./helper";

const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

// const actionCodeSettings = {
//   url: webUrl,
//   handleCodeInApp: false,
// };

export type AuthResponse = {
  errorCode: string;
  data: any;
};

export const signInEmailPassword = async (email: string, password: string) => {
  let response: AuthResponse = {
    errorCode: "",
    data: null,
  };
  try {
    const signInResponse = await signInWithEmailAndPassword(
      FireBaseAuth,
      email,
      password
    );
    // console.log("signInResponse: ", signInResponse);
    const data = transformUserData(signInResponse);
    response = {
      errorCode: "",
      data,
    };
    return response;
  } catch (err: any) {
    const errorCode = translateErrorCode(err.code);
    response = {
      errorCode,
      data: null,
    };
    return response;
  }
};
export const signOutFirebase = async () => {
  try {
    await signOut(FireBaseAuth);
  } catch (err) {
    console.log("error", err);
  }
};

export const signInGoogle = async () => {
  let response: AuthResponse = {
    errorCode: "",
    data: null,
  };

  try {
    const signInResponse = await signInWithPopup(FireBaseAuth, GoogleProvider);
    const { user } = signInResponse;
    const data = transformGoogleUser(user);

    response = {
      errorCode: "",
      data,
    };
    return response;
  } catch (err: any) {
    const errorCode = translateErrorCode(err.code);
    response = {
      errorCode,
      data: null,
    };
    console.log("errorCode: ", errorCode);
    return response;
  }
};
export const signInFacebook = async () => {
  let response: AuthResponse = {
    errorCode: "",
    data: null,
  };

  try {
    const signInResponse: UserCredential = await signInWithPopup(
      FireBaseAuth,
      FacebookProvider
    );
    const { user } = signInResponse;
    // console.log("user: ", user);
    const data = transformGoogleUser(user);

    response = {
      errorCode: "",
      data,
    };
    return response;
  } catch (err: any) {
    const errorCode = translateErrorCode(err.code);
    response = {
      errorCode,
      data: null,
    };
    return response;
  }
};

// export const signUpEmailPassword = async (email: string, password: string) => {
//   let response: AuthResponse = {
//     errorCode: "",
//     data: null,
//   };
//   try {
//     const createResponse = await createUserWithEmailAndPassword(
//       FireBaseAuth,
//       email,
//       password
//     );
//     sendEmailVerification(createResponse.user, actionCodeSettings as any)
//       .then(() => {
//         console.log("Success");
//       })
//       .catch((err) => {
//         console.log("err: ", err);
//       });

//     response = {
//       errorCode: "",
//       data: createResponse.user,
//     };

//     return response;
//   } catch (err: any) {
//     const errorCode = translateErrorCode(err.code);

//     response = {
//       errorCode,
//       data: null,
//     };
//     return response;
//   }
// };

export const translateErrorCode = (errorCode: string): string => {
  switch (errorCode) {
    case "auth/invalid-email":
      return "Email không hợp lệ";
    case "auth/user-disabled":
      return "Tài khoản đã bị khóa";
    case "auth/wrong-password":
      return "Tài khoản/mật khẩu không đúng";
    case "auth/user-not-found":
      return "Tài khoản/mật khẩu không đúng";
    case "auth/weak-password":
      return "Weak password! Please use stronger password.";
    case "auth/email-already-in-use":
      return "Email đã được sử dụng";
    case "auth/account-exists-with-different-credential":
      return "Tài khoản email đã được sử dụng bởi một phương thức đăng nhập khác";
    default: {
      return "Đã có lỗi xảy ra";
    }
  }
};
