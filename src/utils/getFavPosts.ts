// gets favourite posts from localstorage
const getFavPosts = () =>
  JSON.parse(window.localStorage.getItem('favposts') || '[]');

export default getFavPosts;
