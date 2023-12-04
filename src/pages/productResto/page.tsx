import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import Card from "../../components/card";
import Button from "../../components/button";

export default function ProductResto() {
  return (
    <>
      <div className="w-full flex flex=col bg-background px-4 pb-10 xl:px-28 pt-[80px] gap-10">
        <div className="w-full flex flex-col gap-12">
          <div className="w-full flex justify-between">
            <div className="w-full flex gap-6">
              <img src="./mekidi.png" alt="" className="rounded-xl" />
              <div className="w-full flex flex-col gap-4">
                <p className="text-[48px] font-bold">McDonalds Dago</p>
                <p className="text-[28px] font-semibold flex items-center gap-2 text-red-600">
                  <IoLocationSharp />{" "}
                  <span className="text-black">Dago, Coblong, Bandung</span>
                </p>
                <p className="text-[20px] font-semibold">
                  Rating: <span className="text-yellow-600">★</span> 5
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-orange-primary hover:text-orange-secondary cursor-pointer">
              <MdOutlineShoppingCart size={60}/>
              <Button
                type={"button"}
                text="Checkout"
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-items-center gap-12">
            <Card
              nama={"Panas 1"}
              rating={5}
              link={"./panas.png"}
              button={true}
              price="Rp 40000"
              stok = {20}
            />
            <Card
              nama={"Panas 1"}
              rating={5}
              link={"./panas.png"}
              button={true}
              price="Rp 40000"
              stok = {20}
            />
            <Card
              nama={"Panas 1"}
              rating={5}
              link={"./panas.png"}
              button={true}
              price="Rp 40000"
              stok = {20}
            />
            <Card
              nama={"Panas 1"}
              rating={5}
              link={"./panas.png"}
              button={true}
              price="Rp 40000"
              stok = {20}
            />
          </div>
        </div>
      </div>
    </>
  );
}
