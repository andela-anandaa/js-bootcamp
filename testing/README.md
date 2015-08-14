#Test Driven Development In JavaScript

##Introduction
TDD is an iterative development process where each iteration starts by writing a test which forms a part of the specification we are implementing.

If there are no unit tests as well, solutions produced with this approach may even contain code that is never executed, such as error handling logic and "flexible" argument handling, or it may contain edge cases that have not been thoroughly tested, if tested at all.

**Process:**

* Write a test
* Run tests, watch the new test fail
* Make the test pass
* Refactor to remove duplication

**Why TDD?**

* Leads to better code design by encouraging smaller units of code which you can combine to achieve your larger goals.
* Having tests/specs lets you refactor with confidence.
* Writing the specs first means that they are going to be more complete, so you can have more confidence in them.
* Since you saw the specs fail, you know that they can fail. Which is a great thing.
* The more confidence you have in your tests/specs, the faster you can improve your existing code.
* Obviously, the bigger and more important a system you're building, the more helpful these techniques will be.

##References
* [Tuts+: Test-Driven JavaScript Development in Practice](http://code.tutsplus.com/tutorials/test-driven-javascript-development-in-practice--net-16246)
* [Joshua Clanton: TDD with Jasmin](http://adripofjavascript.com/tdd-with-jasmine/#1)
