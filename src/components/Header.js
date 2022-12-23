import { Link } from "react-router-dom";

export function Header() {
  return (
    <div style={{ padding: 20, border: "5px solid gray" }}>
      <Link to="/">홈</Link>
      <br />
      <Link to="/photo">사진</Link>
      <br />
      <Link to="/rooms">방 소개</Link>
      <br />
    </div>
  );
}
