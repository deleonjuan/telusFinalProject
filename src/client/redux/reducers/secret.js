import { handleActions } from "redux-actions";
import redaxios from "redaxios";

// actions type
const storeID = "SECRET";
const MESSAGE = `${storeID}_MESSAGE`;
const HASH = `${storeID}_HASH`;
const LOADER = `${storeID}_LOADER`;

// actions
const setMessage = (message) => ({
  type: MESSAGE,
  message,
});

const setHash = (hash) => ({
  type: HASH,
  hash,
})

const setLoader = (loader) => ({
  type: LOADER,
  loader,
});

//   functions
const getMessage = (urlHash) => async (dispatch) => {
  dispatch(setLoader(true));
  try{
    const res = await redaxios.get(`http://localhost:5000/api/v1/secret/${urlHash}`)
    dispatch(setMessage(res.data? res.data.secret : null))
  }catch(err){
    console.log(err);
  }
  dispatch(setLoader(false));
};

const postMessage = (data) => async (dispatch) => {
  dispatch(setLoader(true));
  try{
    const res = await redaxios.post(`http://localhost:5000/api/v1/secret/`, data)
    dispatch(setHash(res.data? res.data.hash : null))
  }catch(err){
    console.log(err);
  }
  dispatch(setLoader(false));
};

export const actions = {
  getMessage,
  postMessage,
};

// REDUCERS
export const reducers = {
  [MESSAGE]: (state, { message }) => {
    return { ...state, message };
  },
  [HASH]: (state, { hash }) => {
    return { ...state, hash };
  },
  [LOADER]: (state, { loader }) => {
    return { ...state, loader };
  },
};

export const initialState = {
  loader: false,
  message: "",
  hash: "",
};

export default handleActions(reducers, initialState);