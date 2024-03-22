import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Excalidraw, LiveCollaborationTrigger,  } from "@excalidraw/excalidraw";
import { defaultLang } from "@excalidraw/excalidraw";


function App() {
 
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [isCollaborating, setIsCollaborating] = useState(false);

  defaultLang.code = "es-ES";
  defaultLang.label = "Español";
  
  
  return (
    <>
     <div className="app-container">
      <div className="excalidraw-container">  
        <label style={{ fontSize: "16px", fontWeight: "bold" }}>
          <input
            type="checkbox"
            checked={isCollaborating}
            onChange={() => {
              if (!isCollaborating) {
                const collaborators = new Map();
                collaborators.set("id1", {
                  username: "Doremon",
                  avatarUrl: "../../../../img/doremon.png",
                });
                collaborators.set("id3", {
                  username: "Pika",
                  avatarUrl: "../../../../img/pika.jpeg",
                });
                excalidrawAPI.updateScene({ collaborators });
              } else {
                excalidrawAPI.updateScene({
                  collaborators: new Map(),
                });
              }
              setIsCollaborating(!isCollaborating);
            }}
          />
          Show Collaborators
        </label>
        <Excalidraw
          ref={(api) => setExcalidrawAPI(api)}
          renderTopRightUI={() => (
            <LiveCollaborationTrigger
              isCollaborating={isCollaborating}
              onSelect={() => {
                window.alert("You clicked on collab button");
                setIsCollaborating(true);
              }}
            />
          )}
        />
      </div>
    </div>
    </>
  )
}

export default App
