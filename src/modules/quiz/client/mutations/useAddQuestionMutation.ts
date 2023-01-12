import { useMutation, useQueryClient } from "react-query";
import apiRequest from "../../../../core/utils/client/api-request";
import AddQuestionBodyType from "../../shared/types/AddQuestionBodyType";

const addQuestion = async ({ input }: {input: AddQuestionBodyType}) => (
  apiRequest.post('/question', input)
);

const useAddQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((data: {input: AddQuestionBodyType}) => addQuestion({input: data.input}), {
    onSuccess: () => {
      queryClient.invalidateQueries('questions');
    }
  });
}

export default useAddQuestionMutation;
