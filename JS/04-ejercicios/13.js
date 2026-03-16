const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

function matchGloves(gloves) {

  const result = []
  const storage = {}

  for (const glove of gloves) {

    const { color, hand } = glove

    if (!storage[color]) {
      storage[color] = { L: 0, R: 0 }
    }

    const opposite = hand === 'L' ? 'R' : 'L'

    if (storage[color][opposite] > 0) {
      storage[color][opposite]--
      result.push(color)
    } else {
      storage[color][hand]++
    }

  }

  return result
}

console.log(matchGloves(gloves))
