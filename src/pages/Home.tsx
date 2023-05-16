import logo from "../assets/logo.png";
import dogIcon from "../assets/dogIcon.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" w-4/5 h-3/4 rounded-xl mx-auto bg-white  bg-opacity-50 flex flex-col justify-between items-center">
      <div className="flex justify-center items-center p-1 mt-6 w-full">
        <img className="mr-6 w-20" src={logo} alt="" />
        <h1 className="text-6xl">
          Pet<strong className="text-bg-hero">Hero</strong>
        </h1>
      </div>

      <div className="text-center">
        <h1 className=" text-3xl text-center p-6">
          Todo animal de estimação merece um lar amoroso. Adote um animal de
          estimação hoje
        </h1>
        <p className=" text-lg text-center p-6">
          Navegue pelos nossos animais disponíveis e saiba mais sobre o processo
          de adoção. Juntos, podemos resgatar, reabilitar e realojar animais de
          estimação necessitados. Obrigado por apoiar nossa missão de levar
          alegria às famílias por meio da adoção de animais de estimação.
        </p>
      </div>

      <div>
        <Link to="/login" className="flex justify-between items-center m-4">
          Vamos comecar? <img src={dogIcon} alt="" />
        </Link>
      </div>
    </div>
  );
}
