import { getRoles } from "../../fetch/role";
import {
  SET_LANGUAGE,
  SET_ROLES,
  SET_ROLES_ERROR,
  SET_ROLES_REQUEST,
  SET_THEME,
  SET_USER,
} from "../types/client/types";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
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
    const { client } = getState();
    if (client.roles.length <= 0) {
      try {
        dispatch(setRolesRequest());
        const response = await getRoles();
        dispatch(setRoles(response.data));
      } catch (error) {
        console.log(error, "User Role Error");
        dispatch(setRolesError(error));
      }
    }
  };
};
