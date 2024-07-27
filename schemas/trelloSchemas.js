const yup = require('yup');

const createBoardSchema = yup.object({
  body: yup.object({
    boardName: yup.string().required('Board name is required'),
  }),
});

const createListSchema = yup.object({
  body: yup.object({
    listName: yup.string().required('List name is required'),
  }),
  params: yup.object({
    boardId: yup.string().required('Board ID is required'),
  }),
});

const createCardSchema = yup.object({
  body: yup.object({
    cardName: yup.string().required('Card name is required'),
  }),
  params: yup.object({
    listId: yup.string().required('List ID is required'),
  }),
});

module.exports = {
  createBoardSchema,
  createListSchema,
  createCardSchema,
};