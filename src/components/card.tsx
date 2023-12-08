import { MouseEventHandler, useContext } from "react";
import StaticStarRating from "./star";
import Button from "./button";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { CartContext } from "../contexts/cartContext";
import { FormatRupiah } from "@arismun/format-rupiah";

function Card({
  id,
  nama,
  rating,
  link,
  button,
  price,
  stok,
  diskon,
  onClick,
}: {
  id: number;
  nama: string;
  rating: number;
  link: string;
  button?: boolean;
  price: number;
  stok: number;
  diskon: number;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}) {
  const cartContext = useContext(CartContext);
  const product = {
    id: id,
    name: nama,
    price: price,
    stok: stok,
    diskon: diskon,
  };

  return (
    <>
      <div
        className={`w-full max-w-[360px] h-fit bg-white ${
          button ? "" : "hover:bg-mono-light_grey rounded-[20px]"
        } shadow-lg px-2 pt-2 pb-5 cursor-pointer relative`}
        onClick={onClick}
      >
        <div className="w-full h-fit flex flex-col items-center justify-between gap-5 px-6">
          <img
            src={link != null ? link : "/assets/image_not_found.png"}
            alt="Menu"
            className="w-full h-[200px] object-cover rounded-[20px]"
          />
          <p className="font-bold text-start w-full text-[24px]">
            {nama}
            <br />
            {button ? (
              <div className="w-full flex justify-between">
                <p className="font-normal text-[16px]">
                  {stok < 5 ? (
                    <p className="">
                      <span className="line-through"><FormatRupiah value={price} /></span>
                      {"  "}{diskon}
                    </p>
                  ) : (
                    <FormatRupiah value={price} />
                  )}
                </p>
                <p className="font-normal text-[16px]">Stok: {stok}</p>
              </div>
            ) : (
              <StaticStarRating rating={rating} starSize="100px" />
            )}
          </p>
          {button &&
            cartContext &&
            (cartContext.cart[id]?.qty > 0 ? (
              <div className="w-full flex justify-center items-center text-orange-primary gap-4">
                <div
                  className=""
                  onClick={() => {
                    cartContext && cartContext.cart[id].qty--;
                    cartContext?.setCart([...cartContext.cart]);
                  }}
                >
                  <CiCircleMinus size={32} />
                </div>
                <p className="text-[20px]">
                  {cartContext && cartContext.cart[id].qty}
                </p>
                <div
                  className={`${
                    cartContext.cart[id].qty ==
                    cartContext.cart[id].product.stok
                      ? "invisible"
                      : "block"
                  }`}
                  onClick={() => {
                    cartContext.cart[id].qty++;
                    cartContext?.setCart([...cartContext.cart]);
                  }}
                >
                  <CiCirclePlus size={32} />
                </div>
              </div>
            ) : (
              <Button
                type={"button"}
                color="secondary"
                text="Add"
                onClick={() => {
                  cartContext.cart[id].product = product;
                  cartContext.cart[id].qty++;
                  cartContext?.setCart([...cartContext.cart]);
                }}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Card;
