import Logo from "../../../../../core/ui/client/components/Logo";

type QuizEndScreenProps = {
  correctAnswersCount: number,
  questionCount: number
}

const QuizEndScreen = ({ correctAnswersCount, questionCount }: QuizEndScreenProps) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[700px] p-4">
      <Logo title="quiz" />

      <div className="mt-8 sm:mt-16 space-y-4 text-center">
        <p>Tack för att du svarat på vårt quiz!</p>
        <p>Du hade <strong>{ correctAnswersCount } rätt</strong> av <strong>{ questionCount } frågor</strong>.</p>
      </div>
    </div>
  );
}

export default QuizEndScreen;
