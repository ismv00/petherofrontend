import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.png";

export function Login() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/profile");
  }
  return (
    <div className=" w-[700px] h-auto bg-white bg-opacity-50 rounded-2xl mx-auto text-slate-700 ">
      <div className="w-full h-full p-4">
        <section className="flex flex-col items-center w-full">
          <div className="flex flex-col justify-center items-center m-4 text-center">
            <img src={logo} alt="" className=" h-12 mb-3" />
            <h1 className="text-3xl mb-2 ">Login</h1>
            <p className="text-center text-base">
              Faça seu login e comece a mudar o mundo.
            </p>
          </div>

          <form
            action=""
            className="w-full p-8 m-auto flex flex-col h-full rounded-xl"
            onSubmit={handleLogin}
          >
            <div className="w-full">
              <input
                type="text"
                placeholder="Digite seu e-mail"
                required
                className="mt-3 w-full h-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <input
                type="password"
                placeholder="Digite sua senha"
                required
                className="w-full mt-3 h-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <button className=" bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:ring focus:ring-blue-200">
                Entrar
              </button>
            </div>
            <div className="flex flex-1 justify-end items-center  p-2">
              <Link to="/register" className="text-right text-sm mr-2">
                Não possui cadastro? Clique aqui.
              </Link>
              <FiLogOut size={14} />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
