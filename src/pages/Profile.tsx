import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiPower, FiTrash } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import teste1 from "../assets/imgs/teste1.jpeg";
import teste2 from "../assets/imgs/teste2.jpeg";
import teste3 from "../assets/imgs/teste3.jpeg";
import teste4 from "../assets/imgs/teste4.jpeg";
import teste5 from "../assets/imgs/teste5.jpeg";
import teste6 from "../assets/imgs/teste6.jpeg";
import teste7 from "../assets/imgs/teste7.jpeg";

export default function Profile() {
  return (
    <div className="w-4/5 min-h-3/4 bg-white bg-opacity-50 rounded-2xl text-slate-700 ">
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

        <div className="overflow-y-auto">
          <ul className="p-4 m-auto w-auto max-h-screen ">
            <li className="rounded border p-2 bg-white mb-4 flex justify-between items-center">
              <div className="w-auto  h-full m-auto  p-4 flex flex-col justify-center items-center">
                <Slider
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  centerMode={true}
                  centerPadding="0px"
                  variableWidth={true}
                  className="w-[600px] h-full p-4 m-auto"
                >
                  <img
                    src={teste1}
                    alt="Imagem 1"
                    className="w-[700px] h-[300px] object-cover"
                  />

                  <img
                    src={teste2}
                    alt="Imagem 1"
                    className="w-[700px] h-[300px] object-cover"
                  />

                  <img
                    src={teste3}
                    alt="Imagem 1"
                    className="w-[700px] h-[300px] object-cover"
                  />
                </Slider>
              </div>
              <div className="w-full h-full p-4 flex flex-col items-start justify-start ">
                <strong>Caso:</strong>
                <p className="p-4">Caramelo perdido</p>

                <strong>Descrição:</strong>
                <p className="p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  nemo voluptatum labore magnam, exercitationem sint animi
                  repellendus accusamus velit eveniet molestias distinctio
                  error? Doloribus eligendi reiciendis modi culpa, ipsam quae.
                </p>

                <strong>Porte:</strong>
                <p className="p-4">Pequeno</p>
                <strong>Telefone:</strong>
                <p className="p-4">67999725398</p>
                <div className="flex justify-center items-center">
                  <strong>Cidade:</strong>
                  <p className="p-4">Campo Grande</p>
                  <strong>UF:</strong>
                  <p className="p-4">MS</p>
                </div>
              </div>
              <button className="p-4">
                <FiTrash size={20} color="gray" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
