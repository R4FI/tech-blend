import { addToBuild } from "@/redux/fetures/build/buildSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const Monitor = ({ products }) => {
  if (!products) {
    <p>Loading......</p>;
  }
  // Filter products of the "Processor" category
  const processorProducts = products.filter(
    (product) => product.Category === "Monitor"
  );
  const dispatch = useDispatch();
  const handleAddToBuild = (product) => {
    dispatch(addToBuild(product));
    console.log(product);
    alert("Component Added");
  };
  return (
    <div className="bg-white">
      <h1 className="text-black text-2xl font-bold">All Monitor</h1>
      <div className="m-auto grid md:grid-cols-4 gap-5 mt-8 sm:grid-cols-6 p-5 xs:grid-cols-12">
        {processorProducts.map((product) => (
          <div key={product._id} className="cpu-card">
            <Image
              height={100}
              width={200}
              alt={product.name}
              src={product.img}
            />
            <h2 className="text-black font-bold">{product.name}</h2>
            <p className="text-gray-500">Price: ${product.Price}</p>
            <p className="text-gray-500">Category:{product.Category}</p>
            <p className="text-gray-500">Status: {product.Status}</p>
            <p className="text-gray-500">Rating: {product.Rating}</p>
            <button
              onClick={() => handleAddToBuild(product)}
              className="btn w-30 text-white"
            >
              Add to build
            </button>
            <Link href={`/singleproduct/${product?._id}`}>
              <button className="btn w-30 ms-3 text-white">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Monitor;
export async function getServerSideProps() {
  // Fetch the data for the specific product using its ID
  const response = await fetch(`${process.env.URL}/api/products`);
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}
