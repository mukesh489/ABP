export default function ProductCard({ id, image, title, price }) {
  return (
    <div className="w-full transition duration-300 transform border rounded-lg shadow-md hover:shadow-xl hover:scale-105">
      <a href={`/product/${id}`} className="block overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-56 transition-transform duration-500 hover:scale-110"
        />
      </a>
      <div className="p-6 bg-white">
        <h2 className="mb-2 text-xl font-bold text-gray-800">{title}</h2>
        <p className="mb-4 text-gray-600">Price: {price}</p>
        <a
          href={`/product/${id}`}
          className="px-4 py-2 text-sm font-medium text-white transition bg-blue-500 rounded hover:bg-blue-600"
        >
          View Details
        </a>
      </div>
    </div>
  );
}
