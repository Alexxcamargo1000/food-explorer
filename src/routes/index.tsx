import { BrowserRouter, Routes } from "react-router-dom";
import { AppRouter } from "./AppRouter";

export function Route() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}
