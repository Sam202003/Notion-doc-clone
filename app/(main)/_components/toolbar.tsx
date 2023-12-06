"use client";

import IconPicker from "@/components/icon-picker";
import { Button } from "@/components/ui/button";
import { Doc } from "@/convex/_generated/dataModel";
import { ImageIcon, Smile, X } from "lucide-react";

interface ToolbarProps {
  initialData: Doc<"documents">;
  preview?: boolean;
}

const Toolbar = ({ initialData, preview }: ToolbarProps) => {
  return (
    <div className="pl-[54px] group relative">
      {!!initialData.icon && !preview && (
        <div className="flex items-center gap-x-2 group/icon pt-6">
          <IconPicker onChange={() => {}}>
            <p className="text-6xl hover:opacity-75 transition">
              {initialData.icon}
            </p>
          </IconPicker>
          <Button
            onClick={() => {}}
            className="rounded-full opacity-0 group-hover/icon:opacity-100 transition text-muted-foreground text-xs"
            variant="outline"
            size="icon"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      {!!initialData.icon && preview &&(
        <p className="text-6xl pt-6">
            {initialData.icon}
        </p>
      )}

      <div className="opacity-0 group-hover:opacity-100 flex items-center gap-x-1 py-4">
        {
            !initialData.icon && !preview &&(
                <IconPicker asChild onChange={()=>{}}>
                    <Button className="text-muted-foreground text-xs"
                    variant="outline"
                    size="sm"
                    >
                        <Smile className="h-4 w-4 mr-2"/>
                        Add icon
                    </Button>
                </IconPicker>
            )
        }
        {!initialData.coverImage && !preview &&(
            <Button className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
            >
                <ImageIcon className="h-4 w-4 mr-2"/>
                Add hover
            </Button>
        )} 

      </div>
    </div>
  );
};

export default Toolbar;
