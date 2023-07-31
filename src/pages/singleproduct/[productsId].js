import { addToBuild } from "@/redux/fetures/build/buildSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const Singleproduct = ({ product }) => {
  const dispatch = useDispatch();
  // Handle the case when product data is not available (optional)
  if (!product) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  const handleAddToBuild = (product) => {
    dispatch(addToBuild(product));
    console.log(product);
    alert("Component Added");
  };

  return (
    <div className="bg-white">
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <Image height={100} width={450} alt="ecommerce" src={product.img} />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {product.otherfeatures.Brand}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.name}
              </h1>
              <div className="card-actions justify-start font-semibold text-black">
                <div className="badge badge-outline">
                  Brand:{product.otherfeatures.Brand}
                </div>

                <div className="badge badge-outline">
                  Stock:{product.Status}
                </div>
                <div className="badge badge-outline">
                  Category:{product.Category}
                </div>
              </div>
              <div class="flex mb-4 mt-3">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">{product.Rating}</span>
                </span>
              </div>
              <p class="leading-relaxed">{product.Description}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex ml-6 items-center">
                  <div class="relative">
                    {product.Category == "Processor" && (
                      <ul>
                        <li className="text-black font-semibold text-start">
                          Clock Speed: {product.features.ClockSpeed}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Cache: {product.features.Cache}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Socket: {product.features.Socket}
                        </li>
                        <li className="text-black font-semibold text-start">
                          CPU Cores: {product.features.CPUCores}
                        </li>
                        <li className="text-black font-semibold text-start">
                          CPU Threads: {product.features.CPUThreads}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Voltage: {product.otherfeatures.Voltage}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Graphics: {product.features.Graphics}
                        </li>
                      </ul>
                    )}
                    {product.Category == "RAM" && (
                      <ul>
                        <li className="text-black font-semibold text-start">
                          Capacity: {product.otherfeatures.specification}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Type: {product.otherfeatures.type}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Speed: {product.otherfeatures.speed}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Voltage: {product.otherfeatures.voltage}
                        </li>
                      </ul>
                    )}
                    {product.Category == "Motherboard" && (
                      <ul>
                        <li className="text-black font-semibold text-start">
                          Socket: {product.otherfeatures.socket}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Chipset: {product.otherfeatures.chipset}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Memory Type: {product.otherfeatures.memoryType}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Form Factor: {product.otherfeatures.formFactor}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Multi GPU: {product.otherfeatures.multiGPU}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Connectivity:{" "}
                          {product.otherfeatures.connectivity.audioPorts}
                        </li>
                      </ul>
                    )}
                    {product.Category == "Monitor" && (
                      <ul>
                        <li className="text-black font-semibold text-start">
                          Model: {product.otherfeatures.model}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Display Size: {product.otherfeatures.displaySize}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Pannel type: {product.otherfeatures.resolution}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Form Factor: {product.otherfeatures.panelType}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Refresh Rate: {product.otherfeatures.refreshRate}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Connectivity: {product.otherfeatures.connectivity}
                        </li>
                      </ul>
                    )}
                    {product.Category == "Storage" && (
                      <ul>
                        <li className="text-black font-semibold text-start">
                          Capacity: {product.otherfeatures.capacity}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Interface: {product.otherfeatures.interface}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Compatibility: {product.otherfeatures.compatibility}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Form Factor: {product.otherfeatures.formFactor}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Data Transfer Rate:{" "}
                          {product.otherfeatures.dataTransferRate}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Dimension: {product.otherfeatures.dimensions}
                        </li>
                      </ul>
                    )}
                    {product.Category == "Power Supply" && (
                      <ul>
                        <li className="text-black font-semibold text-start">
                          Model: {product.otherfeatures.model}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Wattage: {product.otherfeatures.wattage}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Efficiency: {product.otherfeatures.efficiency}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Modularity : {product.otherfeatures.modularity}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Fan Size: {product.otherfeatures.fanSize}
                        </li>
                        <li className="text-black font-semibold text-start">
                          protections : {product.otherfeatures.protections}
                        </li>
                      </ul>
                    )}
                    {product.Category == "GPU" && (
                      <ul>
                        <li className="text-black font-semibold text-start">
                          Model: {product.otherfeatures.model}
                        </li>
                        <li className="text-black font-semibold text-start">
                          VRAM: {product.otherfeatures.VRAM}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Interface: {product.otherfeatures.interface}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Memory Bus: {product.otherfeatures.memoryBus}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Power Connectors:{" "}
                          {product.otherfeatures.powerConnectors}
                        </li>
                        <li className="text-black font-semibold text-start">
                          Stream Processors :{" "}
                          {product.otherfeatures.streamProcessors}
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  $:{product.Price}
                </span>
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Buy Now
                </button>
                <button
                  onClick={() => handleAddToBuild(product)}
                  class="btn ms-2 text-white"
                >
                  Add to build
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="reviewcard m-auto sm:w-56 xl:w-fit">
        <h2 className="text-black font-semibold text-2xl mb-3">
          Our valuable customers feedback
        </h2>
        {product.Reviews.map((review, index) => (
          <p
            key={index}
            className="shadow-md mb-3 text-center text-black p-2 singerivewcard"
            style={{ textAlign: "left" }}
          >
            {index + 1}. {review}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Singleproduct;

// Implement getServerSideProps to fetch data for a specific product
export async function getServerSideProps({ params }) {
  // if (typeof window === undefined) {
  //   return {
  //     props: {
  //       product: [],
  //     },
  //   };
  // }
  const { productsId } = params;

  // Fetch the data for the specific product using its ID
  const response = await fetch(`${process.env.URL}/api/products`);
  const products = await response.json();
  const product = products.find((product) => product._id === productsId);

  return {
    props: {
      product,
    },
  };
}
