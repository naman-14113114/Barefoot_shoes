import React from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@barefoot/shared";

export interface FastImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  containerClassName?: string;
  aspectRatio?: "portrait" | "square" | "landscape" | "banner";
  isPriority?: boolean;
}

/**
 * FastImage: Zero-lazy-load Next.js Image wrapper
 * Injects priority in SSR head and enforces fixed aspect ratio containers to prevent CLS.
 */
export function FastImage({
  src,
  alt,
  className,
  containerClassName,
  aspectRatio = "portrait",
  isPriority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = true,
  ...props
}: FastImageProps) {
  const aspectStyles = {
    portrait: "aspect-[4/5] pb-[115%]",
    square: "aspect-square pb-[100%]",
    landscape: "aspect-[16/9] pb-[56.25%]",
    banner: "aspect-[21/9] pb-[42.85%]",
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[#eaeaea]",
        fill ? aspectStyles[aspectRatio] : "",
        containerClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={isPriority}
        loading={isPriority ? "eager" : "eager"}
        fetchPriority={isPriority ? "high" : "auto"}
        className={cn(
          "object-cover object-center transition-opacity duration-300",
          className
        )}
        {...props}
      />
    </div>
  );
}
