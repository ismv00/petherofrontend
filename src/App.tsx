import background from "./assets/background.jpeg";
import "./styles/global.css";

import { RoutesFile } from "./routes";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <RoutesFile />
    </div>
  );
}

export default App;
