import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FilterChipsProps {
  chips: string[];
  selected?: string[];
  disabled?: string[];
  onChange?: (chip: string) => void;
}

const FilterChips = ({ 
  chips, 
  selected = [], 
  disabled = [], 
  onChange 
}: FilterChipsProps) => {
  const handleChipClick = (chip: string) => {
    if (!disabled.includes(chip) && onChange) {
      onChange(chip);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {chips.map((chip, index) => {
        const isSelected = selected.includes(chip);
        const isDisabled = disabled.includes(chip);
        
        return (
          <Badge
            key={index}
            variant={isSelected ? "default" : "outline"}
            className={`
              cursor-pointer px-4 py-2 text-sm font-accent tracking-wide transition-all duration-200
              ${isSelected 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "border-border text-foreground hover:border-primary hover:text-primary"
              }
              ${isDisabled 
                ? "opacity-50 cursor-not-allowed" 
                : "hover-scale"
              }
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            `}
            onClick={() => handleChipClick(chip)}
            aria-pressed={isSelected}
            tabIndex={isDisabled ? -1 : 0}
            onKeyDown={(e) => {
              if ((e.key === "Enter" || e.key === " ") && !isDisabled) {
                e.preventDefault();
                handleChipClick(chip);
              }
            }}
          >
            {chip}
          </Badge>
        );
      })}
    </div>
  );
};

export default FilterChips;