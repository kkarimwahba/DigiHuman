import {
  AvatarCreator,
  AvatarCreatorConfig,
  AvatarExportedEvent,
} from "@readyplayerme/react-avatar-creator";
import { Avatar } from "@readyplayerme/visage";
import { useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner.tsx";
import React from "react";
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

  const handleOnAvatarExported = (event: AvatarExportedEvent) => {
    setAvatarUrl(event.data.url);
    console.log(event.data.url);
    const digi= event.data.url;
    console.log(digi);
  };

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
