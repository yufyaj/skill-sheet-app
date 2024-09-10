import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "~/lib/firebaseConfig";
import ActiveNavLink from "./elements/ActiveNavLink";

export default function Sidebar() {
  const [user, setUser] = useState<User | null>(null);
  /* 次回レンダリングのテストから試す */

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      const res = await fetch("/signout", {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("something went wrong");
      }
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };
  return (
    <nav className="bg-secondary p-8 h-screen">
      <h1 className="font-bold text-5xl">Skill Sheet</h1>
      <div className="font-bold flex flex-col items-end mt-20 space-y-12">
        <ActiveNavLink to="/resume" value="経歴書" />
        <ActiveNavLink to="/profile" value="プロフィール" />
        <ActiveNavLink to="/share" value="共有" />
        {user ? (
          <div>
            <p>Welcome, {user.displayName}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={handleGoogleLogin}>Sign in with Google</button>
        )}
      </div>
    </nav>
  );
}
