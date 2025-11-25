/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const freqs = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freqs[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    freqs[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }
    for (let freq of freqs) {
        if(freq !== 0) return false
    }

    return true
};
