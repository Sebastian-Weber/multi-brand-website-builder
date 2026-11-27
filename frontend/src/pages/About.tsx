
import Footer from "../components/Footer"
import Header from "../components/Header"
// import List from "../components/lists/List";
import SectionHero from "../components/Section_Hero"
import SectionTextAndImage from "../components/Section_Text_and_Image"
import SectionContact from "../components/Section_Contact"
import SectionDivider from "../components/Section_Divider";
import cdImages from '../utils/cdImages';

// const cdImages = {
//   logo: './src/assets/Peters_Logotype.svg',
//   image1: './src/assets/images/vishnu-mohanan-qso4MyFvhNc-unsplash.jpg',
//   image2: './src/assets/images/mohamed-marey-M9mRKGW9L30-unsplash.jpg',
//   image3: './src/assets/images/james-sandbrook-h0-lwHj7heI-unsplash.jpg',
//   image4: './src/assets/images/mika-baumeister-dp9AxaKHdVg-unsplash.png',
//   image5: './src/assets/images/steve-johnson-hokONTrHIAQ-unsplash.jpg',
//   image6: './src/assets/images/david-dvoracek-2kWxMl5IWTA-unsplash.jpg',
//   image7: './src/assets/images/neven-krcmarek-67FG6zD8WPQ-unsplash.png',
//   image8: './src/assets/images/thisisengineering-ovWUKV1btXk-unsplash.png',
//   image9: './src/assets/images/markus-spiske-kK7uPfb2YWU-unsplash.jpg',
//   image10: './src/assets/images/thisisengineering-ZPeXrWxOjRQ-unsplash.jpg',
//   image11: './src/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
//   image12: './src/assets/images/brian-wangenheim--yWw3HlVVnQ-unsplash.jpg',
//   image13: './src/assets/images/shirish-suwal-ctmuaOO-JJI-unsplash.jpg',
//   image14: './src/assets/images/gidlark-d662tNZfe_g-unsplash.jpg',
//   image15: './src/assets/images/tekton-ndJlw4Bz-1Y-unsplash.jpg',
//   image16: './src/assets/images/thisisengineering-zhXR20LFowA-unsplash.jpg',
//   image17: './src/assets/images/steffen-lemmerzahl-fu3iLPBe964-unsplash.jpg',
//   image18: './src/assets/images/s-tsuchiya-gxIg8FcDIC8-unsplash.jpg',
//   image19: './src/assets/images/alex-wolowiecki-uXgoasNqYqw-unsplash.jpg',
//   image20: './src/assets/images/jimmy-nilsson-masth-CskQi7DDUuY-unsplash.jpg',
//   image21: './assets/images/thisisengineering-q9yJE97A44Q-unsplash.jpg',
//   image22: './src/assets/images/sol-tZw3fcjUIpM-unsplash.png',
//   image23: './src/assets/images/frames-for-your-heart-iOLHAIaxpDA-unsplash.jpg',
//   image24: './src/assets/images/jimmy-nilsson-masth-hrIpsXkrAO0-unsplash.png',
//   image25: './src/assets/images/markus-spiske-rNn_TU8dvoY-unsplash.png',
//   image26: './src/assets/images/kumpan-electric-AjNgSvEt-v4-unsplash.jpg',
//   image27: './src/assets/images/smart-me-ag-j2E-2YQe_c8-unsplash.jpg',
//   image28: './src/assets/images/waldemar-rHfTdK9YU2Q-unsplash.jpg',
//   image29: './src/assets/images/markus-spiske-LIi9tSIKoYQ-unsplash.jpg',
//   image30: './src/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
//   image31: './src/assets/images/alpha-innotec--nbWCvUiFJA-unsplash.jpg',
//   image32: './src/assets/images/jakub-zerdzicki-uxYLtGRyGKQ-unsplash.jpg',
//   image33: './src/assets/images/vivint-solar-9CalgkSRZb8-unsplash.jpg',
//   image34: './src/assets/images/austin-distel-wawEfYdpkag-unsplash.jpg',
//   image35: './src/assets/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg',
//   image36: './src/assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',
//   image37: './src/assets/images/ben-kolde-FaPxZ88yZrw-unsplash.jpg',
//   image38: './src/assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg',
//   image39: './src/assets/images/claudio-schwarz-sLfUA03zaOk-unsplash.jpg',
//   image40: './src/assets/images/thisisengineering-WjOWazUPAss-unsplash.jpg',

