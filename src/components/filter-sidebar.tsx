import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from 'react'

const categories = [
  { name: "HTML5", count: 230 },
  { name: "Mobile", count: 95 },
  { name: "PHP Scripts", count: 35 },
  { name: "JavaScript", count: 18 },
  { name: "WordPress", count: 15 },
  { name: "CSS", count: 6 },
  { name: "Apps", count: 3 },
  { name: "Plugins", count: 2 },
  { name: ".NET", count: 1 },
]

export function FilterSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[280px] space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filter & Refine</h2>
        <Button
          variant="ghost"
          size="sm"
          className="lg:py-2 lg:px-1 p-0 pr-12 lg:pr-0"
        >
          Clear all
        </Button>
      </div>

      <Collapsible defaultOpen open={open} onOpenChange={setOpen}>
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
                  <input type="checkbox" className="rounded border-gray-300" />
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
  )
}