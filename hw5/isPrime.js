function isPrime(num) {
    // 如果 num 是小於 2 的整數，則不是質數
    if (num < 2) {
      return false;
    }
    
    // 如果 num 為 2 或 3，則是質數
    if (num === 2 || num === 3) {
      return true;
    }
    
    // 如果 num 為偶數，則不是質數
    if (num % 2 === 0) {
      return false;
    }
    
    // 從 3 開始，以 2 為間隔檢查 num 是否為質數
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    
    // 如果都沒有被整除，則是質數
    return true;
  }
  
  // 測試是否為質數
  console.log(isPrime(7)); // true
  console.log(isPrime(12)); // false