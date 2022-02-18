import React, { useEffect, useState } from "react";
import { NavLink } from "../style";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { useNavBar } from "../../../contexts/navbar";

const HeaderPopover = ({ data }: { data: any }) => {
  const navbar = useNavBar();
  const router = useRouter();

  return (
    <Popover>
      <Popover.Button>
        <NavLink
          isSticky={navbar.isSticky}
          active={router.asPath.toLocaleLowerCase().includes(data.path)}
          onClick={() => {
            navbar.updateNavBar(data.path);
          }}
        >
          {data.name}
        </NavLink>
      </Popover.Button>
      <Transition
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
      >
        <Popover.Panel className="absolute z-50 w-screen max-w-sm mt-6 transform -translate-x-1/2 lg:left-1/2 md:left-2/4 2xl:left-2/3 sm:px-0 lg:max-w-4xl">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
              {navbar.aboutUs.map((item: any, index: number) => (
                <div
                  key={index}
                  onClick={() => {
                    navbar.updateNavBar(data.path);
                    router.replace(`/ministry${item.path}`, undefined, {
                      shallow: true,
                    });
                  }}
                  className=" cursor-pointer flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                    <item.iconData aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <p className="text-md font-medium text-gray-900">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default HeaderPopover;
