"use client";
import React, { useRef, useEffect } from "react";
import { cn } from "@barefoot/shared";

export interface FastVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  containerClassName?: string;
}

/**
 * FastVideo: Non-blocking poster-synced looping video engine.
 */
export function FastVideo({
  src,
  poster,
  className,
  containerClassName,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  ...props
}: FastVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play().catch(() => {});
    }
  }, [autoPlay]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden bg-[#000000]", containerClassName)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload="auto"
        className={cn("w-full h-full object-cover object-center", className)}
        {...props}
      />
    </div>
  );
}
