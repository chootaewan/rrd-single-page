import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Photo, Room, Rooms } from "./pages";

export default function App() { //라우트는 따로 파일로 만들어서 (Adonis에서 Route 한 것 처럼.) 관리하는게 편하다.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:roomId" element={<Room />}/>
      </Routes>
    </BrowserRouter>
  );
}
