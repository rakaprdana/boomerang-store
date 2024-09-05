import ProductCard from "../components/productCard";

const ProductListPage = () => {
  return (
    <>
      <div id="/products" className="ml-4 flex items-center">
        <h1 className="py-8 text-4xl font-bold">Our Product</h1>
        <hr className="border-t-4 ml-4 mt-2 w-4/5 border-black rounded-full" />
      </div>
      <ProductCard />
    </>
  );
};

export default ProductListPage;
