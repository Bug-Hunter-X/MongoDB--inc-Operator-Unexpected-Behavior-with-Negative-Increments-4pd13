# MongoDB $inc Operator Unexpected Behavior
This repository demonstrates a potential issue when using the `$inc` operator in MongoDB with negative increments.  The `$inc` operator, while generally useful for atomic counter updates, can lead to unexpected results if not handled carefully.

## Issue
The provided `bug.js` script showcases the problem. It attempts to decrement a counter using `$inc: { seq: -1 }`. This might not be problematic in the context of a simple counter, but if there is any chance of the counter falling below zero, this will create unexpected behavior.  You might see negative values for your counters, which can be detrimental to your application's logic.

## Solution
The `bugSolution.js` script offers a better solution, which prevents these negative values and provides more robust counter handling. It performs a check before decrementing, ensuring the counter remains non-negative.