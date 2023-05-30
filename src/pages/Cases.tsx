import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Cases() {
  return (
    <div className=" w-[700px] h-auto bg-white bg-opacity-50 rounded-2xl mx-auto text-slate-700 ">
      <div className="w-full h-full p-4">
        <section className="flex justify-center items-center ">
          <img src={logo} alt="" className="mr-4 h-10" />
          <h1 className="text-3xl">Cadastro de novo caso</h1>
        </section>

        <form action="" className="mt-10">
          <input
            type="text"
            placeholder="Qual nome você o identificou?"
            className="mb-2 w-full h-12 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          <textarea
            placeholder="Fale algumas características dele"
            className="my-2 w-full p-3 border border-gray-300 rounded-md resize-y h-auto focus:outline-none focus:ring focus:ring-blue-200 overflow-wrap break-word"
          ></textarea>
          <input
            type="text"
            placeholder="Qual o porte do bixinho?"
            className="mb-2 w-full h-12 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          <div className="flex flex-col">
            <div className="flex justify-center items-center">
              <input
                type="file"
                accept="image/"
                className="w-full h-10 my-4 p-1 text-center border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <input
                type="file"
                accept="image/"
                className="w-full h-10 my-4 p-1 text-center border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <input
                type="file"
                accept="image/"
                className="w-full h-10 my-4 p-1 text-center border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="flex justify-between items-center">
              <button className=" bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:ring focus:ring-blue-200">
                Cadastrar
              </button>
              <div className="flex justify-between items-center">
                <Link to="/Profile" className="text-right text-sm mr-2">
                  Voltar para os casos.
                </Link>
                <FiLogOut size={14} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
