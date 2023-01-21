import { useRouteError } from "react-router-dom";

const ErrorRoute = () => {
  const { data, status, statusText } = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center m-2 h-96">
      <p className="block text-3xl text-red-500">Oops!</p>
      <p className="text-3xl text-red-500">
        Status: {status} {statusText}!
      </p>
      <p className="text-3xl text-red-500">{data}</p>
    </div>
  );
};

export default ErrorRoute;
