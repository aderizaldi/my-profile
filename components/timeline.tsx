"use client";

import { ReactNode } from "react";
import { Chip, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { BiSolidMap, BiCheck, BiLoader } from "react-icons/bi";
import { RevealAnimation } from "@/components/reveal-animation";

type TimelineItemProps = {
  icon?: ReactNode;
  children: ReactNode;
};

const TimelineItem = ({ icon = <BiCheck />, children }: TimelineItemProps) => {
  return (
    <>
      <div className="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group is-active">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 lg:order-1 lg:group-odd:-translate-x-1/2 lg:group-even:translate-x-1/2">
          {icon}
        </div>
        <div className="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)]">
          {children}
        </div>
      </div>
    </>
  );
};

export const Timeline = () => {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      <TimelineItem>
        <RevealAnimation>
          <Card isHoverable className="p-4">
            <CardHeader className="flex flex-wrap items-center justify-between space-x-2 mb-1">
              <div>
                <h5 className="text-lg font-bold p-0 m-0">Backend Developer</h5>
                <p className="text-md font-bold text-gray-500">
                  <a
                    href="https://vocasia.id"
                    target="_blank"
                    className="hover:text-primary"
                  >
                    Vocasia
                  </a>
                </p>
              </div>
              <time className="fond-medium text-sm text-primary text-nowrap">
                Feb 2022 - Jul 2022
              </time>
            </CardHeader>
            <CardBody>
              <h5 className="text-sm font-bold text-gray-500">
                Tanggung Jawab:
              </h5>
              <div className="ps-3">
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
                      Mengelola dan memelihara server development Vocasia untuk
                      memastikan kinerja optimal dan aksesibilitas bagi
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
      </TimelineItem>
      <TimelineItem>
        <RevealAnimation>
          <Card isHoverable className="p-4">
            <CardHeader className="flex flex-wrap items-center justify-between space-x-2 mb-1">
              <div>
                <h5 className="text-lg font-bold p-0 m-0">Backend Developer</h5>
                <p className="text-md font-bold text-gray-500">
                  <a
                    href="https://grhadigital.id"
                    target="_blank"
                    className="hover:text-primary"
                  >
                    PT Grha Digital Indonesia
                  </a>
                </p>
              </div>
              <time className="fond-medium text-sm text-primary text-nowrap">
                Feb 2023 - Sep 2023
              </time>
            </CardHeader>
            <CardBody>
              <h5 className="text-sm font-bold text-gray-500">
                Tanggung Jawab:
              </h5>
              <div className="ps-3">
                <ul className="list-disc list-outside text-sm text-justify text-primary">
                  <li>
                    <span className="text-default-600 font-normal">
                      Mengembangkan aplikasi Smart Home, Inventori, dan POS
                      (Point Of Sale) yang dan efisien sehingga dapat digunakan
                      langsung oleh pengguna.
                    </span>
                  </li>
                  <li>
                    <span className="text-default-600 font-normal">
                      Bertanggung jawab atas manajemen dan maintenance server
                      untuk aksesibilitas aplikasi yang kontinu bagi pengguna
                      dan klien
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
                Pontianak, Indonesia
              </Chip>
            </CardFooter>
          </Card>
        </RevealAnimation>
      </TimelineItem>
      <TimelineItem icon={<BiLoader />}>
        <RevealAnimation>
          <Card isHoverable className="p-4">
            <CardHeader className="flex flex-wrap items-center justify-between space-x-2 mb-1">
              <div>
                <h5 className="text-lg font-bold p-0 m-0">Freelancer</h5>
                {/* <p className="text-md font-bold text-gray-500">
                  with{" "}
                  <a
                    href="https://ngodinghouse.com"
                    target="_blank"
                    className="hover:text-primary"
                  >
                    Ngoding House
                  </a>
                </p> */}
              </div>
              <time className="fond-medium text-sm text-primary text-nowrap">
                Nov 2023 - Sekarang
              </time>
            </CardHeader>
            <CardBody>
              <h5 className="text-md font-extrabold text-primary">Client:</h5>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-sm font-bold text-gray-500">
                    <a
                      href="https://ngodinghouse.com"
                      target="_blank"
                      className="hover:text-primary"
                    >
                      Ngoding House
                    </a>
                  </p>
                  <div className="ps-3">
                    <ul className="list-disc list-outside text-sm text-justify text-primary">
                      <li>
                        <span className="text-default-600 font-normal">
                          Bertanggung jawab atas pengembangan aplikasi dari
                          berbagai client bersama tim Ngoding House.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500">
                    <a
                      href="https://grhadigital.id/"
                      target="_blank"
                      className="hover:text-primary"
                    >
                      PT Grha Digital Indonesia
                    </a>
                  </p>
                  <div className="ps-3">
                    <ul className="list-disc list-outside text-sm text-justify text-primary">
                      <li>
                        <span className="text-default-600 font-normal">
                          Memelihara server dan men-deploy aplikasi dan website
                          PT Grha Digital Indonesia
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500">
                    <a
                      href="https://teknik.untan.ac.id/"
                      target="_blank"
                      className="hover:text-primary"
                    >
                      Fakultas Teknik Universitas Tanjungpura
                    </a>
                  </p>
                  <div className="ps-3">
                    <ul className="list-disc list-outside text-sm text-justify text-primary">
                      <li>
                        <span className="text-default-600 font-normal">
                          Mengembangkan aplikasi dan website yang diperlukan
                          oleh Fakultas Teknik Universitas Tanjungpura.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500">
                    <a
                      href="https://tik.untan.ac.id/"
                      target="_blank"
                      className="hover:text-primary"
                    >
                      UPT TIK Universitas Tanjungpura
                    </a>
                  </p>
                  <div className="ps-3">
                    <ul className="list-disc list-outside text-sm text-justify text-primary">
                      <li>
                        <span className="text-default-600 font-normal">
                          Mengembangkan aplikasi dan website yang diperlukan
                          oleh UPT TIK Universitas Tanjungpura.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500">
                    <a
                      href="https://www.bwskal1.or.id/"
                      target="_blank"
                      className="hover:text-primary"
                    >
                      BWS Kalimantan I Pontianak
                    </a>
                  </p>
                  <div className="ps-3">
                    <ul className="list-disc list-outside text-sm text-justify text-primary">
                      <li>
                        <span className="text-default-600 font-normal">
                          Mengembangkan aplikasi dan website yang diperlukan
                          BWS Kalimantan I Pontianak.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Chip
                variant="dot"
                color="primary"
                startContent={<BiSolidMap color="#D80032" />}
              >
                Indonesia
              </Chip>
            </CardFooter>
          </Card>
        </RevealAnimation>
      </TimelineItem>
    </div>
  );
};
