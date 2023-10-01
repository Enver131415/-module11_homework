export function countDown(n) {
    if (n > 0) {
        for (let i = n; i >= 1; --i) {
          return i;
      }
      }
    if (n === 0) {
      return 0
    }
    if (typeof n === 'string') {
        return 'string'
      }     
  }
  countDown(0)

