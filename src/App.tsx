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
      }}
      className="w-auto min-h-screen items-center flex justify-center"
    >
      <RoutesFile />
    </div>
  );
}

export default App;
