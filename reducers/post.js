export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "BonnieC",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://user-images.githubusercontent.com/68591616/197114835-ac101ba7-4271-433d-a4c1-1be37b008f13.jpg",
        },
        {
          src: "https://user-images.githubusercontent.com/68591616/197114859-85dc51ce-cb85-4125-b635-3eb791706dc2.jpg",
        },
        {
          src: "https://user-images.githubusercontent.com/68591616/197114881-824baadb-4fd2-4c28-8f8f-df12e374bdfc.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "릿",
          },
          content: "역시 난 멋져ㅋㅋ",
        },
        {
          User: {
            nickname: "Bonnie",
          },
          content: "배고파요!",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
