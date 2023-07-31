// import Link from "next/link";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const AddToBuild = () => {
//   const products = useSelector((state) => state.pcbuild.products);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     // Dispatch the action to load products from local storage
//     dispatch({ type: "pcbuild/loadProductsFromLocalStorage" });
//   }, [dispatch]);

//   return (
//     <div>
//       <h1 className="text-black text-2xl font-bold text-center">
//         Welcome to PC Builder
//       </h1>
//       {products.length === 0 ? (
//         <>
//           <p>No products added to the build yet.</p>
//           <Link href="/">
//             <button className="addbtn">Add component</button>
//           </Link>
//         </>
//       ) : (
//         <div>
//           {products.map((product) => (
//             <div key={product.id}>
//               {/* Display the product details */}
//               <div className="m-auto buildcard ">
//                 <div className="flex">
//                   <button className="addbtn">Add Component</button>
//                   <p className="ms-3">{product?.name}</p>
//                   <button
//                     onClick={() => handleRemoveFromBuild(product._id)}
//                     className="removebtn"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddToBuild;
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import add from "../Images/add.png";
import remove from "../Images/remove.png";
import Image from "next/image";
import auth from "@/auth";
import { getSession } from "next-auth/react";

const AddToBuild = ({ session }) => {
  const products = useSelector((state) => state.pcbuild.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to load products from local storage
    dispatch({ type: "pcbuild/loadProductsFromLocalStorage" });
  }, [dispatch]);

  const handleRemoveFromBuild = (productId) => {
    // Dispatch the action to remove the product from the build
    dispatch({ type: "pcbuild/removeProduct", payload: productId });
  };

  const categories = [
    "Processor",
    "Motherboard",
    "RAM",
    "Power Supply",
    "Storage",
    "Monitor",
  ];

  // Function to check if at least 5-6 components are added
  const isBuildComplete = products.length >= 5;

  return (
    <div className="bg-white p-10 font-semibold">
      <h1 className="text-black text-2xl font-bold text-center">
        Welcome to PC Builder
      </h1>
      {products.length === 0 ? (
        <>
          <p>No products added to the build yet.</p>
          <Link href="/">
            <button className="homeadd">Add component</button>
          </Link>
        </>
      ) : (
        <div className="categories text-center sm:max-w-fit mx-auto text-black ">
          {categories.map((category) => (
            <div key={category}>
              <h2>{category}</h2>
              {products
                .filter((product) => product.Category === category)
                .map((product) => (
                  <div key={product.id}>
                    {/* Display the product details */}
                    <div className="m-auto buildcard shadow-md">
                      <div className="flex justify-between">
                        <Link
                          href={`/${category
                            .toLowerCase()
                            .replace(/\s/g, "-")}`}
                        >
                          <button className="addbtn justify-end">
                            <Image src={add} alt="" height={50} width={50} />
                          </button>
                        </Link>
                        <Image
                          src={product?.img}
                          alt=""
                          height={50}
                          width={100}
                        />
                        <div className="flex flex-col">
                          <p className="ms-3 text-left">{product?.name}</p>
                          <p className="ms-3 text-left">{product?.Price}</p>
                          <p className="ms-3 text-left">{product?.Category}</p>
                          <p className="ms-3 text-left">{product?.Status}</p>
                          <p className="ms-3 text-left">{product?.Rating}</p>
                        </div>
                        <button
                          onClick={() => handleRemoveFromBuild(product._id)}
                          className="removebtn justify-end"
                        >
                          <Image src={remove} alt="" height={50} width={50} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              <Link href={`/${category.toLowerCase().replace(/\s/g, "-")}`}>
                <button className="choose-btn">Choose</button>
              </Link>
            </div>
          ))}
          <div>
            {isBuildComplete ? (
              <button className="complete-btn">Complete Build</button>
            ) : (
              <p>
                Add at least 5-6 components to enable the Complete Build button.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToBuild;

export const getServerSideProps = async (context) => {
  // Apply the custom auth middleware to the route
  await auth(context.req, context.res, async () => {
    // Fetch the session data and pass it as a prop to the page
    const session = await getSession(context);
    return {
      props: { session },
    };
  });

  // Since the middleware will handle the response, we don't need to return anything here.
  return {
    props: {}, // You can return an empty object here if needed
  };
};
