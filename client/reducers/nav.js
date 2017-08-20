const initialVal = {
  opened: false
};

export default function (state = initialVal, action = {}) {
  switch (action.type) {
    case 'TOGGLE_NAV': {
      return Object.assign({}, state, { opened: !state.opened });
    }
    default: {
      return state;
    }
  }
}
