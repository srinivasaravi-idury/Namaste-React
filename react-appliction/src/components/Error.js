import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Ooops!!!!</h1>
      <h2>Something went wrong</h2>
      <p>{error.data}</p>
    </div>
  );
};

export default Error;
