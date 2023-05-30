import { FiPower, FiTrash } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className=" w-[700px] h-auto bg-white bg-opacity-50 rounded-2xl mx-auto text-slate-700 ">
      <div>
        <header className="flex justify-between items-center p-2 m-auto">
          <div className="flex justify-between items-center p-4">
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
          <h1>Casos cadastrados</h1>

          <ul>
            <li>
              <strong>Caso:</strong>
              <p>Caramelo perdido</p>

              <strong>Descrição:</strong>
              <p>Caramelo perdido</p>

              <strong>Porte:</strong>
              <p>Pequeno</p>

              <div>
                <p>Aqui dentro deve ir o slide com as imagens</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
