import { useState } from "react";
import Textfield from "../../components/textfield";
import Button from "../../components/button";
import { post } from "../../routes/api";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await post("login", {
        username: username,
        password: password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex h-screen w-full flex-col justify-center bg-[url(./background.jpg)] bg-cover bg-center px-5 md:px-[20%] lg:px-[30%]">
        <form
          onSubmit={(e) => handleOnLogin(e)}
          className="flex h-auto w-full flex-col items-center rounded-3xl bg-mono-white px-8 md:px-16 xl:px-[100px] py-14 gap-6 xl:gap-8"
        >
          <div className="flex flex-col items-center">
            <img
              src="./vite.svg"
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
          <div>
            <Button
              type="submit"
              color="primary"
              isLoading={isLoading}
              text="Login"
            />
          </div>
        </form>
      </div>
    </>
  );
}
