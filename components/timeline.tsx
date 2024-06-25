"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/react";
import { BiSolidMap } from "react-icons/bi";
import { RevealAnimation } from "./reveal-animation";

export const Timeline = () => {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      <div className="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group is-active">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 lg:order-1 lg:group-odd:-translate-x-1/2 lg:group-even:translate-x-1/2">
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
          >
            <path
              fill-rule="nonzero"
              d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
            />
          </svg>
        </div>
        <div className="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)]">
          <RevealAnimation>
            <Card isHoverable className="p-4">
              <CardHeader className="flex items-center justify-between space-x-2 mb-1">
                <div>
                  <h5 className="text-lg font-bold p-0 m-0">
                    Backend Developer
                  </h5>
                  <p className="text-md font-bold text-gray-500">Vocasia</p>
                </div>
                <time className="fond-medium text-sm text-primary">
                  Feb 2022 - Jul 2022
                </time>
              </CardHeader>
              <CardBody>
                <h5 className="text-sm font-bold text-gray-500">
                  Tanggung Jawab:
                </h5>
                <div className="p-3">
                  <ul className="list-disc list-outside text-sm text-justify text-primary">
                    <li>
                      <span className="text-default-600 font-normal">
                        Mengembangkan REST API yang esien untuk web dan aplikasi
                        Android Vocasia, dalam kolaborasi erat dengan Product
                        Manager serta tim Frontend Web dan Android Developer.
                      </span>
                    </li>
                    <li>
                      <span className="text-default-600 font-normal">
                        Mengelola dan memelihara server development Vocasia
                        untuk memastikan kinerja optimal dan aksesibilitas bagi
                        developer.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardBody>
              <CardFooter>
                <Chip
                  variant="dot"
                  color="primary"
                  startContent={<BiSolidMap color="#D80032" />}
                >
                  Jakarta, Indonesia
                </Chip>
              </CardFooter>
            </Card>
          </RevealAnimation>
        </div>
      </div>
    </div>
  );
};
