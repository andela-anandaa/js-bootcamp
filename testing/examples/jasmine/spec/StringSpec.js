describe("stringUtil", function() {
  describe("firstWord", function() {
    //specs go here
    it("should return the first word of the string", function() {
      expect(stringUtil.firstWord("one two")).toBe("one");
    });

    it("should delegate its logic to nthWord", function() {
      spyOn(stringUtil, "nthWord");
      stringUtil.firstWord("one two");

      expect(stringUtil.nthWord).toHaveBeenCalled();
    });
  });

  describe("nthWord", function() {
    it("should return the nth word of a string", function() {
      expect(stringUtil.nthWord("one two", 1)).toBe("one");
      expect(stringUtil.nthWord("one two", 2)).toBe("two");
    })
  });

});


//custom matcher
this.addMatcher({
    toEndWith: function(expected) {
      return this.actual[this.actual.length - 1] === expected;
    }
});
