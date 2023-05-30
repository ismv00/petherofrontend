import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Register() {
  return (
    <div className=" w-[700px] h-auto bg-white bg-opacity-50 rounded-2xl mx-auto text-slate-700 ">
      <div className="w-full h-full p-4">
        <section className="flex flex-col items-center w-full">
          <div className="flex flex-col justify-center items-center m-4 text-center">
            <img src={logo} alt="" className=" h-12 mb-3" />
            <h1 className="text-3xl mb-2 ">Cadastro</h1>
            <p className="text-center text-base">
              Cadastre-se na plataforma e seja o heroi de um pet.
            </p>
          </div>

          <form
            action=""
            className="w-full p-8 m-auto flex flex-col h-full rounded-xl"
          >
            <div className="w-full">
              <input
                type="text"
                placeholder="Digite seu nome completo"
                required
                className="mb-2 w-full h-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <input
                type="text"
                placeholder="Seu melhor e-mail"
                required
                className="mt-3 w-full h-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <input
                type="text"
                placeholder="Whatsapp"
                required
                className="w-full mt-3 h-10  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />

              <div className="flex justify-between items-center mt-3 w-full">
                <input
                  type="text"
                  placeholder="Cidade"
                  required
                  className="h-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
                <input
                  type="text"
                  placeholder="UF"
                  required
                  className="h-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <input
                type="password"
                placeholder="Cadastre uma senha"
                required
                className="w-full mt-3 h-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <button className=" bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:ring focus:ring-blue-200">
                Cadastrar
              </button>
            </div>
            <div className="flex flex-1 justify-end items-center  p-2">
              <Link to="/login" className="text-right text-sm mr-2">
                Voltar para Home
              </Link>
              <FiLogOut size={14} />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
