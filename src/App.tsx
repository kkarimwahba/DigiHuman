import {
  AvatarCreator,
  AvatarCreatorConfig,
  AvatarExportedEvent,
} from "@readyplayerme/react-avatar-creator";
import { Avatar } from "@readyplayerme/visage";
import { useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner.tsx";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, updateDoc,doc} from "firebase/firestore";
import { auth, firestore } from './firebase';

const config: AvatarCreatorConfig = {
  clearCache: true,
  bodyType: "fullbody",
  quickStart: false,
  language: "en",
};

const style = { width: "100%", height: "100vh", border: "none", margin: 0 };

const App: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const user = auth.currentUser;
  

  const handleOnAvatarExported = async (event: AvatarExportedEvent) => {
    setAvatarUrl(event.data.url);
    console.log(event.data.url);
    const digi= event.data.url;
    console.log(digi);
  //   if(user){
  //     const userEmail = user.email;
  //     const userRef = query(collection(firestore, "users"), where("email", "==", userEmail));
  //     const findUsers = await getDocs(userRef);
  //     findUsers.forEach( async (user) => {
  //      const getUser = doc(firestore, 'users', user.id);
  //      await updateDoc(getUser, {
  //       avatar:avatarUrl
  //      });
  //     });
  // }
}



  if (avatarUrl) {
    return (
      <>
        <Avatar
          modelSrc={avatarUrl}
          style={style}
          onLoaded={() => setIsLoading(false)}
        />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <button
            onClick={() => {
              setAvatarUrl(undefined);
              setIsLoading(true);
            }}
          >
            Create new avatar
          </button>
        )}
      </>
    );
  }

  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <AvatarCreator
        subdomain="digital-human-86fwuj"
        config={config}
        style={{ display: avatarUrl ? "none" : "inherit", ...style }}
        onAvatarExported={handleOnAvatarExported}
      />
    
    </div>    
  );
  
}


  

export default App;
