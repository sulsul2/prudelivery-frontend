import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import Card from "../../components/card";
import Button from "../../components/button";
import { useEffect, useState } from "react";
import { getWithAuth } from "../../routes/api";
import { FormatRupiah } from "@arismun/format-rupiah";
import Modal from "../../components/modal";

export default function ProductResto() {
  const [menu, setMenu] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const token = localStorage.getItem("access_token");

  const getListMenu = async () => {
    setIsLoading(true);
    try {
      if (token) {
        const response = await getWithAuth(token, "menu");
        console.log(response);
        setMenu(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getListMenu();
  }, []);

  return (
    <>
      <Modal
        visible={showModal}
        onClose={() => setShowModal(false)}
        children={undefined}
      />
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
              <MdOutlineShoppingCart size={60} />
              <Button type={"button"} text="Checkout" />
            </div>
          </div>
          {isLoading ? (
            <div className="w-full flex justify-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-orange-primary animate-spin dark:text-gray-600 fill-orange-primary"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-wrap justify-items-center gap-12">
              <Card
                nama={menu && menu[0][1]}
                rating={5}
                link={"./nasgor.jpg"}
                button={true}
                price={<FormatRupiah value={menu && menu[0][2]} />}
                stok={menu && menu[0][3]}
              />
              <Card
                nama={menu && menu[1][1]}
                rating={5}
                link={
                  "https://asset.kompas.com/crops/krSLAkJhiYmOL3g6b6c-x_9p1sI=/98x0:944x564/750x500/data/photo/2023/04/14/6438d1d8bc59b.jpeg"
                }
                button={true}
                price={<FormatRupiah value={menu && menu[1][2]} />}
                stok={menu && menu[1][3]}
              />
              <Card
                nama={menu && menu[2][1]}
                rating={5}
                link={
                  "https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/soups/soto-betawi/main-header.jpg"
                }
                button={true}
                price={<FormatRupiah value={menu && menu[2][2]} />}
                stok={menu && menu[2][3]}
                diskon={menu && menu[2][4]}
              />
              <Card
                nama={menu && menu[3][1]}
                rating={5}
                link={
                  "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ4Q4oACRc_0zoqQZX1x_XqHHMNVIzm-YaawRnDG0NOCoLklLAJKXUdQ3_svrmp8cW0"
                }
                button={true}
                price={<FormatRupiah value={menu && menu[3][2]} />}
                stok={menu && menu[3][3]}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
