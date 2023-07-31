import RootLayouts from "@/components/Layouts/RootLayouts";
import Banner from "@/components/UI/Banner";
import Product from "@/components/UI/Product/Product";
import Footer from "@/components/shared/Footer";
import React from "react";
import AddToBuild from "./addtobuild";

const HomePage = ({ products }) => {
  return (
    <div className="bg-white">
      <Banner />
      <Product products={products} />
      <Footer />
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.URL}/api/products`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
