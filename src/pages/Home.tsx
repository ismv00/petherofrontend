import logo from "../assets/logo.png";
import dogIcon from "../assets/dogIcon.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" w-4/5 h-3/4 rounded-xl mx-auto bg-white text-slate-700 bg-opacity-50 flex flex-col justify-between items-center">
      <div className="flex justify-center items-center p-1 mt-6 w-full">
        <img className="mr-6 w-20" src={logo} alt="" />
        <h1 className="text-6xl">
          Pet<strong className="text-bg-hero">Hero</strong>
        </h1>
      </div>

      <div className="text-center">
        <h1 className=" text-3xl text-center p-6">
          Bem-vindo ao Pethero - Ajude os serumainhos perdidos encontrar seus
          donos e seja o herói do dia.
        </h1>
        <p className=" text-lg text-center p-6">
          No Pethero, acreditamos no poder de unir pessoas para ajudar animais
          perdidos. Nossa plataforma é dedicada a auxiliar aqueles que encontram
          um bichinho desorientado, oferecendo um espaço para cadastrar e
          divulgar esses animais. Para quem está procurando seu companheiro
          perdido, fornecemos uma lista completa de animais cadastrados,
          permitindo que você encontre aquele que toca seu coração. Juntos,
          podemos fazer a diferença na vida desses seres adoráveis. Junte-se a
          nós e seja um herói para os animais perdidos.
        </p>
      </div>

      <div className=" m-10">
        <Link
          to="/login"
          className="flex justify-between items-center  hover:underline"
        >
          Vamos comecar? <img src={dogIcon} alt="" className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
