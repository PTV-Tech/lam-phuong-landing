'use client';

import {useEffect, useState} from 'react';
import {clsx} from "clsx";
import Image from "next/image";

export default function FullScreenLoader({message = "Loading"}) {
    const [dots, setDots] = useState('');

    // Hiệu ứng "..." cho loading text
    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 400);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50">
            {/* Spinner chính */}
            <div className="relative">
                {/* Vòng ngoài quay chậm */}
                <div
                    className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin [animation-duration:1.5s]"></div>

                {/* Vòng trong quay nhanh hơn */}
                <div
                    className="absolute top-1/2 left-1/2 w-12 h-12 -mt-6 -ml-6 border-4 border-transparent border-r-blue-400 rounded-full animate-spin [animation-duration:1s]"></div>

                {/* Vòng nhỏ nhất quay ngược lại */}
                <div
                    className="absolute top-1/2 left-1/2 w-6 h-6 -mt-3 -ml-3 border-2 border-transparent border-b-blue-500 rounded-full animate-spin [animation-direction:reverse] [animation-duration:0.75s]"></div>
            </div>

            {/* Text với hiệu ứng dots */}
            <div className="mt-8 text-center">
                <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    {message}<span className="inline-block w-7 text-left">{dots}</span>
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Please wait while we prepare everything for you
                </p>
            </div>
        </div>
    );
}