var stringUtil = {
  firstWord: function(text) {
    return this.nthWord(text, 1);
  },
  nthWord: function(text, n) {
    return text.split(" ")[n - 1];
  }
};
