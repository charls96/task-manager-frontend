import { KeyOutline, MailOutline, PersonOutline } from "react-ionicons";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="text-gray-200 font-bold border border-gray-700 rounded p-8 shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl">Sign up</h1>
          <h2 className="text-xl text-gray-500 flex items-center gap-2">
            FWealth
          </h2>
        </div>
        <form>
          <label
            htmlFor="input-group-1"
            className="block mb-2 text-sm font-bold"
          >
            User Name
          </label>
          <div className="relative mb-6">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <PersonOutline
                color="text-gray-500"
                className="text-gray-500 h-5 w-5"
              />
            </div>
            <input
              type="text"
              className="border text-sm rounded block w-full pl-10 p-2.5  bg-midnight border-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-lg"
              placeholder="user_name"
              required
            />
          </div>
          <label
            htmlFor="input-group-1"
            className="block mb-2 text-sm font-bold"
          >
            Email
          </label>
          <div className="relative mb-6">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <MailOutline
                color="text-gray-500"
                className="text-gray-500 h-5 w-5"
              />
            </div>
            <input
              type="email"
              className="border text-sm rounded block w-full pl-10 p-2.5  bg-midnight border-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-lg"
              placeholder="email@domain.com"
              required
            />
          </div>
          <label
            htmlFor="input-group-1"
            className="block mb-2 text-sm font-bold"
          >
            Password
          </label>
          <div className="relative mb-8">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <KeyOutline
                color="text-gray-500"
                className="text-gray-500 h-5 w-5"
              />
            </div>
            <input
              type="password"
              className="border text-sm rounded block w-full pl-10 p-2.5  bg-midnight border-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-lg"
              placeholder="•••••••••"
              required
            />
          </div>
          <label
            htmlFor="input-group-1"
            className="block mb-2 text-sm font-bold"
          >
            Repeat password
          </label>
          <div className="relative mb-8">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <KeyOutline
                color="text-gray-500"
                className="text-gray-500 h-5 w-5"
              />
            </div>
            <input
              type="password"
              className="border text-sm rounded block w-full pl-10 p-2.5  bg-midnight border-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-lg"
              placeholder="•••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 w-full p-2 border border-gray-700 rounded shadow-xl hover:bg-green-700 hover:transition-colors duration-700"
          >
            Sign up
          </button>
        </form>
      </div>
      <div className="[&_a]:text-sky-500 [&_a]:transition-colors hover:[&_a]:hover:text-sky-600 flex text-xs sm:text-sm justify-between mt-8 mx-2 text-gray-200 font-bold">
        <Link to="/forgot-password">Forgot Password?</Link>
        <p>
          Do you have an account? <Link to="/">Log in!</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
