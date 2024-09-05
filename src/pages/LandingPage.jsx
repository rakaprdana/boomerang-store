import Button from "../components/Button";
import PicShop from "../assets/pic-shop.png";
import ProductListPage from "./ProductListPage";
import AboutTeam from "../components/aboutTeam";

const LandingPage = () => {
  return (
    <>
      <header className=" bg-gradient-to-br from-green-700 to-green-500 text-white py-40 pl-4 text-left">
        <div id="/home" className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="my-16 ml-8">
              <h1 className="text-8xl font-bold">Welcome to Boomerang Store</h1>
              <p className="ml-1 text-2xl">Discover our luxurious products</p>
              <div className="ml-1 mt-4">
                <Button label="Login" variant="secondary" />
              </div>
            </div>
            <img src={PicShop} alt="PicShop" className="mr-8 w-1/3" />
          </div>
        </div>
      </header>
      <AboutTeam />
      <ProductListPage />
    </>
  );
};

export default LandingPage;
