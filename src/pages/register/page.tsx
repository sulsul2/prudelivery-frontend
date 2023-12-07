import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../routes/api";
import Textfield from "../../components/textfield";
import Button from "../../components/button";
import { toastError, toastSuccess } from "../../components/toast";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  const navigate = useNavigate();

  const handleOnRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await post("register", {
        username: username,
        password: password,
        role: 'user',
        lat: latitude,
        lon: longitude,
        flag: true
      });
      console.log(response);
      toastSuccess('Register successfully')
      navigate("/login");
    } catch (error) {
      toastError("Register failed. Please try again")
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex h-screen w-full flex-col justify-center bg-[url(https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg)] bg-cover bg-center px-5 md:px-[20%] lg:px-[30%]">
        <form
          onSubmit={(e) => handleOnRegister(e)}
          className="flex h-auto w-full flex-col items-center rounded-3xl bg-mono-white px-8 md:px-16 xl:px-[100px] py-14 gap-6 xl:gap-8"
        >
          <div className="flex flex-col items-center">
            <img
              src="./deliver.jpg"
              alt="SiMentel"
              className="w-[100px] bg-cover"
            />
            <h1 className="text-mono-darkGrey font-bold text-[36px] xl:text-[64px] -mb-2 xl:-mb-5">
              PruDelivery
            </h1>
            <p className="text-mono-darkGrey text-[16px] xl:text-[24px]">
              Prudent Delivery and Order Food
            </p>
          </div>
          <Textfield
            required
            value={username}
            type={"field"}
            placeholder={"Your Username"}
            onChange={(val: any) => setUsername(val.target.value)}
          />
          <Textfield
            required
            value={password}
            type={"password"}
            placeholder={"Your password"}
            onChange={(val: any) => setPassword(val.target.value)}
          />
          <div className="w-full flex justify-between gap-1">
            <div className="w-full">
              <Textfield
                required
                value={latitude}
                type={"field"}
                placeholder={"Your location's latitude"}
                onChange={(val: any) => setLatitude(val.target.value)}
              />
            </div>
            <div className="w-full">
              <Textfield
                required
                value={longitude}
                type={"field"}
                placeholder={"Your location's longitude"}
                onChange={(val: any) => setLongitude(val.target.value)}
              />
            </div>
          </div>
          <p className="text-[20px]">Already have an account? <span className="text-orange-primary cursor-pointer hover:underline" onClick={() => navigate('/login')}>Login</span></p>
          <div>
            <Button
              type="submit"
              color="primary"
              isLoading={isLoading}
              text="Register"
            />
          </div>
        </form>
      </div>
    </>
  );
}
