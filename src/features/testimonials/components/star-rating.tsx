import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

const MAX_RATING = 5;

type StarRatingProps = {
  rating: number;
};

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div role="img" aria-label={`Rating ${rating} dari ${MAX_RATING}`} className="flex gap-1">
      {Array.from({ length: MAX_RATING }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={cn(
            "size-5",
            index < rating ? "fill-amber-400 text-amber-400" : "fill-transparent text-slate-300",
          )}
        />
      ))}
    </div>
  );
}
