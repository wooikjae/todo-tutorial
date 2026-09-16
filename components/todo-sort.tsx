"use client";

import { SORT_OPTIONS, type SortBy } from "@/lib/types";
import { RoundButton } from "@/components/round-button";

interface TodoSortProps {
  value: SortBy;
  onChange: (value: SortBy) => void;
}

export function TodoSort({ value, onChange }: TodoSortProps) {
  return (
    <div role="radiogroup" aria-label="정렬" className="flex gap-1">
      {SORT_OPTIONS.map((item) => {
        const selected = item.value === value;
        return (
          <RoundButton
            key={item.value}
            type="button"
            size="sm"
            variant={selected ? "default" : "outline"}
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </RoundButton>
        );
      })}
    </div>
  );
}
