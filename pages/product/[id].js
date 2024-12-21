import { useRouter } from "next/router";

const products = [
  {
    id: 1,
    image:
      "https://static.wixstatic.com/media/25c77d_d29dc281c5e64b3b93755e9fe1fe6327~mv2.png",
    title: "CICD Pipelines Workshop",
    price: "₹1,000.00",
    description: "Learn about CICD pipelines in-depth with this workshop.",
  },
  {
    id: 2,
    image:
      "https://static.wixstatic.com/media/25c77d_9f6e4176a67f4cef855aaeda62a8cd50~mv2.png",
    title: "MERN Stack Development Course",
    price: "₹1,500.00",
    description:
      "Master full-stack development with this comprehensive MERN course.",
  },
  {
    id: 3,
    image:
      "https://static.wixstatic.com/media/25c77d_d92e696c41294f34a1a5b5b1c13a1966~mv2.png",
    title: "DevOps Fundamentals Training",
    price: "₹150.00",
    description: "An introductory course to DevOps fundamentals.",
  },
];

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center">Product not found!</p>;

  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-4 text-3xl font-bold text-center">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-1/2 mx-auto mb-4 rounded-lg shadow-md"
      />
      <p className="mb-2 text-xl text-center text-gray-700">
        Price: {product.price}
      </p>
      <p className="text-lg text-center">{product.description}</p>
    </div>
  );
}
