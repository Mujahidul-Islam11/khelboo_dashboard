"use client"
import { VscBell, VscGithubInverted, VscMegaphone } from "react-icons/vsc";
import { FcAdvertising, FcSportsMode } from "react-icons/fc";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
    const [openNotification, setOpenNotification] = useState(false);
    return (
        <div className="relative px-6 border-b py-3 flex justify-between items-center">
            <div className="w-[70%] relative">
                <input
                    className="py-[7.8px] pr-4 pl-12 w-full rounded-lg bg-gray-100 hover:bg-gray-200 outline-none border"
                    placeholder="Search..." />
                <IoIosSearch className="absolute top-[10px] left-5 text-[#424242] text-[1.3rem]" />
            </div>
            <ul className="flex gap-4 text-xl items-center text-[#2C3336]">
                <li>
                    <VscMegaphone />
                </li>
                <li><span className="text-lg">Feedback?</span></li>
                <li className="flex relative">
                    <VscBell className="cursor-pointer" onClick={() => setOpenNotification(!openNotification)} />
                    <span className="text-xs text-white bg-red-500 rounded-full px-[5px] py-[1.3px] w-fit h-fit -ml-2 -mt-1">2</span>
                    {/* drop down notification */}
                    {openNotification && (
                        <div
                            className={`absolute right-0 mt-8 w-[350px] bg-white border shadow-lg rounded-xl p-3 transition-transform duration-300 ${openNotification ? "scale-100 opacity-100" : "scale-95 opacity-0"
                                }`}
                        >
                            <h3 className="text-sm text-gray-500 mb-2">Notification</h3>
                            <ul onClick={() => setOpenNotification(false)}>
                                <li className="cursor-pointer hover:bg-gray-100 rounded-lg p-1"><h3 className="flex gap-2 items-center text-base font-semibold"><FcAdvertising className="text-[22px]" />Edit your information</h3>
                                    <p className="text-sm text-gray-500">sint et inventore temporibus dolorem fuga corporis delectus nisi exercitationem alias</p></li>
                                <li className="cursor-pointer hover:bg-gray-100 rounded-lg p-1"><h3 className="flex gap-2 items-center text-base font-semibold"><FcSportsMode className="text-[22px]" />Say goodbye to paper receipts!</h3>
                                    <p className="text-sm text-gray-500">sint et inventore temporibus dolorem fuga corporis delectus nisi exercitationem alias</p></li>
                                <li className="cursor-pointer hover:bg-gray-100 rounded-lg p-1"><h3 className="flex gap-2 items-center text-base font-semibold"><FcAdvertising className="text-[22px]" />Edit your information</h3>
                                    <p className="text-sm text-gray-500">sint et inventore temporibus dolorem fuga corporis delectus nisi exercitationem alias</p></li>
                            </ul>
                        </div>
                    )}
                </li>
                <li><RxQuestionMarkCircled /></li>
                <li>
                    <VscGithubInverted />
                </li>
                <img
                    className="size-10 rounded-full bg-slate-500 object-cover"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    alt="profile picture"
                />
            </ul>
        </div>
    );
};

export default Navbar;