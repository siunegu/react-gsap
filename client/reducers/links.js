const initialVal = [
  { title: 'linkedin', url: 'https://www.linkedin.com/in/siunegu/' },
  { title: 'github', url: 'https://github.com/siunegu' },
  { title: 'instagram', url: 'https://www.instagram.com/siunegu/' }
];

export default function (state = initialVal, action = {}) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
