import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => async dispatch => {
  let response = await jsonPlaceHolder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};
