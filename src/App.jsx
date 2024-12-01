import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./firebase/firebase.init";
import "./App.css";
import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const provider = new GoogleAuthProvider();
  const handleSignInGoogle = async () => {
    try {
      const popup = await signInWithPopup(auth, provider);
      const res = await popup;
      setUserInfo(res.user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <button
        className="bg-red-400 px-6 py-1 rounded-xl text-2xl font-bold"
        onClick={handleSignInGoogle}
      >
        Login with google
      </button>

      <div className="mt-5 shadow-md rounded-lg w-5/12 mx-auto p-3 flex flex-col items-center justify-center space-y-3">
        <img
          className="rounded-full h-[100px]"
          src={
            userInfo
              ? userInfo.photoURL
              : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-business-user-profile-vector-png-image_1541960.jpg"
          }
          alt=""
        />
        <h1 className="text-xl font-bold">
          {userInfo ? userInfo.displayName : "UserName"}
        </h1>
        <p>{userInfo ? userInfo.email : "email"}</p>
      </div>
    </>
  );
}

export default App;
