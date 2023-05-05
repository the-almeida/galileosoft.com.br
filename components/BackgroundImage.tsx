import Image from "next/image";

interface ImageProps {
    src?: string;
    withOverlay?: boolean;
}

const BackgroundImage = ({ src = "/defaultBgImage.jpg", withOverlay = false }: ImageProps) => {
    return (
        <>
            <div  x-componentname="BackgroundImage" className="absolute -z-20 w-full h-screen">
                {withOverlay && <div className="bg-gray-900/50 md:bg-gray-900/20 w-full h-screen z-0" /> }
                <Image
                    className="-z-10"
                    src={src}
                    alt="Background Image purple with a rocket."
                    fill
                />
            </div>
        </>
    );
};

export default BackgroundImage;
