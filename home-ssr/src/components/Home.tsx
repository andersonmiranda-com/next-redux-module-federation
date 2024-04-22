import { Button } from "@cencommerce/paris-uikit";
import { addToCart } from "cart/cartReducer";
import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="hm-m-4">
      {/* <Image
        className="hm-w-full"
        alt="Home"
        width={500}
        height={300}
        src="https://cms-paris.ecomm.cencosud.com/cms/cl/ecommerce-content-assets/view_version/662190a647edd55ad07fdccd/a05ad0ab-990b-4ced-853f-d2a48021a4a4.webp"
      /> */}
      <div>localhost:3001</div>
      <div>MFE: Home</div>
      <Button
        onClick={() => {
          dispatch(addToCart(1));
        }}
        className="hm-mt-4"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default Home;
