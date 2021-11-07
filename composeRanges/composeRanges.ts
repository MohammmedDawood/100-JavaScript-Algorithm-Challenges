function composeRanges(nums: number[]): string[] {
  let result: string[] = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      start = nums[i];
      end = nums[i];
    } else if (nums[i] === nums[i - 1] + 1) {
      end = nums[i];
    } else {
      if (start === end) {
        result.push(`${start}`);
      } else {
        result.push(`${start}->${end}`);
      }
      start = nums[i];
      end = nums[i];
    }
  }
  if (start === end) {
    result.push(`${start}`);
  } else {
    result.push(`${start}->${end}`);
  }
  return result;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
