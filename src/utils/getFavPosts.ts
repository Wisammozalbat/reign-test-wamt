const getFavPosts = () =>
  JSON.parse(window.localStorage.getItem('favposts') || '[]');

export default getFavPosts;
