import React from "react";
import "./Home.css";
import logo from "./logo (2).png";
import star from "./star.png";
import send from "./send.png";
import folder from "./folder.png";
import p1 from "./matheus-ferrero-W7b3eDUb_2I-unsplash.jpg";
import p2 from "./luis-villasmil-hh3ViD0r0Rc-unsplash.jpg";
import p3 from "./toa-heftiba-O3ymvT7Wf9U-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
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

        <div className=" font-Fredoka flex flex-col gap-4 justify-center items-center">
          <div className="  flex gap-4  p-3 mybxw bg-slate-100 rounded-3xl ">
            <div className=" tbg rounded-full justify-center items-center w-16 h-16 flex">
              <img className=" w-10" src={star} alt="" />
            </div>
            <div className="flex flex-col w-96 ">
              <p className="text-xl">Rewards</p>
              <p className="">
                The best credit cards offer some tantalizing combinatuions of
                promotions and process
              </p>
            </div>
          </div>
          <div className="  flex gap-4  p-3 mybxw linksbg text-white rounded-3xl ">
            <div className=" tbg rounded-full justify-center items-center w-16 h-16 flex">
              <img className=" w-10" src={send} alt="" />
            </div>
            <div className="flex flex-col w-96 ">
              <p className="text-xl">Balance Transfer</p>
              <p className="">
                A balance transfer credit card can save you alot of money in
                intrest charges
              </p>
            </div>
          </div>
          <div className="flex gap-4  p-3 mybxw bg-slate-100 rounded-3xl ">
            <div className=" tbg rounded-full justify-center items-center w-16 h-16 flex">
              <img className=" w-10" src={folder} alt="" />
            </div>
            <div className="flex flex-col w-96 ">
              <p className="text-xl">100% Secured</p>
              <p className="">
                We take proactive steps make sure your information and
                transactions are secure
              </p>
            </div>
          </div>
        </div>

        <div className="master p-14  text-[color:var(--text-color)] flex justify-between items-center">
          <div className=" font-Varela text-6xl">
            What people are <br /> saying about us
          </div>
          <div className=" font-Fredoka text-2xl mr-20">
            Anything you need to accept card payments <br /> and grow your
            buisness anywhere on the planet.
          </div>
        </div>
        <div className="master text-[color:var(--text-color)] font-Fredoka  p-12 flex gap-4 items-center justify-center">
          <div className=" obg w-96  p-4 rounded-2xl flex flex-col gap-6">
            <span className=" text-8xl pt-9 flex items-center relative">
              <span className=" absolute">"</span>
            </span>
            <p className=" text-xl">
              money is only a tool. it will take you wherever you wish, but it
              will not replace you as the driver
            </p>
            <div className=" flex items-center gap-2">
              <div className=" w-14 h-14 rounded-full overflow-hidden object-center object-contain">
                <img className="w-full" src={p2} alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className=" font-medium text-xl ">Kenn Gallagher Jensen</h3>
                <p className="text-gray-500 text-base">Nationalist & Speaker</p>
              </div>
            </div>
          </div>
          <div className=" w-96 obg p-4 rounded-2xl flex flex-col gap-6">
            <span className=" text-8xl pt-9 flex items-center relative">
              <span className=" absolute">"</span>
            </span>
            <p className=" text-xl">
              money makes your life easier, if you're lucky to have it, youre
              lucky.
            </p>
            <div className=" flex items-center gap-2">
              <div className=" w-14 h-14 rounded-full overflow-hidden object-center object-contain">
                <img className="w-full" src={p1} alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className=" font-medium text-xl ">Steve Mark</h3>
                <p className="text-gray-500 text-base">Tech Enthusiast</p>
              </div>
            </div>
          </div>
          <div className=" w-96 obg p-4 rounded-2xl flex flex-col gap-6">
            <span className=" text-8xl pt-9 flex items-center relative">
              <span className=" absolute">"</span>
            </span>
            <p className=" text-xl">
              It is usually people in the money buisness, finance, and
              international trade that are really rich.
            </p>
            <div className=" flex items-center gap-2">
              <div className=" w-14 h-14 rounded-full overflow-hidden object-center object-contain">
                <img className="w-full" src={p3} alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className=" font-medium text-xl ">Herman Jensen</h3>
                <p className="text-gray-500 text-base">Founder & Leader</p>
              </div>
            </div>
          </div>
        </div>
        <div className="master font-Fredoka p-16  text-[color:var(--text-color)] ">
          <div className="flex obg  p-6 items-center justify-evenly">
            <div className="flex flex-col gap-3">
              <p className="text-5xl">Lets try our service now!</p>
              <p className="text-xl">
                Everything you need to accept card payments <br /> and grow businesses
                anywhere on the planet
              </p>
            </div>
            <div>
              <button className=" pt-2 pb-2 pl-6 pr-6 text-lg font-Fredoka rounded-lg bg-[color:var(--link-color)] text-white">Get Started</button>
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
      </div>
    </div>
  );
}

export default Home;
