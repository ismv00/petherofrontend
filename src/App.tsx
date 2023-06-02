import background from "./assets/background.jpeg";
import "./styles/global.css";

import { RoutesFile } from "./routes";

function App() {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
      className="w-screen h-screen min-h-screen flex items-center justify-center bg-slate-200"
    >
      <RoutesFile />
    </div>
  );
}

export default App;
