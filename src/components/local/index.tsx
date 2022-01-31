import React from "react";
import Image from "next/image";
import { createPopper } from "@popperjs/core";

const LangDropdown = () => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef: any = React.createRef();
    const popoverDropdownRef: any = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "top-end"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <div className="flex flex-wrap justify-start py-1 ">
            <div className="relative inline-flex align-middle w-full">
                <div className=" py-1 rounded gap-x-2 cursor-pointer select-none ease-linear transition-all duration-150 flex items-center "
                    ref={btnDropdownRef}
                    onClick={() => {
                        dropdownPopoverShow
                            ? closeDropdownPopover()
                            : openDropdownPopover();
                    }}
                >
                    <div className='relative h-4 w-6'>
                        <Image
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "/images/english.png" : "/images/amharic.png"}
                            src={process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "/images/english.png" : "/images/amharic.png"}
                            layout='fill'
                            alt="article-Image"
                        />
                    </div>
                    <p className='font-bold text-lg capitalize'>

                        {process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "en" : "am"}
                    </p>
                    <svg width="10" height="6" viewBox="0 0 14 8" fill="none" className={
                        (dropdownPopoverShow ? "rotate-180" : "rotate-0")
                    } xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9188 0.179688H6.68877H1.07877C0.118772 0.179688 -0.361228 1.33969 0.318772 2.01969L5.49877 7.19969C6.32877 8.02969 7.67877 8.02969 8.50877 7.19969L10.4788 5.22969L13.6888 2.01969C14.3588 1.33969 13.8788 0.179688 12.9188 0.179688Z" fill="#292D32" />
                    </svg>
                </div>
                <div
                    ref={popoverDropdownRef}
                    className={
                        (dropdownPopoverShow ? "block " : "hidden ") +
                        "text-base  list-none text-left rounded shadow-lg  py-2 px-2 gap-y-2 flex flex-col "
                    }
                    style={{ zIndex: 50, background: "#fff" }}
                    onMouseLeave={() => {
                        closeDropdownPopover();
                    }}
                >
                    <div className="px-4  w-full pr-10 rounded py-2 gap-x-2 cursor-pointer select-none ease-linear transition-all duration-150 flex items-center hover:shadow-md  hover:bg-gray-50"
                        onClick={() => {
                            if (process.env.NEXT_PUBLIC_LANGUAGE === "en") {
                                closeDropdownPopover();
                                return;
                            }
                            else window.location.href = "https://livingwayethiopia.org"
                        }}
                    >
                        <div className='relative h-4 w-7 rounded-sm overflow-hidden'>
                            <Image
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={"/images/english.png"}
                                src={"/images/english.png"}
                                layout='fill'
                                alt="article-Image"
                            />
                        </div>
                        <p className='font-bold text-lg capitalize'>
                            en
                        </p>
                    </div>
                    <div className="px-4  w-full pr-10 rounded py-2 gap-x-2 cursor-pointer select-none ease-linear transition-all duration-150 flex items-center hover:shadow-md  hover:bg-gray-50"

                        onClick={() => {
                            if (process.env.NEXT_PUBLIC_LANGUAGE === "am") {
                                closeDropdownPopover();
                                return;
                            }
                            else location.replace("https://am.livingwayethiopia.org");
                        }}

                    >
                        <div className='relative h-4 w-7 rounded-sm overflow-hidden'>
                            <Image
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={"/images/amharic.png"}
                                src={"/images/amharic.png"}
                                layout='fill'
                                alt="article-Image"
                            />
                        </div>
                        <p className='font-bold text-lg capitalize'>
                            am
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LangDropdown