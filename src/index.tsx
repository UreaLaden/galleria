import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PortraitContextProvider } from "./store/portraitContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <PortraitContextProvider>
    <App />
  </PortraitContextProvider>
);
