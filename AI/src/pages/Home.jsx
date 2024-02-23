import React from "react";
import "./Home.css";
import logo from "./logo (2).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-5 gap-4">
        {/* line 1 */}
        <div className="m-9 p-4 w-fit">
          <div className="flex flex-col ">
            <a
              className=" mb-8 flex items-center gap-1 ad-blue w-fit pl-2 pt-1 pr-2 pb-1 rounded-full font-Fredoka text-sm"
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
          <div className=" font-Varela text-7xl  text-[color:var(--text-color)] ">
            <div className=" flex">
              <div>
                <p>
                  The Next <br />{" "}
                  <span className=" bg-gradient-radial leading-snug  inline-block text-transparent bg-clip-text">
                    Generation
                  </span>
                </p>
              </div>
              <div className=" ml-10 mt-3 font-Fredoka leading-6 flex text-lg border-2 w-24 h-24 p-10 rounded-full border-blue-200 items-center justify-center  ">
                <a className="" href="">
                  Get &nbsp;
                  <span>
                    <FontAwesomeIcon
                      className=" text-xs"
                      icon={faArrowUpRightFromSquare}
                    />
                  </span>
                  Started
                </a>
              </div>
            </div>
            <span>Payment Method.</span>
          </div>
          <div className=" font-Fredoka w-[color:var(--div-width)] p-2 text-lg text-[color:var(--text-color)] ">
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
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          accusantium maxime autem illum. Atque, repellat consequatur pariatur
          soluta error amet, non aperiam esse aliquam quos ipsum mollitia sint,
          architecto maxime.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          accusantium maxime autem illum. Atque, repellat consequatur pariatur
          soluta error amet, non aperiam esse aliquam quos ipsum mollitia sint,
          architecto maxime.
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          accusantium maxime autem illum. Atque, repellat consequatur pariatur
          soluta error amet, non aperiam esse aliquam quos ipsum mollitia sint,
          architecto maxime.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          accusantium maxime autem illum. Atque, repellat consequatur pariatur
          soluta error amet, non aperiam esse aliquam quos ipsum mollitia sint,
          architecto maxime.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          accusantium maxime autem illum. Atque, repellat consequatur pariatur
          soluta error amet, non aperiam esse aliquam quos ipsum mollitia sint,
          architecto maxime.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          accusantium maxime autem illum. Atque, repellat consequatur pariatur
          soluta error amet, non aperiam esse aliquam quos ipsum mollitia sint,
          architecto maxime.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          accusantium maxime autem illum. Atque, repellat consequatur pariatur
          soluta error amet, non aperiam esse aliquam quos ipsum mollitia sint,
          architecto maxime.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          accusantium maxime autem illum. Atque, repellat consequatur pariatur
          soluta error amet, non aperiam esse aliquam quos ipsum mollitia sint,
          architecto maxime.
        </div>
      </div>
    </div>
  );
}

export default Home;
