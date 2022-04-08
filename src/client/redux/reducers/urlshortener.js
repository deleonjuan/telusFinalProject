import { handleActions } from "redux-actions";
import redaxios from "redaxios";

// actions type
const storeID = "SHORTENER";
const URL = `${storeID}_URL`;
const NEWURL = `${storeID}_NEWURL`;
const LOADER = `${storeID}_LOADER`;

// actions
const setUrl = (url) => ({
  type: URL,
  url,
});

const setNewUrl = (newUrl) => ({
  type: NEWURL,
  newUrl,
});

const setLoader = (loader) => ({
  type: LOADER,
  loader,
});

//   functions
const getUrl = (urlHash) => async (dispatch) => {
  dispatch(setLoader(true));
  try{
    const res = await redaxios.get(`https://telus-final-project.herokuapp.com/api/v1/urlshrt/${urlHash}`)
    dispatch(setUrl(res.data? res.data.url : null))
  }catch(err){
    console.log(err);
  }
  dispatch(setLoader(false));
};

const postUrl = (data) => async (dispatch) => {
  dispatch(setLoader(true));
  try{
    const res = await redaxios.post(`https://telus-final-project.herokuapp.com/api/v1/urlshrt/`, data)
    dispatch(setNewUrl(res.data? res.data.hash : null))
  }catch(err){
    console.log(err);
  }
  dispatch(setLoader(false));
};

export const actions = {
  getUrl,
  postUrl,
};

// REDUCERS
export const reducers = {
  [URL]: (state, { url }) => {
    return { ...state, url };
  },
  [LOADER]: (state, { loader }) => {
    return { ...state, loader };
  },
  [NEWURL]: (state, { newUrl }) => {
    return { ...state, newUrl };
  },
};

export const initialState = {
  loader: false,
  url: "",
  newUrl: "",
};

export default handleActions(reducers, initialState);