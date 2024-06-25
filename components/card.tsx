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
    <Popover color="primary">
      <PopoverTrigger>
        <Card isHoverable isPressable className="cursor-pointer p-2">
          <CardBody className="flex flex-row justify-center gap-2">
            <Image
              removeWrapper
              className="h-10 w-10 object-contain"
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
  );
};
