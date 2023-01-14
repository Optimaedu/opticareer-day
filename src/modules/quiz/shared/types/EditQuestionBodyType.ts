import * as yup from 'yup';

export type EditQuestionBodyType = {
  sv: string,
  fi: string
}

export const editQuestionBodySchema = yup.object().shape({
  sv: yup.string().required(),
  fi: yup.string().required()
});

export default EditQuestionBodyType;
