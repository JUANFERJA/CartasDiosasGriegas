import { BrowserRouter, Route } from "react-router-dom";
import { RoutesPages } from "./Routes/RoutesPages";

function App() {
  return (
   <BrowserRouter>
    <RoutesPages />
   </BrowserRouter>
  );
}

export default App;
