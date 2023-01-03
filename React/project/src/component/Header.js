import "../style/header.css";
import "../style/global.css";

export default function Header() {
  return (
    <header>
      <div class="conatiner">
        <ul>
          <li class="image">
            <a href="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png"
                alt=""
              />
              <div class="a"></div>
            </a>
          </li>
          <li>
            <a href="">
              <h3>#Logo</h3>
            </a>
          </li>
          <li class="list">
            <a href="">About</a>
          </li>
          <li class="list">
            <a href="">Products</a>
          </li>
          <form>
            <input type="text" />
            <button>search</button>
          </form>
        </ul>
      </div>
    </header>
  );
}
