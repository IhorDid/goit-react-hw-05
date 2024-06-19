import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Opps, sorry:</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default NotFoundPage;
