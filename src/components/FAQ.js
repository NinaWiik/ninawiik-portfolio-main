import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  return (
    <div>
      <Accordion sx={{ backgroundColor: '#e6c5bf', fontSize: '20px', fontWeight: "bold", border: '1px solid #e6c5bf', boxShadow: 'none', paddingTop: '10px', paddingBottom: '10px'  }}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            Jeg kan ikke ha hunden min løs
            </AccordionSummary>
                <AccordionDetails sx={{ fontSize: '16px'}}>
                    Det er absolutt ingen problem! Det viktigste for meg er sikkerheten til hunden din, deg og alle involverte! Jeg kan fjerne båndet og halsbåndet fra bildet senere. På denne måten får alle en avslappet fotografering og kan dra hjem fornøyde. Jeg tar med en tynn fotosnor til dette formålet. Men selvfølgelig kan sele og bånd også være med på bildene. Sikkerhet kommer først!
                </AccordionDetails>
        </Accordion>
          
        <Accordion sx={{ backgroundColor: '#e6c5bf', fontSize: '20px', fontWeight: "bold", border: '2px solid #e6c5bf', boxShadow: 'none', paddingTop: '15px', paddingBottom: '10px'   }}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            Hva må hunden min kunne gjøre for en fotoshoot?
            </AccordionSummary>
                <AccordionDetails sx={{ fontSize: '16px'}}>
                Absolutt ingenting! Enhver hund og ethvert menneske er velkomne foran kameraet. Derfor er individualitet og planlegging viktig for meg. Hvis jeg får bli kjent med deg, kan jeg skape de rette betingelsene og sørge for at hver hund har en avslappet og morsom fotograferingsopplevelse! Selvfølgelig er det spesielle photoshoots der en viss grunnleggende lydighet eller temperament er nødvendig, men for en vanlig fotografering og virkelige øyeblikk trenger ikke hunden din å kunne gjøre noe.                </AccordionDetails>
          </Accordion>
          
          <Accordion sx={{ backgroundColor: '#e6c5bf', fontSize: '20px', fontWeight: "bold", border: '1px solid #e6c5bf', boxShadow: 'none', paddingTop: '15px', paddingBottom: '10px'  }}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            Hva må jeg ta med meg til fotoshooten?
            </AccordionSummary>
                <AccordionDetails sx={{ fontSize: '16px'}}>
                I utgangspunktet bare deg og din firbente venn! Men det er best å ta med en "normal" og en "super" belønning i form av godbiter og leker som hunden din liker spesielt godt og som tiltrekker oppmerksomheten hans. Posering og stå stille kan også bli slitsomt i lengden, og med belønninger har våre firbente venner enda mer moro under fotoshooten.                </AccordionDetails>
          </Accordion>
          
          <Accordion sx={{ backgroundColor: '#e6c5bf', fontSize: '20px', fontWeight: "bold", border: '1px solid #e6c5bf', boxShadow: 'none', paddingTop: '15px', paddingBottom: '10px'  }}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            Hva skjer hvis det regner eller er meldt regn på dagen vi skal ta bilder?
            </AccordionSummary>
                <AccordionDetails sx={{ fontSize: '16px'}}>
                  Da har vi enten allerede satt en ny dato og utsatt det, eller så danser vi i regnet! Det kan du bestemme.
              </AccordionDetails>
        </Accordion>
    </div>
  );
}