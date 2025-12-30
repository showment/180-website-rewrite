"use client"

import {useEffect, useRef, useState} from 'react';

export default function StatNumber({target, suffix = '', label}: { target: number; suffix?: string; label: string }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {threshold: 0.5}
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, target]);

    return (
        <div className="text-center" ref={ref}>
            <div
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2"
                style={{color: '#8BC34A'}}
            >
                {count.toLocaleString()}{suffix}
            </div>
            <div className="text-lg md:text-xl text-gray-600">
                {label}
            </div>
        </div>
    );
}