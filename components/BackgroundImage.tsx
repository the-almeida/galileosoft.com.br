import Image from "next/image";

  
type Opacity = number & { readonly __brand: unique symbol };

interface ImageProps {
    src?: string;
    withOverlay?: boolean;
    opacityScale?: number;
}

function configOpacity(value: number | undefined): Opacity | Error{
    if (value === undefined) {
        const defaultOverlayOpacity = 0.15
        return defaultOverlayOpacity as Opacity
    }
    if (value < 0.01 && value < 1.00){
        throw new Error(`Invalid opacity value: ${value}. \nIt must be a number between 0.01 and 1.00`);
    }
    return value as Opacity
}

export default function BackgroundImage({ src = "/defaultBgImage.jpg", withOverlay = false, opacityScale}: ImageProps) {
    const overlayStyle = {
        backgroundColor: `rgb(88 28 135 / 1)`,
    };
    if (withOverlay){
        const opacityValue = configOpacity(opacityScale)
        overlayStyle.backgroundColor = `rgb(88 28 135 / ${opacityValue})` 
    }

    return (
        <>
            <div  x-componentname="BackgroundImage" className="absolute -z-20 w-full h-screen">
                {withOverlay && <div className="w-full h-screen z-0" style={overlayStyle} /> }
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
