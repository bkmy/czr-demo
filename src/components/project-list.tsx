"use client"

import { useProjects } from "@/lib/projects";
import { useFilterStore } from '@/store/filter';
import ProjectCard from "./project-card";
import ProjectFilter from './project-filter';

export default function ProjectList() {
    const projects = useProjects();

    const { selectedSdgs, searchTerm } = useFilterStore((state) => ({
        selectedSdgs: state.selectedSdgs,
        searchTerm: state.searchTerm,
    }));

    const filteredProjects = projects.filter(project =>
        selectedSdgs.every(sdg => project.sdgs.includes(sdg)) &&
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full min-w-[360px] max-w-[1160px] flex flex-col items-start">
            <ProjectFilter />
            <div className="flex flex-wrap w-full">
                {filteredProjects.length === 0 ? (
                    <p className="w-full text-center text-gray-700 p-4">No projects found</p>
                ) : (
                    filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                )}
            </div>
        </div>
    );
}