/* Valid Anagram
easy 

https://neetcode.io/problems/is-anagram?list=neetcode150

Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: s = "racecar", t = "carrace"
Output: true

Example 2:
Input: s = "jar", t = "jam"
Output: false

Constraints:
s and t consist of lowercase English letters.
*/

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const map = {};
    for (const each of s) {
      map[each] = (map[each] || 0) + 1;
    }
    for (const each of t) {
      map[each] = (map[each] || 0) - 1;
    }
    for (const each in map) {
      if (map[each] != 0) return false;
    }
    return true;
  }
}