//   card1Image: './src/assets/images/Privatkunden.svg',
//   card2Image: './src/assets/images/Geschaeftskunden.svg',
//   card3Image: './src/assets/images/Smart-Home-Loesungen.svg',
//   card4Image: './src/assets/images/Lichtinstallation.svg',

//   image404: './src/assets/images/404.svg',

// };

import { cdColorsLegacy as cdColors } from '../utils/cdColors';


const cdCopy = {
  sectionHero_Heading: 'Über uns - Elektro Peters GmbH',
  sectionHero_Subheading: '',
  sectionHero_Paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

  sectionTextAndImage_Heading: 'Unser Leistungsangebot',
  sectionTextAndImage_Paragraph: 'Unser Leistungsspektrum umfasst:',
  listitem1: '• Elektrotechnik: Moderne Elektroinstallationen, die Ihr Zuhause sicherer und komfortabler machen. Unsere Experten implementieren die neuesten Technologien für ein effizientes und vernetztes Zuhause.',
  listitem2: '• Wärmepumpen: Innovative und umweltfreundliche Heiz- und Kühllösungen. Wärmepumpen nutzen erneuerbare Energiequellen und sind eine effiziente Alternative zu herkömmlichen Heizsystemen.',
  listitem3: '• Photovoltaik-Anlagen: Nutzen Sie die Kraft der Sonne zur Stromerzeugung. Wir planen, installieren und warten Photovoltaikanlagen, die Ihre Energiekosten senken und zur Nachhaltigkeit Ihres Haushalts oder Unternehmens beitragen.',
  listitem4: '',
  listitem5: '',
};



const About = () => {
  const buttonPrimaryProps = {
    buttonPrimaryCaption: '',
    buttonPrimaryLink: '',
  };

  const listItems = [
    'Elektroinstallation – Planung und Umsetzung elektrischer Anlagen für private und gewerbliche Kunden.',
    'Smarte Haustechnik – Installation und Integration von Smart-Home-Systemen für mehr Komfort und Sicherheit.',
    'Photovoltaik-Anlagen – Beratung, Montage und Wartung für nachhaltige Energiegewinnung.',
    'E-Mobilität – Einrichtung und Installation von Ladestationen für Elektrofahrzeuge.',
    'Beleuchtungskonzepte – Design und Installation energieeffizienter und stimmungsvoller Beleuchtung.',
    'Fehlerdiagnose und Reparatur – Schnelle Behebung von Störungen und Defekten an Elektroanlagen.',
    'Prüfung und Wartung – Regelmäßige Überprüfung elektrischer Anlagen für Sicherheit und Zuverlässigkeit.',
    'Netzwerk- und Kommunikationstechnik – Einrichtung moderner IT- und Kommunikationsinfrastruktur.',
    'Altbausanierung – Modernisierung alter Elektroinstallationen nach aktuellen Standards.',
    // Add more items as needed
  ];

// 

// 

// 

// 

  return (
    <>
      <div className="">
        <Header></Header>
        <SectionHero
          heading={cdCopy.sectionHero_Heading}
          subheading={cdCopy.sectionHero_Subheading}
          paragraph={cdCopy.sectionHero_Paragraph}
          image={cdImages.image8}
          logo={''}
          background={cdColors.secondaryBackgroundColorLight}>
        </SectionHero>
        <SectionTextAndImage 
          heading={cdCopy.sectionTextAndImage_Heading}
          paragraph={cdCopy.sectionTextAndImage_Paragraph}
          image={cdImages.image10}
          buttonPrimaryProps={buttonPrimaryProps}
          listItems={listItems}
        />
        <SectionDivider></SectionDivider>
        <SectionContact 
        imageSrc={cdImages.image38}
        style={{backgroundColor: cdColors.quaternaryBackgroundColorLight}}>
        </SectionContact>
        <Footer></Footer>
      </div>
    </>
  )
}

export default About