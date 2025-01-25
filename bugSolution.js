```javascript
//Solution: Check before decrementing
db.collection('counters').findOneAndUpdate(
  { _id: 'myCounter', seq: { $gt: 0 } },
  { $inc: { seq: -1 } },
  { returnOriginal: false }
);
```