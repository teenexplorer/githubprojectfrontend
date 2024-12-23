 import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const GPList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">GP List</h1>
      <ScrollArea className="h-[calc(100vh-200px)] w-full">
        <div className="space-y-4 p-4">
          {Array.from({ length: 4 }, (_, i) => (
            <Button
              key={i}
              className="w-full text-left justify-start text-lg p-6"
              variant="outline"
              onClick={() => navigate(/village-list/${i + 1})}
            >
              GP {i + 1}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
export default GPList;     