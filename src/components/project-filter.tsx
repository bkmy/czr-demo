import { sdgs } from "@/lib/sdgs";
import { useFilterStore } from "@/store/filter";
import { Input } from "./ui/input";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"
import { FilterXIcon, GoalIcon, XCircleIcon } from "lucide-react";

export default function ProjectFilter() {
    const { selectedSdgs, searchTerm, setSdgs, setSearch } = useFilterStore((state) => ({
        selectedSdgs: state.selectedSdgs,
        searchTerm: state.searchTerm,
        setSdgs: state.setSdgs,
        setSearch: state.setSearch,
    }));

    const handleCheckboxChange = (value: number) => (checked: boolean) => {
        const newSdgs = checked ? [...selectedSdgs, value] : selectedSdgs.filter(sdg => sdg !== value);
        setSdgs(newSdgs);
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const clearFilters = () => {
        setSdgs([]);
        setSearch('');
    };

    return (
        <div className="flex flex-wrap space-x-4 space-y-4 md:space-y-0 p-2 w-full items-center align-center">
            <h3 className="font-semibold text-gray-500 inline-flex">Project Filters</h3>
            <div className="flex w-64">
                <Input type="text" value={searchTerm} onChange={handleSearchChange} aria-label="Search" placeholder="Filter by name" />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        <GoalIcon className='text-gray-700 h-4 w-4 mx-1' />
                        Filter by Goals
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>
                        <p className="font-semibold text-md text-gray-500">Sustainable Development Goals</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {sdgs.map(sdg => (
                        <DropdownMenuCheckboxItem
                            key={sdg.goal}
                            id={`sdg-${sdg.goal}`}
                            onCheckedChange={handleCheckboxChange(sdg.goal)}
                            checked={selectedSdgs.includes(sdg.goal)}
                            aria-label={`Goal ${sdg.goal} - ${sdg.label}`}
                        >
                            {sdg.label}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" onClick={clearFilters}>
                <FilterXIcon className='text-gray-700 h-4 w-4 mx-1' />
                Clear Filters
            </Button>
        </div>
    );
}