// statement: Group objects by a specific key
const object1 = [
  {
    key: 'value1',
    data: 'data1'
  },
  {
    key: 'value1',
    data: 'data1'
  },
  {
    key: 'value1',
    data: 'data1'
  },
  {
    key: 'value2',
    data: 'data1'
  },
  {
    key: 'value3',
    data: 'data1'
  },
  {
    key: 'value4',
    data: 'data1'
  },
]

const output = {}

object1.forEach(item => {
  if (output[item.key]) {
    // output[item.key] = [...output[item.key], item]
    output[item.key].push(item)
  } else {
    output[item.key] = [item]
  }
})
console.log('>>> output:', output);

//with reduce
const outputReduce = object1.reduce((acc, item) => {
  if (acc[item.key]) {
    acc[item.key].push(item)
  } else {
    acc[item.key] = [item]
  }
  return acc
}, {})

console.log('>>> outputReduce:', outputReduce);
// Expected output:
// {
//   value1: [ { key: 'value1', data: 'data1' }, { key: 'value1', data: 'data1' }, { key: 'value1', data: 'data1' } ],
//   value2: [ { key: 'value2', data: 'data1' } ],
//   value3: [ { key: 'value3', data: 'data1' } ],
//   value4: [ { key: 'value4', data: 'data1' } ]
// }