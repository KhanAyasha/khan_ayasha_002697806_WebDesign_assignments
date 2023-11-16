import React from 'react'
import PageCard from '../Layout/PageCard';
import art1 from './alcohol--art.jpg';
import art2 from './graffiti.jpg';
import art3 from './oilpaint.jpg';
import "./home.css"
const Home = () => {

  const homeData = [{
    img: art1,
    name: "Happiness",
    styleofArt: "Alcohol base Paints",
    quotes: "Alcohol-based painting typically refers to the use of alcohol-based inks or markers in the creation of art. These inks contain alcohol as a solvent, and they are known for their vibrant colors, quick-drying properties, and versatility."
  },
  {
    img: art2,
    name: "Faces",
    styleofArt: "Mandala",
    quotes: "A mandala is a geometric, circular design that holds spiritual or symbolic significance in various cultures around the world. Mandala art has been used for centuries as a tool for meditation, self-discovery, and expressing creativity."
  },
  {
    img: art3,
    name: "Anonymous",
    styleofArt: "Oil base Painitng",
    quotes: "Oil painting is a traditional and widely practiced that involves using pigments mixed with a drying oil, to create a variety of colors. The popularity can be attributed to its versatility, long drying time, and the richness of colors."
  }]
  return (
    <>
     
      <div className="banner-img">
        <div className="title">
          <h2>
            Boylston Street Art Gallery, a way to organize you chaotic art.
            <br />
          </h2>
        </div>
      </div>
      <div >
        <div>
              <PageCard data = {homeData}/>
        </div>
      </div>
    </>
  );
};

export default Home;
// }

// export default Home