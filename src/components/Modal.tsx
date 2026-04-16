import { twMerge } from "tailwind-merge";
import LONDON from "../assets/modal-images/London1.webp";
import VAUGHAN from "../assets/modal-images/Vaughan5.webp";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./@/ui/dialog";

export function SquareImg(props: any) {
    const twstyles_img = twMerge(
        "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110",
        props.className,
    );

    return <img src={props.src} className={twstyles_img} alt={props.alt} />;
}

const LocationName = (props: any) => {
    const twstyles_parent = twMerge(
        "absolute inset-0 bg-black/40 flex items-center justify-center p-4 hover:bg-white/20",
        props.className,
    );
    const twstyles_h3 = twMerge(
        "text-white text-2xl font-bold text-center leading-tight",
        props.className,
    );

    return (
        <div className={twstyles_parent}>
            <h3 className={twstyles_h3}>{props.children}</h3>
        </div>
    );
};

const LocationBox = (props: any) => {
    const tw_styles = twMerge(
        "relative aspect-square overflow-hidden group",
        props.className,
    );

    return (
        <div className={tw_styles}>
            <a href={props.href}>{props.children}</a>
        </div>
    );
};

export default function ReactiveModal(props: any) {
    return (
        <Dialog>
            <DialogTrigger asChild>{props.children}</DialogTrigger>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle className="text-(--dark-lava) text-center text-3xl">
                        Select Your Location
                    </DialogTitle>
                </DialogHeader>
                <div className="flex items-center gap-2">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                        <LocationBox href={props.link1}>
                            <LocationName>
                                <span className="text-center">
                                    Vaughan
                                    <br />
                                    Team
                                </span>
                            </LocationName>
                            <SquareImg
                                src={VAUGHAN}
                                alt="Newtrack Vaughan location image"
                            ></SquareImg>
                        </LocationBox>
                        <LocationBox href={props.link2}>
                            <LocationName>
                                <span className="text-center">
                                    London
                                    <br />
                                    Team
                                </span>
                            </LocationName>
                            <SquareImg
                                src={LONDON}
                                alt="Newtrack London location image"
                            ></SquareImg>
                        </LocationBox>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
