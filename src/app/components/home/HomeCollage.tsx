'use client';

import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import {collageData} from "@/data/collageData";


export default function HomeCollage() {
    return (
        <Box sx={{width: '100%', height: '100%', overflowY: 'hidden'}}>
            <ImageList variant="masonry" cols={3} gap={10}>
                {collageData.map((item) => (
                    <ImageListItem key={item.img} sx={{mb: 2}}>
                        <div className="relative w-full h-auto rounded-lg overflow-hidden">
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={400}
                                height={500}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block'
                                }}
                                className="hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}