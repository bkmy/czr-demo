"use client"

import { getSdgDescription } from "@/lib/sdgs";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";

export default function GoalList({ sdgs }: { readonly sdgs: any }) {
    const sdgDescriptions = getSdgDescription(sdgs);

    return (
        <div className="relative w-full flex gap-2 snap-x snap-mandatory overflow-x-auto py-3">
            {
                sdgDescriptions.map(({ goal, label, description }) => (
                    <div key={goal} className="snap-center shrink-0">
                        <HoverCard>
                            <HoverCardTrigger>
                                <Button variant="link" className="text-sm text-gray-500 rounded-md border text-xs w-auto p-2 h-8">{label}</Button>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="h-10 w-10">
                                        <div className="h-10 w-10 rounded-full bg-gray-100 overflow-hidden">
                                            <div className="h-full w-full bg-gray-100 flex justify-center items-center">
                                                <p className="text-2xl text-gray-500">{goal}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-sm font-bold">{label}</h3>
                                </div>
                                <p className="text-xs text-gray-500 ml-12 my-1">{description}</p>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                ))
            }
        </div>
    )
}