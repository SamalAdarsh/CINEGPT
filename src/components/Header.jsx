import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const ShowGptSearchButton = useSelector((store) => store.gpt.ShowGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})

      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageClick = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
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
    <div className="absolute w-full px-8 py-2 bg-linear-to-b from-black to-transparent z-50  flex flex-col md:flex-row justify-center md:justify-between ">
      <img className="w-46 md:w-54 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />

      {user && (
        <div className="flex p-2 justify-between md:items-center  gap-2">
          {ShowGptSearchButton && (
            <select
              className="bg-gray-500 text-white  w-38 h-12 md:w-24  p-2 m-2"
              onChange={handleLanguageClick}
            >
              {/* <option value="english">English</option>
             <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option> */}

              {SUPPORTED_LANGUAGE.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button
            className={
              "text-white w-28 h-12 md:w-auto py-1 md:px-4 md:py-2 rounded-lg font-bold mx-4 cursor-pointer " +
              (ShowGptSearchButton
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-[#15997C] hover:bg-[#128068]")
            }
            onClick={handleGptSearchClick}
          >
            {ShowGptSearchButton ? "Home" : "  GPT Search"}
          </button>
          <div>
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
        </div>
      )}
    </div>
  );
};

export default Header;
