import { handleSignIn } from "../../fetch/formActions";
import { getRoles } from "../../fetch/role";
import {
  SET_LANGUAGE,
  SET_ROLES,
  SET_ROLES_ERROR,
  SET_ROLES_REQUEST,
  SET_THEME,
  SET_USER,
  SET_USER_ERROR,
  SET_USER_REQUEST,
} from "../types/client/types";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setUserError = (error) => ({
  type: SET_USER_ERROR,
  error,
});

export const setUserRequest = () => ({
  type: SET_USER_REQUEST,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setRolesError = (error) => ({
  type: SET_ROLES_ERROR,
  error,
});

export const setRolesRequest = () => ({
  type: SET_ROLES_REQUEST,
});

export const getUserRoles = () => {
  return async (dispatch, getState) => {
    const data = getState();
    if (data?.clientReducer?.roles?.length === 0) {
      try {
        dispatch(setRolesRequest());
        const response = await getRoles();
        console.log(response);
        dispatch(setRoles(response));
      } catch (error) {
        console.log(error, "User Role Error");
        dispatch(setRolesError(error));
      }
    }
  };
};

export const handleLogin = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setUserRequest());
      const response = await handleSignIn(data);
      dispatch(setUser(response));
    } catch (error) {
      console.log(error, "User Login Error");
      dispatch(setUserError(error));
    }
  };
};
