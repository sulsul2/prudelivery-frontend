import { useEffect, useState } from "react";
import Card from "../../components/card";
import { MdSwipeUp } from "react-icons/md";
import Textfield from "../../components/textfield";
import { useNavigate } from "react-router-dom";

export default function ListResto() {
  const [filteredRooms, setFilteredRooms] = useState<any>([]);
  const [search, setSearch] = useState<string | undefined>("");
  const navigate = useNavigate();
  const rooms = [
    {
      name: "Restaurant A",
      rating: 1,
      photo_url: "./mekdi.jpg",
    },
    {
      name: "Restaurant B",
      rating: 2,
      photo_url: "./mekdi.jpg",
    },
    {
      name: "Restaurant C",
      rating: 5,
      photo_url: "./mekdi.jpg",
    },
  ];

  useEffect(() => {
    if (search != undefined && search != "") {
      const filtered = rooms.filter((item: any) =>
        Object.values(item).some((value: any) =>
          String(value).toLowerCase().includes(search.toLowerCase())
        )
      );
      setFilteredRooms(filtered);
    } else {
      setFilteredRooms(rooms);
    }
  }, [search]);

  return (
    <>
      <div className="w-full h-screen bg-[url(./gopud.jpg)] bg-cover">
        <div className="w-full flex flex-col items-center justify-center absolute bottom-48 text-white gap-2">
          <MdSwipeUp size={48} />
          <p className="text-[36px] font-semibold">SWIPE UP</p>
        </div>
      </div>
      <div className="w-full flex flex-col pb-10 bg-background min-h-screen pt-[100PX] px-4 xl:px-28 gap-12 items-center">
          <div className="flex mb-10 flex-col-reverse md:flex-row items-start gap-2 md:gap-0">
            <div className="w-[400px]">
              <Textfield
                type={"search"}
                placeholder={"Mau makan apa hari ini?"}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-3 justify-items-center gap-y-10">
            {filteredRooms.map((item: any) => {
              console.log(item.condition_status);
              return (
                <Card
                  nama={item.name}
                  rating={item.rating}
                  link={item.photo_url}
                  onClick={() => navigate("/menu")}
                />
              );
            })}
          </div>  
      </div>
    </>
  );
}
