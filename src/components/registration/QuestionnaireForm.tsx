import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Question } from "@/types/questionnaire";

interface QuestionnaireFormProps {
  questions: Question[];
  onQuestionChange: (questionId: number, value: string) => void;
  onImagesChange: (questionId: number, files: FileList) => void;
}

export const QuestionnaireForm = ({ 
  questions, 
  onQuestionChange,
  onImagesChange 
}: QuestionnaireFormProps) => {
  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold mb-4">Questionnaire</h2>
        {questions.map((question) => (
          <div key={question.id} className="space-y-2 p-4 border rounded-lg">
            <Label htmlFor={`q${question.id}`}>{question.text}</Label>
            <Input
              id={`q${question.id}`}
              value={question.answer}
              onChange={(e) => onQuestionChange(question.id, e.target.value)}
            />
            {question.requiresImage && (
              <div className="mt-4">
                <Label htmlFor={`images${question.id}`}>Upload Images</Label>
                <Input
                  id={`images${question.id}`}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => {
                    if (e.target.files) {
                      onImagesChange(question.id, e.target.files);
                    }
                  }}
                />
                {question.images && question.images.length > 0 && (
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {question.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Question ${question.id} Image ${index + 1}`}
                        className="w-20 h-20 object-cover rounded"
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};