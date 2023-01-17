import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import cn from 'classnames';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Input from "../../../../../core/ui/client/components/Input";
import Logo from "../../../../../core/ui/client/components/Logo"
import StartAttemptBodyType, { startAttemptBodySchema } from "../../../shared/types/StartAttemptBodyType";
import useStartAttemptMutation from "../../mutations/useStartAttemptMutation";
import Spinner from "../../../../../core/ui/client/components/Spinner";
import { QuizStateData } from "../Quiz";

export type QuizStatViewProps = {
  onStarted: (data: QuizStateData) => void
}

const StartQuizView = ({onStarted}: QuizStatViewProps) => {

  const { mutate, isLoading: isStarting, isSuccess } = useStartAttemptMutation();
  const { register, handleSubmit, formState: { errors } } = useForm<StartAttemptBodyType>({ resolver: yupResolver(startAttemptBodySchema) });

  useEffect(() => {
    if(!errors.email && !errors.name) return;
    toast.error('Du måste fylla i både namn och en korrekt e-post'); 
  }, [errors]);

  const onSubmit = async (body: StartAttemptBodyType) => {
    mutate(body, {
      onSuccess: (res) => {
        onStarted({
          attempt: res.data.attempt,
          totalQuesitons: res.data.totalQuesitons,
          totalAnswered: res.data.totalAnswered,
          totalCorrectAnswers: 0
        });
      }
    });
  }

  return (
    <div className="flex flex-col items-center w-full max-w-[700px] p-4">
      <Logo title="quiz" />

      <p className="mt-5 sm:mt-16 mb-4 text-xl sm:text-3xl w-full font-bold sm:font-normal tracking-tight sm:tracking-normal">Välkommen till OptiCareer Day-quizet!</p>
      <p className="w-full mb-2 text-lg sm:text-xl leading-6">Denna utmaning innehåller frågor om företagen som deltar i evenemanget.</p>
      <p className="w-full text-lg sm:text-xl leading-6">Observera att du endast har <strong>en chans</strong> att svara på alla frågor och att tiden startar när du trycker på startknappen.</p>

      <div className="flex flex-col space-y-2 w-full mt-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Input disabled={isStarting || isSuccess} label="Namn (för- och efternamn)" className="w-full" {...register('name')} />
        <Input disabled={isStarting || isSuccess} label="E-post" className="w-full" {...register('email')} />
      </div>
      <p className="text-sm text-blue-700 w-full mt-2">* Datan sparas endast under quiz-tillfället och tas bort senast i slutet av dagen</p>

      <button disabled={isStarting || isSuccess} onClick={handleSubmit(onSubmit)} 
        className="relative flex justify-center items-center mt-5 sm:mt-16 px-8 py-4 rounded-full bg-primary text-on-primary font-medium select-none outline-0 hover:bg-primary-light disabled:bg-gray-300">
        <span className={cn(
          { "opacity-0": isStarting || isSuccess }
        )}>Starta quizet</span>
        { (isStarting || isSuccess) && <span className="absolute"><Spinner /></span> }
      </button>
    </div>
  );
}

export default StartQuizView;
