import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SignApp from "./SignApp/App.jsx";
import { SignHookYup } from "./SignHookYup/SignHookYup.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SignApp />
    <p style={{ textAlign: "center" }}>
      __________________________________________________________________
    </p>
    <SignHookYup />
  </StrictMode>
);
