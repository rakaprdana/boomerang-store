import ProductCard from "../components/productCard";

const ProductListPage = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-center py-8 text-4xl font-bold">Our Product</h1>
        <hr className="border-t-4 ml-4 mt-2 w-3/4 border-black rounded-full" />
      </div>
      <ProductCard />
    </>
  );
};

export default ProductListPage;
