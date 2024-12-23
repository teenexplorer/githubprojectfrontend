import { RegistrationData } from "@/types/registration";
import { Question } from "@/types/questionnaire";

export const saveRegistrationData = (
  gpId: string,
  villageId: string,
  houseId: string,
  formData: RegistrationData,
  questions: Question[]
) => {
  // Save form data
  localStorage.setItem(
    `registration-${gpId}-${villageId}-${houseId}`,
    JSON.stringify({ formData, questions })
  );

  // Add to MIS data
  const misData = JSON.parse(localStorage.getItem('mis-data') || '[]');
  misData.push({
    id: Date.now(),
    gpId,
    villageId,
    houseId,
    ...formData,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('mis-data', JSON.stringify(misData));
};