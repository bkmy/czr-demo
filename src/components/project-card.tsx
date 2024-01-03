import { Project } from "@/lib/schema"
import Image from "next/image";
import { formatPrice } from "@/lib/locale";
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import AddToCart from "@/components/add-to-cart";
import GoalList from "@/components/goal-list";

export default function ProjectCard({ project }: { readonly project: Project }) {
    const { name, country, image, price_per_ton, offered_volume_in_tons, supplier_name, sdgs } = project;

    return (
        <Card className="space-y-4 w-[350px] my-2 mx-2 flex flex-col justify-between">
            <CardHeader>
                <div className="relative w-full h-48 overflow-hidden rounded-md">
                    <Image
                        src={image}
                        alt={name}
                        fill={true}
                        sizes={`(max-width: 350px) 100vw, 350px`}
                        loading="lazy"
                        className="h-auto w-auto object-cover aspect-[3/4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black from-5% to-transparent to-40%" />
                    <div className="absolute top-0 left-0 p-4">
                        <p className="text-xs text-white p-1 rounded-md bg-black">{country}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 text-white p-4">
                        <CardTitle>{name}</CardTitle>
                        <p className="text-white"><span className="text-xs">by</span><span className="font-semibold text-sm px-1">{supplier_name}</span></p>
                    </div>
                </div>
                <div className="h-6">
                    {sdgs.length > 0 ? (<GoalList sdgs={sdgs} />) : null}
                </div>
            </CardHeader>
            <CardFooter className="flex flex-col justify-between p-2 bg-gray-100">
                <div className="flex justify-between items-center w-full px-4 pt-2 text-gray-700">
                    <div className="flex flex-col space-y-1">
                        <p className="text-xs">Available</p>
                        <p className="text-xl"><span className="font-semibold">{offered_volume_in_tons}</span> tons</p>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p className="text-xs">Price</p>
                        <p className="font-semibold text-xl">{formatPrice(price_per_ton)}/t</p>
                    </div>
                </div>
                <AddToCart project={project} />
            </CardFooter>
        </Card>
    )
}
