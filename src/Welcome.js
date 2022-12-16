import { Link } from "react-router-dom";
export function Welcome() {
  return (
    <div>
      <h1>Welcome Venkatesh</h1>
      <Link to="/calc">Calculator</Link>
      <br></br>
      <Link to="/search">Search</Link>
    </div>
  );
}
