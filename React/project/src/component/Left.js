import "../style/left.css";
import "../style/global.css";
import "../style/header.css";

export default function Left() {
  return (
    <div class="left-side">
      <ul className="menu">
        <li className="list">
          <a href="">Home</a>
        </li>
        <li className="list">
          <a href="">Public</a>
          <ul className="public">
            <li>
              <a href="">Question</a>
            </li>
            <li>
              <a href="">Tags</a>
            </li>
            <li>
              <a href="">Users</a>
            </li>
            <li>
              <a href="">Companies</a>
            </li>
          </ul>
        </li>
        <li className="list">
          <a href="">COLLECTIVES</a>
        </li>
      </ul>
    </div>
  );
}
