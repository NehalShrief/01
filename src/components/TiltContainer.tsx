import React, { useState, useRef, useEffect, useCallback } from 'react';

interface TiltContainerProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees (default: 8)
  scale?: number; // Scale factor when active (default: 1.02)
  glare?: boolean; // Whether to render dynamic light glare (default: true)
  tapDuration?: number; // Duration in ms for mobile tap effect before returning to neutral (default: 550)
  disabled?: boolean;
}

export const TiltContainer: React.FC<TiltContainerProps> = ({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.02,
  glare = true,
  tapDuration = 550,
  disabled = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const [tilt, setTilt] = useState<{ x: number; y: number; scale: number }>({ x: 0, y: 0, scale: 1 });
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({ x: 50, y: 50, opacity: 0 });
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect touch capability on mount and resize
  useEffect(() => {
    const checkTouch = () => {
      const hasTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(hasTouch);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Desktop Mouse Move Handler
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || isTouchDevice || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = (x / rect.width - 0.5) * 2; // -1 to 1
      const yPercent = (y / rect.height - 0.5) * 2; // -1 to 1

      // Tilt calculations: moving right tilts around Y (positive), moving down tilts around X (negative)
      const rotateX = -yPercent * maxTilt;
      const rotateY = xPercent * maxTilt;

      setTilt({ x: rotateX, y: rotateY, scale });
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.15,
      });
      setIsAnimating(false);
    },
    [disabled, isTouchDevice, maxTilt, scale]
  );

  // Desktop Mouse Leave Handler
  const handleMouseLeave = useCallback(() => {
    if (disabled || isTouchDevice) return;
    setIsAnimating(true);
    setTilt({ x: 0, y: 0, scale: 1 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  }, [disabled, isTouchDevice]);

  // Mobile Tap / Touch Handler: Tap triggers dynamic tilt then smoothly returns to neutral
  const triggerMobileTapTilt = useCallback(
    (clientX?: number, clientY?: number) => {
      if (disabled || !containerRef.current) return;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      let rotateX = -maxTilt * 0.75;
      let rotateY = maxTilt * 0.75;
      let glareX = 50;
      let glareY = 50;

      if (clientX !== undefined && clientY !== undefined) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const xPercent = (x / rect.width - 0.5) * 2;
        const yPercent = (y / rect.height - 0.5) * 2;
        rotateX = -yPercent * maxTilt;
        rotateY = xPercent * maxTilt;
        glareX = (x / rect.width) * 100;
        glareY = (y / rect.height) * 100;
      } else {
        // Default tactile pulse
        rotateX = -maxTilt * 0.8;
        rotateY = (Math.random() > 0.5 ? 1 : -1) * (maxTilt * 0.8);
      }

      // Step 1: Engage 3D tilt on tap
      setIsAnimating(true);
      setTilt({ x: rotateX, y: rotateY, scale: scale * 1.01 });
      setGlarePos({ x: glareX, y: glareY, opacity: 0.22 });

      // Step 2: Return smoothly to normal after short delay
      timeoutRef.current = setTimeout(() => {
        setTilt({ x: 0, y: 0, scale: 1 });
        setGlarePos((prev) => ({ ...prev, opacity: 0 }));
      }, tapDuration);
    },
    [disabled, maxTilt, scale, tapDuration]
  );

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (disabled) return;
    const touch = e.touches[0];
    if (touch) {
      triggerMobileTapTilt(touch.clientX, touch.clientY);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If on touch device, click also acts as a backup tap event
    if (isTouchDevice && !disabled) {
      triggerMobileTapTilt(e.clientX, e.clientY);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      style={{ perspective: 1000 }}
      className={`relative select-none ${className}`}
    >
      <div
        className={`w-full h-full transform-gpu ${
          isAnimating
            ? 'transition-transform duration-500 ease-out'
            : 'transition-transform duration-100 ease-out'
        }`}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${tilt.scale}, ${tilt.scale}, ${tilt.scale})`,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}

        {/* Dynamic Light Glare Overlay */}
        {glare && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 z-25 overflow-hidden"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 65%)`,
            }}
          />
        )}
      </div>
    </div>
  );
};
