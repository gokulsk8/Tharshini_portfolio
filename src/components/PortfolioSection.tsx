import React, { useState } from 'react';
import {
  Grid,
  Sparkles,
  ArrowUpRight,
  Eye,
  Layers,
  Smartphone,
  Cpu,
  Code2,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'UI/UX' | 'WEB' | 'TECHNICAL'>('ALL');

  const filterTabs: Array<'ALL' | 'UI/UX' | 'WEB' | 'TECHNICAL'> = [
    'ALL',
    'UI/UX',
    'WEB',
    'TECHNICAL',
  ];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (selectedFilter === 'ALL') return true;
    return proj.category === selectedFilter;
  });

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#D9D9D9] border-t border-[#171717]/10"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-[#FFB82E] rounded-sm rotate-45" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#171717]/80 font-body">
                FEATURED WORK & CASE STUDIES
              </span>
              <span className="h-[2px] w-16 bg-[#FFB82E]" />
            </div>

            <div className="relative">
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#171717] font-black uppercase tracking-tight">
                PORTFOLIO
              </h2>
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-stroke-charcoal opacity-15 font-black uppercase tracking-tight absolute -top-2 left-1 pointer-events-none select-none -z-10">
                PORTFOLIO
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#171717] p-1.5 rounded-xl shadow-md border-b-2 border-[#FFB82E] self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                id={`portfolio-filter-${tab.toLowerCase()}`}
                onClick={() => setSelectedFilter(tab)}
                className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-bold font-body uppercase tracking-wider transition-all duration-200 ${
                  selectedFilter === tab
                    ? 'bg-[#FFB82E] text-[#171717] shadow-sm font-black scale-105'
                    : 'text-white hover:text-[#FFB82E] hover:bg-[#252525]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isUiUx = project.category === 'UI/UX';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 ${
                  isUiUx ? 'border-[#FFB82E] ring-2 ring-[#FFB82E]/30' : 'border-[#171717]/10 hover:border-[#171717]'
                }`}
              >
                {/* Image Container with Zoom and Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#171717]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#171717] text-[#FFB82E] text-[11px] font-black uppercase rounded-md tracking-wider shadow-md border border-[#FFB82E]/40">
                      {project.category}
                    </span>

                    {isUiUx && (
                      <span className="px-3 py-1 bg-[#FFB82E] text-[#171717] text-[10px] font-black uppercase rounded-md tracking-wider shadow-md flex items-center space-x-1">
                        <Sparkles className="w-3 h-3" />
                        <span>FEATURED STUDY</span>
                      </span>
                    )}
                  </div>

                  {/* Hover Eye Icon overlay */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#FFB82E] text-[#171717] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg transform translate-y-2 group-hover:translate-y-0">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#FFB82E] bg-[#171717] px-2.5 py-0.5 rounded uppercase tracking-wider inline-block">
                      {project.categoryLabel}
                    </span>

                    <h3 className="font-display text-2xl sm:text-3xl text-[#171717] font-bold uppercase tracking-tight leading-tight group-hover:text-[#171717] group-hover:underline decoration-[#FFB82E] decoration-4 underline-offset-4 transition-all">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#555555] font-body leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tags and CTA link */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-[#E6E6E6] text-[#171717] text-[10px] font-bold uppercase rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-1.5 text-xs font-black text-[#171717] uppercase tracking-wider group-hover:text-[#FFB82E] group-hover:translate-x-1 transition-all">
                      <span>{isUiUx ? 'EXPLORE CASE STUDY' : 'VIEW PROJECT'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
