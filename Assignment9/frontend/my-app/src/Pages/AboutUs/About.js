import React from 'react'
import AboutCard1 from '../Layout/AboutCard1';
import "./About.css";
import art1 from './1.jpg';
import art2 from './2.jpg';
import art3 from './3.jpg';

const About = () => {

  const aboutUsData = [{
    img: art1,
    name: "Sitka Home Art Gallery",
    designation: "Sitka Home Art Gallery",
    quotes: "Sitka Home Art Gallery showcases the work of artist/owner Sitka in a beautiful space curated by his wife, Heloise. As a self-describe, contemporary impressionist, Sitka infuses his works with brillliant colors that reflect light, energy, and a light-hearted vibe. "
  },
  {
    img: art2,
    name: "Galerie d'Orsay",
    designation: "Galerie d'Orsay",
    quotes: "Galerie d'Orsay offers works ranging to early 20th century modernists such as Picasso and Miro to 21st century contemporary painters, print makers, and sculptors such as Bruno Zupan, Damien Hirst, and urban hip-hop artist Sen-1. "
  },
  {
    img: art3,
    name: "Gallery NAGA",
    designation: "Gallery NAGA",
    quotes: "NAGA specializes in contemporary art and studio furniture, typically unabashedly avant-garde and experimental.  Out of all the Newbury Street art galleries, Boston's NAGA is where you'll typically see the most cutting-edge pieces. "
  }];

  return (
    <div className="component">
      <h3 >About Us</h3>
      <p>
      If gallery-hopping is your idea of the perfect weekend experience, Newbury Street art galleries in Boston's fashionable Back Bay neighborhood are the ideal place to start.  Pair your art stroll with one of Back Bay's popular wine tasting tours, and you'll have a memorable afternoon.

The galleries located in the Victorian mansions along this 6-block stretch of Newbury Street showcase Boston's largest range of artistic periods and styles - everything from affordable art by emerging artists to museum-quality pieces by Old and New Masters.  

Many of the Newbury Street art galleries have been located on this famous 6-block long Boston shopping district for decades, and in a few cases, generations. 
       </p>
      <AboutCard1 data={aboutUsData}/>
    </div>
  )
}

export default About;