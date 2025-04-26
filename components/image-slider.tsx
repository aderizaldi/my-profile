
import { useState, useEffect } from "react";
import { Button, Image } from "@nextui-org/react";


type ImageSliderProps = {
    images: string[];
    title: string;
    autoSlideInterval?: number;
}
export const ImageSlider = ({ images, title, autoSlideInterval = 3000 }: ImageSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Set up auto-sliding with useEffect
    useEffect(() => {
        if (images.length <= 1 || isPaused) return;

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, autoSlideInterval);

        return () => clearInterval(intervalId);
    }, [images.length, autoSlideInterval, isPaused]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Pause auto-sliding when hovering over the slider
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative">
                <Image
                    alt={title}
                    className="w-full object-cover h-[300px]"
                    radius="lg"
                    shadow="sm"
                    src={images[currentIndex]}
                    width="100%"
                />

                {images.length > 1 && (
                    <>
                        <Button
                            isIconOnly
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white z-10"
                            size="sm"
                            onPress={goToPrevious}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </Button>

                        <Button
                            isIconOnly
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white z-10"
                            size="sm"
                            onPress={goToNext}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Button>

                        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                            {images.map((_, index) => (
                                <Button
                                    key={index}
                                    isIconOnly
                                    size="sm"
                                    className={`w-2 h-2 min-w-0 p-0 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                                    onPress={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}