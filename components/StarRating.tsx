"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
    rating: number; // 0-5
    size?: "sm" | "md" | "lg";
    showCount?: boolean;
    count?: number;
}

export function StarRating({ rating, size = "md", showCount = false, count }: StarRatingProps) {
    const sizeClasses = {
        xs: "w-3 h-3",
        sm: "w-3.5 h-3.5",
        md: "w-5 h-5",
        lg: "w-6 h-6",
    };

    const starSize = sizeClasses[size];

    // Generate array of 5 stars
    const stars = Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        const filled = rating >= starValue;
        const halfFilled = rating >= starValue - 0.5 && rating < starValue;

        return (
            <span key={index} className="relative inline-block">
                {/* Background star (empty) */}
                <Star className={`${starSize} text-gray-300`} />

                {/* Filled star */}
                {filled && (
                    <Star
                        className={`${starSize} text-warning absolute top-0 left-0`}
                        fill="currentColor"
                    />
                )}

                {/* Half-filled star */}
                {halfFilled && !filled && (
                    <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                        <Star
                            className={`${starSize} text-warning`}
                            fill="currentColor"
                        />
                    </div>
                )}
            </span>
        );
    });

    return (
        <div className="flex items-center gap-1">
            <div className="flex gap-0.5">{stars}</div>
            {showCount && count !== undefined && (
                <span className="text-sm text-muted-foreground ml-1">
                    ({count})
                </span>
            )}
        </div>
    );
}
