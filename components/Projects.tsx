"use client"
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col h-[300vh] w-full border-2 border-red-700 bg-blue-950"><div className="h-[100vh] w-full text-blue-950 text-[35vw] font-tiny bg-green-500 drop-shadow-lg px-[10vw]">
        PROJECTS</div>
        <div className='flex flex-col px-[5vw] mt-24 w-full h-[100vh]'>
            Full Stack Projects
            <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
            
        </div>
        <div className='flex flex-col px-[5vw] mt-24 w-full [100vh]'>
            Extra Projects
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
        </div>

    </div>
  )
}

export default Projects;