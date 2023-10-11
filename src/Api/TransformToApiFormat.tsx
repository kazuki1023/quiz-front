export interface FormData {
  id: number;
  content: string;
  choice1: string;
  choice2: string;
  choice3: string;
  correctChoice: 'choice1' | 'choice2' | 'choice3';
}

export const TransformToApiFormat = (formData: FormData) => {
  // choices部分の変換
  const choices = [
    {
      quiz_id: formData.id,
      answer: formData.choice1,
      valid: formData.choice1 === formData.correctChoice
    },
    {
      quiz_id: formData.id,
      answer: formData.choice2,
      valid: formData.choice2 === formData.correctChoice
    },
    {
      quiz_id: formData.id,
      answer: formData.choice3,
      valid: formData.choice3 === formData.correctChoice
    }
  ];

  return {
    id: formData.id,
    content: formData.content,
    choices: choices
  };
}
