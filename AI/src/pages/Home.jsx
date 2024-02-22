import React from "react";
import logo from "./logo (2).png";
function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-5 gap-4">
        {/* line 1 */}
        <div className="border-purple-500 border p-5 pl-6 w-fit">
          <div className="flex flex-col border-purple-500 border">
            <a
              className="flex items-center gap-1 bg-pink-500 w-fit pl-2 pt-1 pr-2 pb-1 rounded-full font-Fredoka text-sm"
              href=""
            >
              <span className="w-6">
                <img src={logo} alt="" />
              </span>
              <p>
                <span className=" font-semibold">20%</span> DISCOUNT FOR{" "}
                <span className=" font-semibold"> 1 MONTH </span> ACCOUNT
              </p>
            </a>
          </div>
          <div className=" font-Varela text-7xl">
            <div className=" flex">
              <div>
                <p>The Next <br /> <span>Generation</span></p>
              </div>
              <div className="font-Fredoka text-lg">
                <a href="">Get Started</a>
              </div>
            </div>
            <span>Payment Method</span>
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            labore expedita vel explicabo, suscipit maxime impedit perspiciatis.
            Id maxime repellat itaque porro, minus doloribus dolorem iusto
            sapiente saepe. Doloremque, sit?
          </div>
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          illo animi quae repellat, debitis aliquid quidem eius ex eum nihil
          vitae iure odio totam molestias ipsa facere sed placeat repellendus.
          Saepe, ipsa corporis illum laborum fugiat alias, quo possimus natus
          commodi quasi quas eaque voluptate!
        </div>

        {/* line 2 */}
        <div></div>
        <div></div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
