import { Route, Routes } from "react-router-dom"
import { CartasPage } from "../Pages/CartasPage"


export const RoutesPages = () => {
  return (
    <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/Cartas" element={<CartasPage/>} />
    </Routes>
  )
}
