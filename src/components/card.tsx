import { MouseEventHandler } from "react";
import StaticStarRating from "./star";
import Button from "./button";

function Card({
  nama,
  rating,
  link,
  button,
  price,
  stok,
  onClick,
}: {
  nama: string;
  rating: number;
  link: string;
  button?: boolean;
  price?: string;
  stok?: number;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}) {
  return (
    <>
      <div
        className="w-full max-w-[360px] h-fit bg-white hover:bg-mono-light_grey rounded-[20px] shadow-lg px-2 pt-2 pb-5 cursor-pointer relative"
        onClick={onClick}
      >
        <div className="w-full h-fit flex flex-col items-center justify-between gap-5 px-6">
          <img
            src={link != null ? link : "/assets/image_not_found.png"}
            alt="Kamar"
            className="w-full h-[200px] object-cover rounded-[20px]"
          />
          <p className="font-bold text-start w-full text-[24px]">
            {nama}
            <br />
            {button ? (
              <div className="w-full flex justify-between">
                <p className="font-normal text-[16px]">{price}</p>
                <p className="font-normal text-[16px]">Stok: {stok}</p>
              </div>
            ) : (
              <StaticStarRating rating={rating} starSize="100px" />
            )}
          </p>
          {button && <Button type={"button"} color="secondary" text="Add" />}
        </div>
      </div>
    </>
  );
}

export default Card;
