import { useParams } from "react-router-dom";
import { RoomHeader } from "../components";
import { Header } from "../components/Header";

export function Room() {
  const params = useParams(); 
  const { roomId } = params;
  return (
    <div>
      <Header />
      <RoomHeader />
      <h3>{roomId} 방입니다.</h3>
    </div>
  );
}
