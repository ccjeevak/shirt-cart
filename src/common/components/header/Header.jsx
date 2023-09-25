import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="flex-none text-blue-600 text-2xl">Shirt Store</h1>
      <nav className="basis-40 flex justify-around">
        <Link className="text-grey-600 hover:text-blue-600" to="/">
          Home
        </Link>
        <Link className="text-grey-600 hover:text-blue-600" to="shirt">
          Shirt
        </Link>
      </nav>
    </header>
  );
};
export default Header;
