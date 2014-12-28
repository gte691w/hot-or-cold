describe('evaluateGuess', function() {
  it("returns false if an input is not a number", function() {
    evaluateGuess("hello").should.equal(false);
  });

  it("returns false if an input is in decimal form", function() {
    evaluateGuess("23.1").should.equal(false);
  });

  it("returns true if an input is an integer", function() {
    evaluateGuess("23").should.equal(true);
  });

});

describe('guessRange', function() {
  it("returns 'Ice Cold' if the difference between the parameters is greater than 50", function() {
    guessRange('20',71).should.equal("Ice Cold");
  });
  it("returns 'Cold' if the difference between the parameters is greater than 30 but less than or eual to 50", function() {
    guessRange('20',52).should.equal("Cold");
  });
  it("returns 'Warm' if the difference between the parameters is greater than 20 but less than or equal to 30", function() {
    guessRange('20',41).should.equal("Warm");
  });
  it("returns 'Hot' if the difference between the parameters is greater than 10 but less than or eaqul to 20", function() {
    guessRange('20',31).should.equal("Hot");
  });
  it("returns 'Very Hot' if the difference between the parameters is greater than 1 but less than or equal to 10", function() {
    guessRange('20',22).should.equal("Very Hot");
  });
  it("returns 'Bingo' if the difference between the parameters is 0", function() {
    guessRange('20',20).should.equal("Bingo");
  });
});






	