import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToBuild } from "@/redux/fetures/build/buildSlice";
const Product = ({ products }) => {
  const dispatch = useDispatch();
  const handleAddToBuild = (product) => {
    dispatch(addToBuild(product));
    console.log(product);
    alert("Component Added");
  };
  return (
    <div className=" mt-10 p-10">
      <h1 className="text-2xl text-black text-center font-extrabold">
        All PC Components
      </h1>
      <hr />
      <div className="m-auto grid md:grid-cols-4 gap-5 mt-8 sm:grid-cols-6 p-5 xs:grid-cols-12">
        {products?.map((product) => (
          <div key={product.id}>
            <div className="m-auto card text-black shadow-xl productcard">
              <figure>
                <Image src={product.img} alt="" height={300} width={200} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <div className="card-actions justify-start font-semibold">
                  <div className="badge badge-outline">
                    Brand:{product.otherfeatures.Brand}
                  </div>

                  <div className="badge badge-outline">
                    Stock:{product.Status}
                  </div>
                  <div className="badge badge-outline">
                    Category:{product.Category}
                  </div>
                  <div className="badge badge-outline">
                    Rating:{product.Rating}
                  </div>
                </div>
                <div className="card-title text-red-500">
                  Price:${product.Price}
                </div>

                <div className="card-actions justify-start">
                  <Link href={`/singleproduct/${product?._id}`}>
                    <button className="btn w-30 text-white">
                      View Details
                    </button>
                  </Link>

                  <button
                    onClick={() => handleAddToBuild(product)}
                    className="btn w-30 text-white"
                  >
                    Add to build
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
