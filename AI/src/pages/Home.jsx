import React from "react";
import "./Home.css";
import logo from "./logo (2).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 maingrid gap-4">
        {/* line 1 */}
        <div className="m-9 p-4 w-fit">
          <div className="flex flex-col ">
            <a
              className=" mb-8 flex items-center gap-1 bg-blue-200 w-fit pl-2 pt-1 pr-2 pb-1 rounded-full font-Fredoka text-sm"
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
                  <div className="   h-20 overflow-hidden flex flex-col">
                    <span className=" bg-gradient-radial leading-snug  inline-block text-transparent bg-clip-text">
                      Generation
                    </span>
                    <span className=" bg-gradient-radial leading-snug  inline-block text-transparent bg-clip-text">
                      Advanced
                    </span>
                    <span className=" bg-gradient-radial leading-snug  inline-block text-transparent bg-clip-text">
                      Version
                    </span>
                    <span className=" bg-gradient-radial leading-snug  inline-block text-transparent bg-clip-text">
                      Generation
                    </span>
                  </div>
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
        <div className=" rounded-2xl flex items-center justify-center formbg">
          <div className="myoverlay"></div>
          <form
            className="p-8 font-Fredoka flex flex-col gap-6 w-1/2 bg-[color:var(--body-backgorund)] text-[color:var(--text-color)] rounded-xl sd"
            action=""
          >
            <p className=" flex items-center justify-center font-semibold text-lg">
              We Are Offering 14 Days Free Trial
            </p>
            <div className="flex flex-col gap-3">
              <label htmlFor="">
                First Name <span className=" text-blue-500">*</span>{" "}
              </label>
              <input
                className=" p-2 text-lg border-2 rounded-lg outline-none"
                type="text"
                value={"lorem ipsun"}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">
                Last Name <span className=" text-blue-500">*</span>{" "}
              </label>
              <input
                className=" p-2 text-lg border-2 rounded-lg outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">
                Email <span className=" text-blue-500">*</span>{" "}
              </label>
              <input
                className=" p-2 text-lg border-2 rounded-lg outline-none"
                type="text"
              />
            </div>
            <button
              type="submit"
              className=" bg-[color:var(--link-color)] p-3 rounded-lg text-white bg-bl"
            >
              FREE TRIAL
            </button>
          </form>
        </div>

        {/* line 2 */}
        <div className="master items-center text-3xl justify-center flex gap-12 font-Fredoka text-[color:var(--text-color)] pt-16 pb-16">
          <div>
            {" "}
            3800+{" "}
            <span className=" inline-block text-transparent bg-clip-text tbg">
              USER ACTIVE{" "}
            </span>{" "}
          </div>
          <span> | </span>
          <div>
            {" "}
            230+{" "}
            <span className=" inline-block text-transparent bg-clip-text tbg">
              TRUSTED BY COMPANY{" "}
            </span>{" "}
          </div>
          <span> | </span>
          <div>
            {" "}
            $230M+{" "}
            <span className=" inline-block text-transparent bg-clip-text tbg">
              {" "}
              TRANSACTION{" "}
            </span>{" "}
          </div>
        </div>
        <div className="p-4  m-9 text-[color:var(--text-color)]">
          <div className=" flex items-start flex-col gap-3 w-3/4">
            <p className=" font-Varela text-4xl leading-snug tracking-wide">
              You do the business, <br /> we'll handle the money.
            </p>
            <p className=" font-Fredoka text-lg">
              with the right credit card, you can improve your fainancial life
              by building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market
            </p>
            <button className=" pt-2 pb-2 pl-6 pr-6 text-lg font-Fredoka rounded-lg bg-[color:var(--link-color)] text-white">
              Get started
            </button>
          </div>
        </div>

        <div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <p>Rewards</p>
              <p>The best credit cards offer some tantalizing combinatuions o fpromotions and proces</p>
            </div>
          </div>
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
