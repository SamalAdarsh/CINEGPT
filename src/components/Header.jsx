import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})

      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = ()=>{


    
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());

        navigate("/");
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black to-transparent z-50 flex justify-between">
      <img className="w-64" src={LOGO_URL} alt="logo" />

      {user && (
        <div className="flex p-2 items-center gap-2">

          <button className="bg-[#15997C] text-white px-4 py-2 rounded-lg font-bold mx-4 cursor-pointer" onClick={handleGptSearchClick}> GPT Search</button>
          <img
            className="w-12 h-12 rounded-lg"
            // src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            src={user?.photoURL}
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-bold cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
