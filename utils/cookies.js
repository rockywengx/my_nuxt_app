import { useCookie, useState } from "#imports";
export const get12HoursCookies = (name) => {
  const cookie = useCookie(name, { maxAge: 60 * 60 * 12 , default: () => {}});
  const state = useState(name, () => cookie.value ?? {});
  watch(state, () => {
    cookie.value = state.value
  });
  return state;
};

