// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// var intersect = function (nums1, nums2) {
//     const s = new Set(nums1);
//     return [...new Set(nums2.filter(x => s.has(x)))];
// };

var intersect = function (nums1, nums2) {
    const cnt = {};
    for (const x of nums1) {
        cnt[x] = (cnt[x] || 0) + 1;
    }
    const ans = [];
    for (const x of nums2) {
        if (cnt[x]-- > 0) {
            ans.push(x);
        }
    }
    return ans;
};