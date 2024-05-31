"use client";

import { Card, CardBody, Image } from "@nextui-org/react";

interface Props {
  name: string;
  image: string;
}

export const CardBrand = ({ name, image }: Props) => {
  return (
    <Card isHoverable className="cursor-pointer p-2">
      <CardBody className="flex flex-row justify-start items-center gap-2 md:gap-3">
        <Image
          removeWrapper
          className="h-10 w-auto object-cover"
          src={image}
          alt={name}
          radius="none"
        />
        <h2 className="hidden md:block text-md font-bold text-default-600 subpixel-antialiased">
          {name}
        </h2>
      </CardBody>
    </Card>
  );
};
