import { Link } from "react-router-dom";

export function RoomHeader() {
  return (
    <div>
      <h2>여기는 방을 소개하는 페이지 입니다.</h2>

      <Link to={`/rooms/blueRoom`}>파란 방입니다.</Link>
      <br />
      <Link to={`/rooms/greenRoom`}>초록 방입니다.</Link>
      <br />
      <Link to={`/rooms/redRoom`}>빨간 방입니다.</Link>
    </div>
  );
}
