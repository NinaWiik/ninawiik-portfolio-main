import React from 'react';
import { Link } from 'react-router-dom';
import NinaPoppy from '../images/Picture8.jpg';
import PoppyOslo from "../images/Oslo_Photoshoot-240306-130-Enhanced-NR-Edit.jpg-WEB.jpg";
import Kaja from "../images/Oslo_Photoshoot-240306-232-Enhanced-NR-Edit.jpg-WEB.jpg";
import PoppyLong from "../images/PoppyLong.jpg";

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <body>
        <div className="bg-taupe px-4 lg:px-40 flex flex-wrap items-center justify-start">
        {/* Text column */}
        <div className="w-full lg:w-2/3 py-8 lg:pr-8">
          <h2 className="text-cream">Bli bedre kjent med meg</h2>
          <h3 className="mb-6 text-cream">Hei! Mitt navn er Nina!</h3>
          <p>

            Jeg er der for deg hvis du ønsker å gjøre kjærligheten til hunden din eller hesten din synlig og holde den for alltid. Fordi jeg vet hva det betyr når du sier
            "Det er ikke bare en hund eller en hest". Våre dyr er så mye mer enn det.
          </p>
          <p>
            De er familiemedlemmer, følgesvenn, turvenn, psykolog, treningsvenn, ja alt! I noen øyeblikk er de det som holder deg gående. Jeg har alltid hatt dyr i livet, og kunne aldri
            tenkt meg et liv uten dyr, enten det har vært hest eller hund opp igjennom årene. Noen som drar deg opp om dagen, alltid ser på deg med forventningfulle øyne, og
            lurer på hva det neste eventyret blir. Det finnes ingen ord som kan beskrive disse følelsene og denne forbindelsen. Det er der bilder kommer inn.
          </p>
          <p>
            Det er som de sier, et bilde sier mere en tusen ord, og jeg ønsker å lage slike minner man kan se tilbake på i lang tid, og huske disse uforglemmelige øyeblikkene som dyrene fikk oss til å følge.
          </p>
          <Link to="/contact" onClick={scrollToTop}>
            <button className="bg-teal-light hover:bg-teal-dark text-white font-bold py-2 px-4 rounded mt-4">Kontakt meg for en uforpliktende prat!</button>
          </Link>
        </div>

        {/* Image column */}
        <div className="w-full lg:w-1/3 pb-8 lg:py-8">
          <img src={NinaPoppy} alt="Bilde" className="rounded-md" />
        </div>
      </div>

      <div className="bg-blush px-4 lg:px-40 flex flex-wrap items-center justify-start">
        {/* Image column */}
        <div className="w-full lg:w-1/3 py-8">
          <img src={PoppyOslo} alt="Bilde" className="rounded-md" />
        </div>
        {/* Text column */}
        <div className="w-full lg:w-2/3 pb-8 lg:py-8 lg:pl-8">
          <h3 className="mb-6 text-[#21262B]">Mitt Team!</h3>
          <p className="text-[#21262B]">
            For å sikre de beste bildene og maksimere resultatene, samarbeider jeg av og til med min mann Christian for å skape de mest fantastiske bildene av våre hunder. Han er en ekstremt
            dyktig fotograf og har tatt mange av bildene som du har sett i porteføljen min og på Instagram-profilen min. Under en fotoshoot er det mange elementer som må falle på plass, og å
            ha noen som gir veiledning mens andre tar bildene, er uvurderlig.
          </p>
          <p className="text-[#21262B]">
            Resten av teamet vårt inkluderer selvfølgelig våre to inspirasjonskilder, Io og Poppy. Uten dem ville ikke inspirasjonen vært like sterk, og de driver oss til stadig å søke etter
            nye ideer, komposisjoner og vinklinger. Mange kjenner oss sannsynligvis gjennom Instagram-profilen med det samme brukernavnet, der jeg kontinuerlig deler våre opplevelser innen
            fotografering, redigering, hundetrening og på konkurransebanen. Så følg oss gjerne på Instagram for å bli inspirert til nye høyder!
          </p>
          <Link to="https://www.instagram.com/ninawiik">
            <button className="bg-teal-light hover:bg-teal-dark text-white font-bold py-2 px-4 rounded mt-4">Følg oss på Instagram</button>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <img src={PoppyLong} alt="Bilde" className="" />
      </div>

      <div className="bg-taupe px-4 lg:px-40 flex flex-wrap items-center justify-start">
        {/* Text column */}
        <div className="w-full lg:w-2/3 py-8 lg:pr-8">
          <h2 className="text-cream">Min filosofi</h2>
          <h3 className="mb-6 text-cream">Happy dog - Happy life!</h3>
          <p>
            Dyrets velvære kommer alltid først i mine fotoshoots.
          </p>
          <p>
            Dyret ditt får så mye tid og plass som det trenger. Vi jobber uten press eller stress. Det er veldig viktig for meg at du og hunden din føler dere trygge og komfortable. Hunden din
            trenger ikke å ha kontakt med meg hvis den er redd eller usikker, og enhver som ønsker kos blir selvfølgelig mottatt med glede fra meg. Alt er tillatt, men ingenting er påkrevd!
          </p>
          <p>
            Siden jeg er oppvokst med en fantastisk familiehund og mine egne hunder, kan jeg lese hunders kroppsspråk godt og vet hvordan jeg best kan reagere og når det er passende med en
            pause. Hvis du vil se hvordan hverdagen min rundt hundene er, så ta gjerne en titt på mine daglige historier og highlights på Instagram.
          </p>
          <Link to="https://www.instagram.com/ninawiik">
            <button className="bg-teal-light hover:bg-teal-dark text-white font-bold py-2 px-4 rounded mt-4">Følg oss på Instagram</button>
          </Link>
        </div>

        {/* Image column */}
        <div className="w-full lg:w-1/3 pb-8 lg:py-8">
          <img src={Kaja} alt="Bilde" className="rounded-md" />
        </div>
      </div>
    </body>
  );
}
