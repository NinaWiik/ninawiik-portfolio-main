import { Link } from "react-router-dom";
import Brie from "../images/Brie_foran_web.jpg";
import FAQ from "../components/FAQ";
import Kaja from "../images/KajaLong.jpg";

export default function Home() {
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
            <h2 className="text-cream">Priser og informasjon</h2>
            <h3 className="mb-6 text-cream">The Photoshoot</h3>
            <p>
              Hvor ofte utsetter vi ting til senere og venter på det perfekte øyeblikket. Det perfekte været, når hunden din mestrer alle kommandoer perfekt, du har den perfekte figuren...
              Men hva om det ikke handler om å vente på det perfekte øyeblikket, men å se det perfekte i øyeblikket vi er i?
            </p>
            <p>
              Været gjør som det vil? PERFEKT! Vekslende vær betyr vanligvis fantastisk lys, vakre skyer, kanskje til og med en regnbue og mye variasjon. Og hvis du ikke vil danse i regnet,
              finner vi en ny dato. Etter hver regn kommer solen.
            </p>
            <p>
              Har du nylig fått en valp i huset, eller vurderer du å få en? Ikke vent med å planlegge en valpefotoshoot! Det er ingenting som å se tilbake og angre på alle bildene man ikke tok.
              Jeg vet, for jeg var selv en av dem en gang i tiden. Valpetiden er en tid med daglige forandringer, og den forsvinner raskt. Ikke utsett det og tro at du kan ta bilder senere.
              Valpetiden er unik og uerstattelig, og den forsvinner som dugg for solen. Ta det nest beste skrittet: fang disse øyeblikkene på bilder, slik at du kan dykke ned i minnene når som
              helst og kjenne på den nostalgiske følelsen av den tiden som en gang var.
            </p>
            <Link to="/contact" onClick={scrollToTop}>
            <button className="bg-teal-light hover:bg-teal-dark text-white font-bold py-2 px-4 rounded mt-4">Kontakt meg for en uforpliktende prat!</button>
            </Link>
          </div>

          {/* Image column */}
          <div className="w-full lg:w-1/3 pb-8 lg:py-8">
            <img src={Brie} alt="Bilde" className="rounded-md" />
          </div>
        </div>

        <div className="bg-blush px-4 lg:px-40 flex flex-wrap items-center justify-start pb-10">
          <div className="w-full">
            <h3 className="my-4 text-[#21262B]">Priser</h3>
          </div>
          <div className="w-full flex items-center justify-start mx-0"> {/* Changed here */}
            <div className="w-1/3 p-4 lg:p-8 bg-taupe rounded-lg mr-2"> {/* Modified here */}
              <h2 className="mb-6 text-cream">Liten Pakke</h2>
              <ul className="text-cream">
                  <li>• 60 min fotografering</li>
                  <li>• 1 hund</li>
                  <li>• 5 redigerte bilder til privat bruksrett</li>
                  <li>• Pris: 1900,-</li>
                  <li>• 300,- per ekstra bilde</li>
                </ul>
            </div>
            <div className="w-1/3 p-4 lg:p-8 bg-taupe rounded-lg mx-4"> {/* Modified here */}
              <h2 className="mb-6 text-cream">Medium Pakke</h2>
              <ul className="text-cream">
                  <li>• 60-90 min fotografering</li>
                  <li>• Flere hunder fra samme eier</li>
                  <li>• 8 redigerte bilder til privat bruksrett</li>
                  <li>• Pris: 2400,-</li>
                  <li>• 300,- per ekstra bilde</li>
              </ul>
            </div>
            <div className="w-1/3 p-4 lg:p-8 bg-taupe rounded-lg ml-2"> {/* Modified here */}
              <h2 className="mb-6 text-cream">Stor Pakke</h2>
              <ul className="text-cream">
                  <li>• 60-120 min fotografering</li>
                  <li>• Flere hunder fra samme eier</li>
                  <li>• 12 editerte bilder til privat bruksrett</li>
                  <li>• Pris: 2900,-</li>
                  <li>• 300,- per ekstra bilde</li>
                </ul>
            </div>
          </div>
          <div className="w-full text-center p-4 lg:py-8 lg:pl-8 bg-taupe rounded-lg mt-6 mx-0"> {/* Modified here */}
          <h2 className="mb-6 text-cream">Øvrige Priser</h2>
              <p className="font-extrabold mb-2">Kjøreutgifter utenfor Vestfold: </p>
              <p>5,- pr/km</p>

              <p className="mt-8">*Egne priser for bedriftsfoto og bilder som skal brukes til kommersielt bruk. Ta kontakt for prisforespørsel. </p>
          </div>
        </div>


        <div className="w-full">
          <img src={Kaja} alt="Bilde" className="" />
        </div>

        <div className="bg-taupe px-4 lg:px-40 flex flex-wrap items-center justify-start">
          {/* Text column */}
          <div className="w-full py-8">
            <h3 className="mb-6 text-cream">How it works!</h3>
            <p>        
              Målet mitt er å gjøre hele opplevelsen med meg sømløs, helt fra den første henvendelsen til levering av galleriet ditt! For å gi deg den beste opplevelsen har jeg laget 3 enkle trinn
              som går gjennom tiden vår sammen og hva du kan forvente av fotograferingen.
            </p>
            <div className="w-full flex items-start justify-start mx-0 mt-8 text-center">
            <div className="w-1/3 rounded-lg mr-6"> {/* Modified here */}
              <h2 className="mb-2 text-cream text-[18px] underline">Steg 1 - Forespørsel og Planlegging</h2>
                <p className="text-[14px] mt-0">
                  Takk for at du valgte meg til å fange varige bilder av din beste venn! Allerede fra din første henvendelse vil du bli tilbudt et spørreskjema som går gjennom detaljer som dine visjoner for fotograferingen, din hunds behov og andre viktige spørsmål.
                </p>
                <p className="text-[14px]">
                  Etter at du har fullført spørreskjemaet, vil vi diskutere svarene dine samt gå gjennom lokasjonsalternativer for å best tilpasse din visjon. Hvis du har bekymringer angående hunden din og deres oppførsel, er det på dette tidspunktet vi vil ta opp
                  disse bekymringene og komme opp med en perfekt plan for å fange din hund så komfortabelt som mulig. 
                </p>
                <p className="text-[14px]">
                  Dette er hvor vi organiserer din perfekte fotografering, og jeg vil være der hvert skritt på veien frem til fotograferingsdagen.
                </p>
            </div>
            <div className="w-1/3 rounded-lg mx-6"> {/* Modified here */}
              <h2 className="mb-2 text-cream text-[18px] underline">Steg 2 - Photoshoot Dagen</h2>
                <p className="text-[14px] mt-0">
                  Jeg vil ta kontakt med deg 5-7 dager før fotograferingen for å avklare alle detaljer. Ved ankomst vil vi utforske den valgte fotolokasjonen og la hunden din snuse og bli vant til det nye miljøet.
                </p>
                <p className="text-[14px]">
                  Tiden vår sammen er ment å være stressfri og spennende for hunden din. Jeg vil aldri tvinge hunden din til å stå et sted eller gjøre noe de ikke er komfortable med under økten vår. Med mine anvisninger vil du leke med hunden din (kaste leker, pinner, kalle dem til deg, osv.) og plassere dem på bestemte områder mens jeg fanger øyeblikket.
                </p>
                <p className="text-[14px]">
                  Ønsker du bilder sammen med din firbeinte venn, så finner vi de beste mulighetene for dette. Og om du ikke ønsker å være med i photoshooten, så er også dette helt greit!
                </p>
            </div>
            <div className="w-1/3 rounded-lg ml-6"> {/* Modified here */}
              <h2 className="mb-2 text-cream text-[18px] underline">Steg 3 - Bildelevering</h2>
                <p className="text-[14px] mt-0">
                  Etter photoshooten er ferdig, vil jeg gå igjennom bildene og med mitt trente øye finne de beste bildene og bruke tiden på å etterbehandle de, slik at de får den magiske stemningen, og viser deg og ditt dyr på mest fantastiske måte. 
                </p>
                <p className="text-[14px]">
                Etterbehandlingen er det som er tidkrevende i en slik prosess, men innen 4 uker etter photoshooten (tid kommer an på arbeidsmegden jeg har fra før av) vil jeg levere bildene til deg.
                </p>
                <p className="text-[14px]">
                  Du vil motta to versjoner av bildene, et eksemplar uten vannmerke, og et med et vannmerke. Skal bildene brukes i sosiale medier (Instagram, Facebook etc) så skal brukes bildet med vannmerke, og jeg krediteres som fotograf. 
                </p>
            </div>
            </div>
          </div>

          {/* Image column */}
          {/* <div className="w-full lg:w-1/3 p-8">
            <img src={Brie} alt="Bilde" className="rounded-md" />
          </div> */}
        </div>

        <div className="bg-blush px-4 lg:px-40 flex flex-wrap items-center justify-start pb-10">
        <div className="w-full py-8">
            <h3 className="mb-6 text-[#21262B]">Frequently Asked Questions</h3>
            <FAQ></FAQ>
          </div>
        </div>



        {/* <div className="container mx-auto mb-10 md:px-24 lg:px-48 xl:px-72">
          <h1 className="text-6xl my-8">PRICING</h1>
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <div className="sm:flex-1 text-left">
              <h2 className="text-3xl font-bold mb-3">LITEN PAKKE</h2>
              <div className="bg-[#61A6AB] rounded-lg text-lg p-6">
                <ul>
                  <li>• 30-45 min fotografering</li>
                  <li>• 1 hund</li>
                  <li>• 5 editerte bilder til valgfritt* bruk</li>
                  <li>• Pris: 1800,-</li>
                  <li>• 300,- per ekstra bilde</li>
                </ul>
              </div>
            </div>
            <div className="sm:flex-1 text-left">
              <h2 className="text-3xl font-bold text-left mb-3">MEDIUM PAKKE</h2>
              <div className="bg-[#61A6AB] rounded-lg text-lg p-6">
                <ul>
                  <li>• 60 min fotografering</li>
                  <li>• Flere hunder</li>
                  <li>• 10 editerte bilder til valgfritt* bruk</li>
                  <li>• Pris: 2300,-</li>
                  <li>• 300,- per ekstra bilde</li>
                </ul>
              </div>
            </div>
            <div className="sm:flex-1 text-left">
              <h2 className="text-3xl font-bold text-left mb-3">STOR PAKKE</h2>
              <div className="bg-[#61A6AB] rounded-lg text-lg p-6">
                <ul>
                  <li>• 60-90 min fotografering</li>
                  <li>• Flere hunder</li>
                  <li>• 15-17 editerte bilder til valgfritt* bruk</li>
                  <li>• Pris: 2800,-</li>
                  <li>• 300,- per ekstra bilde</li>
                </ul>
              </div>
            </div>
            </div>
                <h2 className="text-3xl font-extrabold text-left mt-10 mb-5">ØVRIGE PRISER</h2>
                <div className="bg-[#61A6AB] rounded-lg text-center py-10 text-xl">
                    <p className="font-extrabold mb-2">Kjøreutgifter utenfor Vestfold: </p>
                    <p>5,- pr/km</p>

                    <p className="mt-8">*Egne priser for bedriftsfoto og bilder som skal brukes til kommersielt bruk. Ta kontakt for prisforespørsel. </p>
                </div>
                
            <h2 className="text-3xl font-extrabold text-left mt-10 mb-5">OM FOTOGRAFERINGEN</h2>
            <div className="bg-[#61A6AB] rounded-lg text-left py-2 text-xl p-8">
                <p className="my-3 pt-4 leading-8">Tidsskjema som er oppført er veiledende, så jeg vil bruke den tiden det tar for at det er nok bilder å arbeide med i ettertid.</p>

                <p className="my-3 pt-4 leading-8">Det er etter fotograferingen at arbeidet begynner, og det er etterbehandlingen av bildene som er en delikat og tidkrevende prosess. Jeg legger mye tid i hvert bilde og gjør mitt ytterste for at du som kunde skal bli fornøyd. Det kan også være at jeg lager flere versjoner av samme bilde, så du kan velge hva du liker best. </p>

                <p className="my-3 pt-4 leading-8">Etter fotograferingen legger jeg bildene inn i et album, og du kan selv gå igjennom hvilke bilder som er dine favoritter. Her er bildene uredigert, så etterbehandlingen vil starte etter dette. </p>

                <p className="my-3 pt-4 leading-8">Hvor lang tid det går fra fotograferingen, til du får de ferdige produktene vil variere, og avhenger av hvor mange bilder du ønsker og hvor mange oppdrag det er samtidig. Men jeg vil jobbe så fort jeg kan for at du skal få de fortest mulig. </p>

                <p className="my-3 pt-4 leading-8">Jeg fotograferer utendørs, og om du har noen forslag til flotte lokaler i nærheten så kan vi avtale dette i forkant. Vi vil også ha et digitalt møte i forkant hvor vi kan snakke om hva du ønsker å få ut av fotograferingen, og hva tankene dine rundt det er.</p>

                <p className="my-3 pt-4 leading-8">Er det noe du lurer på, eller spørsmål rundt dette, så bare ta kontakt, så tar jeg kontakt! </p>
            </div>
        </div> */}
      </body>
    );
  }
  