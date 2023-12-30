import KushCard from "../components/KushCards/KushCard"; // Adjust the import path as necessary
import "./styles/Seeds.css"; // Assuming you have a CSS file for styling

// Importing images
import image1 from "../assets/product_1.jpg";
import image2 from "../assets/product_2.jpg";
import image3 from "../assets/product_3.jpg";
// Continue importing other images as needed

const Seeds = () => {
  // Sample data for the products with imported images and titles
  const products = [
    {
      id: 1,
      imageSrc: image1,
      title: "Product Title 1",
      description:
        "Discover our latest product, designed for both durability and sleek aesthetics. Ideal for everyday use and professionals, it features innovative elements and superior craftsmanship. Experience a new level of excellence with this exceptional product.",
    },
    {
      id: 2,
      imageSrc: image2,
      title: "Product Title 2",
      description:
        "Experience unparalleled comfort and style with our premium product. Crafted with attention to detail, it offers durability and timeless elegance. Perfect for any environment, this product adds a touch of sophistication to your space.",
    },
    {
      id: 3,
      imageSrc: image3,
      title: "Product Title 3",
      description: "Elevate your daily routine with our cutting-edge product, featuring state-of-the-art technology and user-friendly interfaces. Ideal for those who value efficiency, it sets a new benchmark in its category. Discover how this innovative product can transform your life.",
    },
    // Add other products as needed
  ];

  return (
    <div className="wrap">
      <h1>Seeds</h1>
      <div className="cards-container">
        {products.map((product) => (
          <KushCard
            key={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Seeds;
