import * as yup from 'yup';

export type UpsertAnswerBodyType = {
  sv: string,
  fi: string,
  isCorrect: boolean
}

export const upsertAnswerBodySchema = yup.object().shape({
  sv: yup.string().required(),
  fi: yup.string().required(),
  isCorrect: yup.boolean().required()
});

export default UpsertAnswerBodyType;
