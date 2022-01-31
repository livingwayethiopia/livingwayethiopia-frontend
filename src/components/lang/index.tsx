import React from "react";

const ChangeLanguage = () => {
    return (
        <div className="flex flex-wrap justify-start text-cyan-700 px-2 ">
            <div className="relative inline-flex align-middle w-full hover:text-amber-400">
                <div className=" py-1 rounded gap-x-2 cursor-pointer select-none ease-linear transition-all duration-150 flex items-center "
                    onClick={() => {
                        if (process.env.NEXT_PUBLIC_LANGUAGE === "en")
                            location.replace("https://am.livingwayethiopia.org");
                        else window.location.href = "https://livingwayethiopia.org"
                    }}
                >

                    {process.env.NEXT_PUBLIC_LANGUAGE === "en" ?
                        <p className='font-bold text-sm  '>
                            አማ
                        </p> :
                        <p className='font-bold text-lg '>
                            EN
                        </p>}
                </div>
            </div>
        </div>
    );
};

export default ChangeLanguage