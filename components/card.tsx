"use client";

import {
  Card,
  CardBody,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

interface Props {
  name: string;
  image: string;
}

export const CardBrand = ({ name, image }: Props) => {
  return (
    <>
      <Card isHoverable className="cursor-pointer p-2 hidden md:block">
        <CardBody className="flex flex-row justify-start items-center gap-3">
          <Image
            removeWrapper
            className="h-10 w-auto object-cover"
            src={image}
            alt={name}
            radius="none"
          />
          <h2 className="block text-md font-bold text-default-600 subpixel-antialiased">
            {name}
          </h2>
        </CardBody>
      </Card>
      <Popover color="primary">
        <PopoverTrigger>
          <Card
            isHoverable
            isPressable
            className="cursor-pointer p-2 block md:hidden"
          >
            <CardBody className="flex flex-row justify-start items-center gap-2">
              <Image
                removeWrapper
                className="h-10 w-auto object-cover"
                src={image}
                alt={name}
                radius="none"
              />
            </CardBody>
          </Card>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-md font-bold text-white">{name}</div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
