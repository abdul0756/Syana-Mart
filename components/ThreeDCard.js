"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ThreeDCard({
  height = "h-auto",
  width = "w-full sm:w-[28rem]", // default responsive width
  heading,
  description,
  imgSrc,
  bgColor = "bg-black", // default black, can be changed via props
}) {
  return (
    <CardContainer>
      <CardBody
        className={cn(
          `${height} ${width} ${bgColor} relative group/card rounded-xl p-6 border border-black/10 dark:border-white/20 transition-all duration-300`
        )}
      >
        {/* Heading */}
        <CardItem
          translateZ="50"
          className="text-2xl text-center w-full font-bold roboto text-neutral-800 dark:text-white"
        >
          {heading}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="edu text-neutral-600 text-base max-w-sm mt-2 dark:text-slate-200"
        >
          {description}
        </CardItem>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imgSrc}
            alt="card image"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover rounded-xl"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
