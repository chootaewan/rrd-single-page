import React from "react";
import { RoomHeader } from "../components";
import { Header } from "../components/Header";

export function Rooms() {
  return (
    <div>
      <Header />
      <RoomHeader />

      <h3>방을 선택해 주세요.</h3>
    </div>
  );
}
