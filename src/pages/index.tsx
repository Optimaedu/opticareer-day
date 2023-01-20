import Link from "next/link";
import Logo from "../core/ui/client/components/Logo";
import DoubleArrowDownIcon from "../core/ui/client/components/icons/DoubleArrowDownIcon";

const companyLogos = [
  { src: "/logos/abilita-logo.png", name: "Abilita" },
  { src: "/logos/baltic-logo.jpg", name: "Baltic" },
  { src: "/logos/beamex-logo.png", name: "Beamex" },
  { src: "/logos/billerud-logo.jpg", name: "Billerud" },
  { src: "/logos/dobra-logo.png", name: "Dobra" },
  { src: "/logos/ekeri-logo.jpg", name: "Ekero" },
  { src: "/logos/fluidbag-logo.jpg", name: "Fluidbag" },
  { src: "/logos/kaiser-logo.jpg", name: "Kaiser" },
  { src: "/logos/kpedu-logo.png", name: "kpedu" },
  { src: "/logos/kpo-logo.png", name: "KPO" },
  { src: "/logos/kronos-logo.jpg", name: "Kronos" },
  { src: "/logos/lofs-logo.jpg", name: "Löfs" },
  { src: "/logos/mirka-logo.jpg", name: "Mirka" },
  { src: "/logos/mkm-logo.png", name: "MKM Solutions" },
  { src: "/logos/nooga-logo.jpg", name: "Nooga" },
  { src: "/logos/nordiclights-logo.jpg", name: "Nordic lights" },
  { src: "/logos/ostp-logo.jpg", name: "OSTP" },
  { src: "/logos/ostromap-logo.png", name: "Ostromap" },
  { src: "/logos/ovph-logo.jpg", name: "Österbottens välfärdsområde" },
  { src: "/logos/rani-logo.jpg", name: "Rani" },
  { src: "/logos/solving-logo.jpg", name: "Solving" },
  { src: "/logos/sundstrom-logo.jpg", name: "Sundström" },
  { src: "/logos/upm-logo.png", name: "UPM" }
];

console.log(companyLogos);

const IndexPage = () => {
  return (
    <div className="flex flex-col items-center h-full p-4">
     <div className="flex flex-col justify-center items-center h-[80vh]">
        <Logo />
        <Link className="hover:opacity-90 hover:text-primary mt-4 font-medium text-primary-dark" href="/">
          Vaihda kieli suomeksi</Link>

        <h1 className="text-2xl md:text-3xl font-light mb-10 mt-10 sm:mt-20">Välkommen till OptiCareer-Day!</h1>

        <p className="w-full max-w-[700px] text-lg text-center">Hoppas att du har eller kommer att ha en lärorik och trevlig dag hos oss. Som en del av programmet kommer vi att ha ett quiz där du kan testa dina kunskaper om nejdens företag och vinna fina priser.</p>

        <Link href="/quiz" className="relative flex justify-center items-center mt-12 px-14 py-5 rounded-full bg-primary text-on-primary font-medium select-none outline-0 hover:bg-primary-light disabled:bg-gray-300">Gå till quizet</Link>
     </div>

     <div className="flex flex-col items-center md:mt-6 w-full max-w-[1280px]">
        <h3 className="font-medium w-full text-center py-4">Företag som deltar i evenemanget</h3>
        <div className="fill-typography-black mb-8">
          <DoubleArrowDownIcon size={40} />
        </div>
        <div className="flex flex-wrap justify-center gap-20 w-full max-w-[1000px]">
          {companyLogos.map(logo => (
            <div key={logo.src} className="flex items-center justify-center w-[250px]">
              <img src={logo.src} alt={logo.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
     </div>
    </div>
  );
}

export default IndexPage;
