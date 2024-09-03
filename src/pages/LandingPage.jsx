import Button from "../components/Button";
import PicShop from "../assets/pic-shop.png";

const LandingPage = () => {
  return (
    <>
      <header className=" bg-gradient-to-br from-green-700 to-green-500 text-white py-40 pl-4 text-left">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="my-16 ml-8">
              <h1 className="text-4xl font-bold">Welcome to Boomerang Store</h1>
              <p className="text-xl">Discover our luxurious products</p>
              <div className="mt-4">
                <Button label="Login" variant="secondary" />
              </div>
            </div>
            <img src={PicShop} alt="PicShop" className="mr-8 w-1/3" />
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingPage;
