var stringUtil = {
  firstWord: function(text) {
    return text.split(" ")[0];
  },
  nthWord: function(text, n) {
    return text.split(" ")[n - 1];
  }
};
