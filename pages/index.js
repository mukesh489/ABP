import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import Services from "@/components/Services";
import RandomPosts from "@/components/RandomPosts";
import ContactForm from "@/components/ContactForm";
import Updates from "@/components/Updates";
import AboutABP from "@/components/AboutABP";
import Footer from "@/components/Footer";
const products = [
  {
    id: 1,
    image:
      "https://static.wixstatic.com/media/25c77d_d29dc281c5e64b3b93755e9fe1fe6327~mv2.png",
    title: "CICD Pipelines Workshop",
    price: "₹1,000.00",
  },
  {
    id: 2,
    image:
      "https://static.wixstatic.com/media/25c77d_9f6e4176a67f4cef855aaeda62a8cd50~mv2.png",
    title: "MERN Stack Development Course",
    price: "₹1,500.00",
  },
  {
    id: 3,
    image:
      "https://static.wixstatic.com/media/25c77d_d92e696c41294f34a1a5b5b1c13a1966~mv2.png",
    title: "DevOps Fundamentals Training",
    price: "₹150.00",
  },
  {
    id: 4,
    image:
      "https://static.wixstatic.com/media/25c77d_450667775dff47449d8afa8441e7bd4b~mv2.png",
    title: "React Advanced Workshop",
    price: "₹2,000.00",
  },
  {
    id: 5,
    image:
      "https://static.wixstatic.com/media/25c77d_629edf7118f545b8be817d377d1dad2f~mv2.png",
    title: "Cloud Fundamentals Training",
    price: "₹2,500.00",
  },
  {
    id: 6,
    image:
      "https://static.wixstatic.com/media/25c77d_d92e696c41294f34a1a5b5b1c13a1966~mv2.png",
    title: "Python for Beginners",
    price: "₹1,200.00",
  },
  {
    id: 7,
    image:
      "https://static.wixstatic.com/media/25c77d_9f6e4176a67f4cef855aaeda62a8cd50~mv2.png",
    title: "Full Stack Bootcamp",
    price: "₹3,000.00",
  },
  {
    id: 8,
    image:
      "https://static.wixstatic.com/media/25c77d_d29dc281c5e64b3b93755e9fe1fe6327~mv2.png",
    title: "Database Management Workshop",
    price: "₹1,000.00",
  },
  {
    id: 9,
    image:
      "https://static.wixstatic.com/media/25c77d_450667775dff47449d8afa8441e7bd4b~mv2.png",
    title: "Node.js Backend Mastery",
    price: "₹2,200.00",
  },
];

export default function Home() {
  const [visibleProducts, setVisibleProducts] = useState(3);

  const handleLoadMore = () => {
    setVisibleProducts(products.length);
  };

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <HeroSection />
      


      {/* Products & Services Section */}
      <div className="container p-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center">
          Products & Services
        </h1>
        

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          
        </div>

        {/* Load More Button */}
        {visibleProducts < products.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600 animate-bounce"
            >
              Load More
            </button>
            
          </div>
        )}
        <Services />
        <Updates />
        <AboutABP />

        {/* <RandomPosts /> */}
{/* <ContactForm /> */}
        <Footer/>

      </div>
    </div>
  );
}
