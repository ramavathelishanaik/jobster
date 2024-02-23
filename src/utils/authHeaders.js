const authHeaders = (thunkAPI) => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState()?.user?.user?.token}`,
    },
  };
};
export default authHeaders