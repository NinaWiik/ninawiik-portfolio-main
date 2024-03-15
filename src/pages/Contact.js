import Poppy1 from "../images/Skogen_Hasken_Poppy231014-3-NR-2.jpg-Web.jpg";
import PoppyOpera from "../images/PoppyOpera.jpg";
import { InstagramEmbed } from 'react-social-media-embed';

export default function Contact() {
  return (
    <body>
      <div className="bg-taupe px-4 lg:px-40 flex flex-wrap items-center justify-start">
        {/* Text column */}
        <div className="w-full lg:w-2/3 lg:py-8 lg:pr-8">
          <h3 className="my-6 text-cream">E-mail Me!</h3>
          <p>
            Ønsker du å bestille en photoshoot eller har du bare et spørsmål til meg? Da er det bare å sende meg en mail, så kommer jeg tilbake til deg så snart som mulig! Din henvendelse er helt uforpliktende, så ikke nøl med å ta kontakt. Det er best å registrere deg for ønsket dato så tidlig som mulig.
          </p>
          <p>
            Jeg pleier å svare innen noen arbeidsdager. Vær imidlertid oppmerksom på at det avhengig av arbeidsmengden kan ta lengre tid.
          </p>
          <div className="mt-6 flex items-center font-bold text-xl">
            <button className="bg-teal-light hover:bg-teal-dark text-white font-bold py-2 px-4 rounded mt-4">
              <a href="mailto:hei@ninawiik.no" className="hover:underline font-bold">
                hei@ninawiik.no
              </a>
            </button>
          </div>
        </div>

        {/* Image column */}
        <div className="w-full lg:w-1/3 py-8">
          <img src={Poppy1} alt="Bilde" className="rounded-md" />
        </div>
      </div>

      <div className=" bg-blush px-4 lg:px-40 flex flex-wrap items-center justify-start">
        {/* Text column */}
        <div className="w-full lg:w-1/2 pt-8 lg:py-8 lg:pr-8">
          <h3 className="mb-6 text-[#21262B]">Follow us on Instagram</h3>
          <p className="text-[#21262B]">
            Mange kjenner oss gjennom instagram, så ikke nøl med å sende oss en melding der! Jeg svarer så fort jeg kan for å dele inspirasjon og svare på spørsmål.
          </p>
          <p className="text-[#21262B]">
            På vår Instagram-profil tar jeg deg med på en visuell reise gjennom livet med mine to fantastiske hunder. Fra livlige øyeblikk til "Behind the Scenes" fra våre fotoshoots – alt er med for å inspirere deg.
          </p>
          <p className="text-[#21262B]">
            I tillegg til å dele bilder, gir jeg også bort hemmeligheter fra fotoverdenen og deler tips og triks for hundeelskere. Gjennom stories gir jeg deg et glimt av vår hverdag, slik at du kan bli bedre kjent med oss før du bestemmer deg for å bli med på en magisk fotoshoot-opplevelse!
          </p>
        </div>
        {/* Image column */}
        <div className="w-full lg:w-1/2 lg:py-8">
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <InstagramEmbed url="https://www.instagram.com/ninawiik/" width={750} />
          </div>
        </div>
      </div>
      <div className="w-full">
          <img src={PoppyOpera} alt="Bilde" className="" />
        </div>
    </body>
  );
}
