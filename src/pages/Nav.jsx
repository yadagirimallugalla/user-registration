import { Link } from "react-router-dom";
import Button from "../Components/Button";

export default function Nav() {
  return (
    <div className="flex justify-center gap-2">
      <Link to="/">
        <Button label="Users List" />
      </Link>
      <Link to="/register">
        <Button label="Register" />
      </Link>
    </div>
  );
}
