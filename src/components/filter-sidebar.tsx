import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useEffect, useState } from 'react';

const categories = [
  { name: "HTML5", count: 230 },
  { name: "Mobile", count: 95 },
  { name: "PHP Scripts", count: 35 },
  { name: "JavaScript Apps", count: 18 },
  { name: "WordPress", count: 15 },
  { name: "CSS", count: 6 },
  { name: "Apps", count: 3 },
  { name: "Plugins", count: 2 },
  { name: ".NET", count: 1 },
];

interface FilterSidebarProps {
  onCategoryChange: (selectedCategories: string[]) => void;
}

export function FilterSidebar({ onCategoryChange }: FilterSidebarProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategories(prevState => {
      const newCategories = prevState.includes(categoryName)
        ? prevState.filter(name => name !== categoryName)
        : [...prevState, categoryName];
      return newCategories;
    });
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
  };

  useEffect(() => {
    onCategoryChange(selectedCategories);
  }, [selectedCategories, onCategoryChange]);

  return (
    <div className="w-[280px] space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filter & Refine</h2>
        <Button
          variant="ghost"
          size="sm"
          className="lg:py-2 lg:px-1 p-0 pr-12 lg:pr-0"
          onClick={handleClearAll}
        >
          Clear all
        </Button>
      </div>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
          Category
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="space-y-2 pt-2">
            {categories.map((category) => (
              <label
                key={category.name}
                className="flex cursor-pointer items-center justify-between py-1"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    checked={selectedCategories.includes(category.name)}
                    onChange={() => handleCategoryChange(category.name)}
                  />
                  <span>{category.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {category.count}
                </span>
              </label>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
