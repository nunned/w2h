import { motion } from "framer-motion";
import "./styles/HomePage.css";
import heroimg from "../assets/heroimg2.jpg";
import grid1 from "../assets/grid/grid1.jpg";
import grid2 from "../assets/grid/grid2.jpg";
import grid3 from "../assets/grid/grid3.jpg";
import grid4 from "../assets/grid/grid4.jpg";
import grid5 from "../assets/grid/grid5.jpg";
import grid6 from "../assets/grid/grid6.jpg";

function HomePage() {
  const imageVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.8 },
  };

  return (
    <>
      <div className="hero-section">
        <img src={heroimg} alt="Hero" className="hero-image" />
      </div>
      <div className="homepage-wrap">
        <div className="image-grid">
          <motion.img
            src={grid1}
            alt="Grid 1"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1 }}
          />
          <motion.img
            src={grid2}
            alt="Grid 2"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
          />
          <motion.img
            src={grid3}
            alt="Grid 3"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3 }}
          />
          <motion.img
            src={grid4}
            alt="Grid 4"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
          />
          <motion.img
            src={grid5}
            alt="Grid 5"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5 }}
          />
          <motion.img
            src={grid6}
            alt="Grid 6"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.6 }}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
