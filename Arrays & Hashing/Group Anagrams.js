/* Group Anagrams
medium 

https://neetcode.io/problems/anagram-groups?list=neetcode150

Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Example 2:
Input: strs = ["x"]
Output: [["x"]]

Example 3:
Input: strs = [""]
Output: [[""]]

Constraints:
1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.
*/

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let result = [[]];
    let map = {};
    for (let i = 0; i < strs.length; i++) {
      let tempWord = strs[i].split("").sort().join("");
      if (!(tempWord in map)) {
        map[tempWord] = Object.keys(map).length;
      }
      if (map[tempWord] >= result.length) {
        result.push([strs[i]]);
      } else {
        result[map[tempWord]].push(strs[i]);
      }
    }
    return result;
  }
}

// chatGPT for better time

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let map = new Map();

    for (let word of strs) {
      // Build character frequency key: O(m)
      const count = new Array(26).fill(0);
      for (let ch of word) {
        count[ch.charCodeAt(0) - 97]++; // assuming all lowercase
      }

      // Convert count array to string to use as map key
      const key = count.join("#"); // unique per anagram group

      // Group words by frequency key
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(word);
    }

    // Return grouped anagrams
    return Array.from(map.values());
  }
}
