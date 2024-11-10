import * as yup from 'yup';

export default (state, url) => {
  const urlLists = state.feeds;
  const schema = yup.string().url().required('Заполните это поле').notOneOf(urlLists);
  return schema.validate(url);
};
