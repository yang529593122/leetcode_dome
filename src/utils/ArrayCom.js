/**
 * Time: 2021/8/31.
 * Author: Yang PengFei
 */


/**
 * 搜索插入位置
 * @param {*} nums 数组
 * @param {*} target 要插入的对象
 * @return {number} 插入后的下标
 */
export const  searchInsert =  (nums,target) =>{
    const len =nums.length;
    for(let i=0; i<len; i++){
        if(nums[i]>=target){return i;}
    }
}

/**
 * 盛最多水的容器
 * @param {number[]} height
 * @return {number}
 */
export const maxArea = (height) =>{
    let l = 0
    let r= height.length - 1;
    let ans = 0
    while (l < r){
        let area = Math.min(height[l], height[r]) * (r - l);
        ans = Math.max(ans, area);
        height[l] <= height[r] ? ++l : --r
    }
    return ans;
}

/**
 * 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = (nums) =>{
    let arr = [];
    nums.sort((a,b) => {
        return a - b;
    })
    for(let i = 0;i < nums.length;i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1,right = nums.length - 1;
        let a = nums[i];
        while(left < right){
            let b = nums[left];
            let c = nums[right];
            if(a + b + c === 0){
                arr.push([a,b,c]);
                //神来之笔，诸位道友有想过for循环怎么用嘛，哈哈哈
                for(left++;left < right && nums[left] === nums[left - 1];left++);
            }else if(a + b + c < 0){
                left++;
            }else{
                right--;
            }
        }
    }
    return arr;
}
/**
 * 删除有序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = (nums) =>{
    const n = nums.length;
    if (n === 0) {
        return 0;
    }
    let fast = 1, slow = 1;
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};

/**
 * 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export const  removeElement = (nums, val) =>{
    let left = 0, right = nums.length;
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
};

/**
 * 下一个排列
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export  const nextPermutation = (nums) =>{
    let i = nums.length - 2
    let j = nums.length - 1
    let k = nums.length - 1

    while (nums[i] >= nums[j] && i >= 0) {
        i--
        j--
    }

    if (i >= 0) {
        while (nums[k] <= nums[i]) k--
        [nums[i], nums[k]] = [nums[k], nums[i]]
    }

    i = j
    j = nums.length - 1
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++
        j--
    }

    return nums
}

/**
 * 搜索旋转排序数组
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export  const search = (nums,target) =>{
    let n = nums.length;
    if (n == 0) {
        return -1;
    }
    if (n == 1) {
        return nums[0] == target ? 0 : -1;
    }
    let l = 0, r = n - 1;
    while (l <= r) {
        let mid = (l + r) / 2;
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[n - 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
}


