import { useQuery } from "react-query"
import Question from "../../../../core/mikro-orm/shared/entities/Question";
import apiRequest from "../../../../core/utils/client/api-request";

const fetchQuestions = () => {
  return apiRequest.get<{ questions: Question[] }>('/question');
};

const useFetchAllQuestions = () => (
  useQuery(['questions'], () => fetchQuestions())
);

export default useFetchAllQuestions;