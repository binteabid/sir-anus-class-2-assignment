import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";

export default function Home() {
  return (

    <div className="homeContainer">              
      {/* Personal Description Section */}
      <div className="childContainer descriptionBox">
        <h1 className="heading">
          Hey,
          <br />
          This is <span className="highlight">Bint-e-Abid</span>
        </h1>
        <p className="bodyText">
          I am a passionate <span className="highlight"> Linguist, Educator, Author, Poet, Content Creator, an enthusiatic student - enrolled in GIAIC IT initiave Onsite Program ;</span> who always try to discover new domains of latest Knowledge and Information Technologies. I love learning,teaching, continuous professional development to improve my skills!
        </p>
      </div>

      {/* Profile Picture Section */}
      <div className="childContainer profilePictureBox">
        <div className="goldenFrame">
          <Image
            src="/Profile-Picture.png"
            alt="Profile Picture"
            className="profileImage"
            width={480}
            height={300}
          />
        </div>
      </div>
    </div>

  );
}
