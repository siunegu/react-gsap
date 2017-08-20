export function openNav() {
  return (dispatch, getState) => {
    dispatch({ type: 'TOGGLE_NAV' })
  };
}
