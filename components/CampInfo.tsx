"use client";

import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { CampDetails } from "@/types";
import CustomButton from "./CustomButton";
import Link from "next/link";

interface CampDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  camp: CampDetails;
}
const CampInfo = ({ isOpen, closeModel, camp }: CampDetailsProps) => {
  return (
    <div className="max-container mx-auto bg-center bg-repeat overflow-hidden">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-gray-50 bg-opacity-90" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="relative h-full  max-h-[85vh] w-[85vw] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xsl transition-all flex flex-col">
                  <button
                    type="button"
                    onClick={closeModel}
                    className="absolute top-2 right-2 z-20 w-fit p-2  bg-black rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col justify-between">
                    <h1 className="font-normal text-2xl tracking-widest my-2.5 capitalize">
                      {camp.name}
                    </h1>

                    <div className="-z-10 overflow-hidden  bg-cover bg-center bg-repeat rounded-lg mb-2 opacity-50">
                      {camp.images && camp.images.length > 0 && (
                        <Image
                          src={camp.images[0].url}
                          alt={camp.name}
                          fill
                          priority //className="object-contain"
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <div>
                      {" "}
                      <Disclosure as="div" className="relative mt-3 ">
                        <Disclosure.Button className="grid grid-cols-2 w-[150px] bg-yellow-10 text-wrap z-10 rounded-xl px-4 py-2 text-left text-sm font-medium  hover:black focus:outline-none focus-visible:ring">
                          Description
                        </Disclosure.Button>
                        <Disclosure.Panel className="grid grid-cols-1 bg-yellow-10 rounded-xl px-4 py-2 text-left text-sm gap-4 mt-2">
                          <p className=" text-[12px] text-gray-90 mt-2 font-normal">
                            {" "}
                            {camp.description}
                          </p>
                        </Disclosure.Panel>
                        <Disclosure as="div" className="my-3">
                          <Disclosure.Button className="grid grid-cols-2 w-[150px] text-wrap   bg-yellow-10 z-10 rounded-xl px-4 py-2 text-left text-sm font-medium hover:black focus:outline-none focus-visible:ring">
                            Reservation Info
                          </Disclosure.Button>
                          <Disclosure.Panel className="grid grid-cols-1  bg-yellow-10  rounded-xl px-4 py-2 text-left text-sm gap-4 mt-2">
                            <p className=" text-[12px] text-gray-90 mt-2 font-normal">
                              {camp.reservationInfo}
                            </p>
                          </Disclosure.Panel>
                        </Disclosure>
                      </Disclosure>
                      <Disclosure as="div" className="my-2">
                        <Disclosure.Button className="grid grid-cols-2 w-[150px] text-wrap  bg-yellow-10 z-10 rounded-xl px-4 py-2 text-left text-sm font-medium hover:black focus:outline-none focus-visible:ring">
                          Direction Info
                        </Disclosure.Button>
                        <Disclosure.Panel className="grid grid-cols-1  bg-yellow-10  rounded-xl px-4 py-2 text-left text-sm gap-4 mt-2">
                          <p className=" text-[12px] text-gray-90 mt-2 font-normal">
                            {camp.directionsOverview}
                          </p>
                        </Disclosure.Panel>
                      </Disclosure>
                    </div>

                    <div className="grid grid-cols-1 overflow-x-auto hide-scrollbar mt-4  ">
                      {camp.images.map((image, index) => (
                        <div
                          key={index}
                          className="h-[450px] relative shadow-md rounded-xl gap-8 overflow-x-auto mt-8"
                        >
                          <Image
                            src={image.url}
                            alt={camp.name}
                            fill
                            objectFit="cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="my-2">
                    <Link href={camp.reservationUrl} target="_blank">
                      <CustomButton
                        title="Make Reservation"
                        containerStyles="w-full py-[10px] rounded-full bg-yellow-50"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                      />
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default CampInfo;
