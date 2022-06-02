---
id: javascript
title: JavaScript
---

## Utils

```javascript
// Copy string to clipboard
const copyToClipboard = (str) => navigator.clipboard.writeText(str)

// Capitalize a string
const capitalize = (str) => str.replace(/^\w/, (c) => c.toUpperCase())
// or
// str.charAt(0).toUpperCase() + str.slice(1);

// Reverse an array
arr.reverse() // Reverses array in-place
arr.concat().reverse() // Returns a new reversed clone

// Reverse a string
const reverseString = (str) => [...str].reverse().join('')

// Get random item from an array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

// Get unique values from an array
const getUniqueValues = (arr) => [...new Set(arr)]

// Get sum of numbers in an array
const getSum = (arr) => arr.reduce((a, b) => a + b)

// Get average of numbers in an array
const getAverage = (arr) => arr.reduce((a, b) => a + b) / arr.length
```

- Shuffle an array [[\*](https://stackoverflow.com/a/12646864/16542541)]

  ```javascript
  // Durstenfeld shuffle
  // Shuffles array in-place
  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  // Simple shuffle (Not properly distributed and inefficient)
  // arr.sort(() => (0.5 - Math.random());
  ```

- Format a date string [[Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat), [toLocaleDateString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)]

  ```javascript
  const formatDate = (dateString) => {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }
    return new Intl.DateTimeFormat('en', options).format(dateString)
    // or
    // new Date(dateString).toLocaleDateString('en-US', options);
  }

  // Usage
  formatDate('1987-07-27T12:34:56') // Mon, Jul 27, 1987, 12:34:56
  ```

- Format a number [[Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)]

  ```javascript
  const formatNumber = (number) => {
    const options = {
      notation: 'compact',
      compactDisplay: 'short',
    }
    return new Intl.NumberFormat('en', options).format(number)
  }

  // Usage
  formatNumber(123456) // 123K
  formatNumber(456789012) // 457M
  ```

- Convert seconds to HH:MM:SS

  ```javascript
  const secToHHMMSS = (sec) => {
    let hours = Math.floor(sec / 3600)
    sec %= 3600
    let minutes = Math.floor(sec / 60)
    let seconds = Math.floor(sec % 60)

    hours = hours < 10 ? `0${hours}` : `${hours}`
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds

    return `${hours}:${minutes}:${seconds}`
  }
  ```

- Padding a string [[padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart), [padEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)]

  ```javascript
  'abc'.padStart(10) // "       abc"
  'abc'.padStart(10, 'foo') // "foofoofabc"
  'abc'.padStart(6, '123465') // "123abc"
  'abc'.padStart(8, '0') // "00000abc"

  'abc'.padEnd(10) // "abc       "
  'abc'.padEnd(10, 'foo') // "abcfoofoof"
  'abc'.padEnd(6, '123456') // "abc123"
  'abc'.padEnd(1) // "abc"
  ```

## Node.js/npm

```shell
# List all user installed packages
npm list -g --depth=0
```

## Redirect to another website

[[\*](https://css-tricks.com/redirect-web-page/)]

```html
<!-- With HTML `<meta>` tags (not recommended by W3C) -->
<meta http-equiv="refresh" content="0; URL='http://new-website.com'" />
```

```javascript
// With JavaScript
window.location = 'http://new-website.com' // or one of these
window.location.href = 'http://new-website.com'
window.location.assign('http://new-website.com')
window.location.replace('http://new-website.com')
```
