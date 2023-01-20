import Link from "next/link";
import Logo from "../core/ui/client/components/Logo";
import abilitaLogo from "../../public/abilita-logo.png";
import balticLogo from "../../public/baltic-logo.jpg";
import beamexLogo from "../../public/beamex-logo.png";
import billerudLogo from "../../public/billerud-logo.jpg";
import dobraLogo from "../../public/dobra-logo.png";
import ekeriLogo from "../../public/ekeri-logo.jpg";
import fluidBagLogo from "../../public/fluidbag-logo.jpg";
import kaiserLogo from "../../public/kaiser-logo.jpg";
import kpeduLogo from "../../public/kpedu-logo.png";
import kpoLogo from "../../public/kpo-logo.png";
import kronosLogo from "../../public/kronos-logo.jpg";
import lofsLogo from "../../public/löfs-logo.jpg";
import mirkaLogo from "../../public/mirka-logo.jpg";
import mkmLogo from "../../public/mkm-logo.png";
import noogaLogo from "../../public/nooga-logo.jpg";
import nlLogo from "../../public/nordiclights-logo.jpg";
import ostpLogo from "../../public/ostp-logo.jpg";
import ostromapLogo from "../../public/ostromap-logo.png";
import ovphLogo from "../../public/ovph-logo.jpg";
import raniLogo from "../../public/rani-logo.jpg";
import solvingLogo from "../../public/solving-logo.jpg";
import sundstromLogo from "../../public/sundström-logo.jpg";
import upmLogo from "../../public/upm-logo.png";

const IndexPage = () => {
  return (
    <div className="w-full bg-white flex justify-center items-center flex-col pb-8">
      <div className="w-11/12 sm:w-3/5 mt-40 flex justify-center items-center flex-col ">
        <Logo />
        <Link className="hover:opacity-90 hover:border-b border-gray-500 mt-5 font-medium text-primary-dark" href="/">
          Vaihda kieli suomeksi</Link>
      </div>
      <div className="w-4/5 md:w-3/5 flex justify-center sm:justify-between items-center flex-col 2xl:flex-row mt-20">
        <p className="sm:max-w-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat possimus doloribus voluptate mollitia aut similique nulla quisquam excepturi explicabo laboriosam exercitationem corporis hic, suscipit sapiente quaerat a nihil fuga et fugiat incidunt nam earum doloremque. Amet dolorum iusto labore laborum voluptatibus veritatis, totam, ipsum quidem alias, blanditiis ut dolore debitis! Omnis consequuntur fugit libero vero quos ipsum molestias distinctio? Necessitatibus, molestiae sed illum porro quo voluptate est quia quas excepturi vel neque, ea error perferendis officia ullam. Perferendis vitae fuga modi provident officia quam. Dolor, quibusdam. Sequi officiis porro, repudiandae, odio cupiditate veritatis autem magnam dignissimos modi error nisi illum?</p>

        <a href="/quiz"><button className="relative flex justify-center items-center mt-10 2xl:mt-0 px-8 py-4 rounded-full bg-primary text-on-primary font-medium select-none outline-0 hover:bg-primary-light disabled:bg-gray-300">Gå till quiz</button></a>
      </div>

      <div className="w-3/5 flex flex-wrap items-center justify-center mt-12 md:mt-20 gap-1 md:gap-12">
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-40" src={abilitaLogo.src} alt="Abilita" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={balticLogo.src} alt="Baltic" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={beamexLogo.src} alt="Beamex" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={billerudLogo.src} alt="Billerud" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={dobraLogo.src} alt="Dobra" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={ekeriLogo.src} alt="Ekeri" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={fluidBagLogo.src} alt="Fluid Bag" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={kaiserLogo.src} alt="Kaiser Eur-Mark" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={kpeduLogo.src} alt="Kpedu" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={kpoLogo.src} alt="KPO" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={kronosLogo.src} alt="Kronos" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={lofsLogo.src} alt="Löfs" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={mirkaLogo.src} alt="Mirka" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={mkmLogo.src} alt="MKM" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={noogaLogo.src} alt="Nooga" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={nlLogo.src} alt="Nordic Lights" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={ostpLogo.src} alt="OSTP" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={ostromapLogo.src} alt="Ostromap" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={ovphLogo.src} alt="Ovph" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={raniLogo.src} alt="Rani" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={solvingLogo.src} alt="Solving" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={sundstromLogo.src} alt="Sundström" />
        </div>
        <div className="flex items-center justify-center">
          <img className="object-contain w-80 h-52" src={upmLogo.src} alt="UPM" />
        </div>
      </div>
    </div>
  );
}


export default IndexPage;