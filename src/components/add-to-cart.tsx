"use client"

import { Project } from "@/lib/schema";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useProjectVolume } from "@/lib/useProjectVolume";

export default function AddToCart({ project }: { readonly project: Project }) {
    const { volume, handleVolumeChange, updateCart } = useProjectVolume(project);

    return (
        <div className="flex flex-col space-y-1.5 w-full p-4">
            <Input
                type="number"
                id={`project-${project.id}-volume`}
                name={`${project.name} Volume`}
                value={volume}
                onChange={handleVolumeChange}
                min="0"
                max={project.offered_volume_in_tons}
                aria-label={`${project.name} Volume`}
            />
            <Button onClick={updateCart}>Add to Cart</Button>
        </div>
    )
}