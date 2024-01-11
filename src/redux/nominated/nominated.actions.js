import SetNomineeTypes from "./nominated.types";
// import nomineeReducer from "./nominated.reducer";

export const addNominee = (nominee) => ({
  type: SetNomineeTypes.SET_NOMINEE_LIST,
  payload: nominee,
});

export const removeNominee = (nominee) => ({
  type: SetNomineeTypes.REMOVE_NOMINATED_ITEM,
  payload: nominee,
});
