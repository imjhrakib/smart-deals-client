import React, { Suspense } from "react";
import LatesProducts from "../LatestProducts/LatesProducts";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-[200px]">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <LatesProducts
          latestProductsPromise={latestProductsPromise}
        ></LatesProducts>
      </Suspense>
    </div>
  );
};

export default Home;
