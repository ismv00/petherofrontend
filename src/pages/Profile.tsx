import { FiPower } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="w-4/5 h-screen bg-white bg-opacity-50 rounded-2xl text-slate-700 ">
      <header className="flex justify-between items-center p-2 m-auto">
        <div className="flex justify-between items-center p-2">
          <img src={logo} alt="" className=" h-14" />
          <p className="ml-4">Bem vindo(a), nome da Ong</p>
        </div>

        <div className="flex justify-between items-center">
          <Link
            to="/cases"
            className=" bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 mt-4 mr-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            Cadastrar novo caso
          </Link>
          <button className=" h-10 w-14 rounded border px-4 mt-4 hover:bg-yellow-700">
            <FiPower size={18} color="white" />
          </button>
        </div>
      </header>
      <div>
        <h1 className="w-auto text-4xl mb-3 text-center">Casos cadastrados</h1>

        <ul className="p-4 m-auto">
          <li className="rounded border p-2 bg-white mb-4">
            <strong>Caso:</strong>
            <p className="p-4">Caramelo perdido</p>

            <strong>Descrição:</strong>
            <p className="p-4">Caramelo perdido</p>

            <strong>Porte:</strong>
            <p className="p-4">Pequeno</p>

            <div className="w-full">
              <p>Aqui dentro deve ir o slide com as imagens</p>
            </div>
          </li>

          <li className="rounded border p-2 bg-white mb-4">
            <strong>Caso:</strong>
            <p className="p-4">Caramelo perdido</p>

            <strong>Descrição:</strong>
            <p className="p-4">Caramelo perdido</p>

            <strong>Porte:</strong>
            <p className="p-4">Pequeno</p>

            <div className="w-full">
              <p>Aqui dentro deve ir o slide com as imagens</p>
            </div>
          </li>

          <li className="rounded border p-2 bg-white mb-4">
            <strong>Caso:</strong>
            <p className="p-4">Caramelo perdido</p>

            <strong>Descrição:</strong>
            <p className="p-4">Caramelo perdido</p>

            <strong>Porte:</strong>
            <p className="p-4">Pequeno</p>

            <div className="w-full">
              <p>Aqui dentro deve ir o slide com as imagens</p>
            </div>
          </li>

          <li className="rounded border p-2 bg-white mb-4">
            <strong>Caso:</strong>
            <p className="p-4">Caramelo perdido</p>

            <strong>Descrição:</strong>
            <p className="p-4">Caramelo perdido</p>

            <strong>Porte:</strong>
            <p className="p-4">Pequeno</p>

            <div className="w-full">
              <p>Aqui dentro deve ir o slide com as imagens</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
