import { KeyOutline, MailOutline } from "react-ionicons";

const Login = () => {
  return (
    <div className="text-gray-200 font-bold border border-gray-700 rounded p-8 shadow-xl">
      <h1 className="text-5xl mb-8">Log in</h1>
      <form>
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-bold">
          Email
        </label>
        <div className="relative mb-6">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <MailOutline color="text-gray-500" className="text-gray-500 h-5 w-5" />
          </div>
          <input
            type="text"
            className="border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="email@domain.com"
            required
          />
        </div>
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-bold">
          Password
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <KeyOutline color="text-gray-500" className="text-gray-500 h-5 w-5" />
          </div>
          <input
            type="password"
            className="border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
