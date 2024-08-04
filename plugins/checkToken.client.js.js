export default defineNuxtPlugin(() => {
    function checkTokenExpiration(){
      const tokenExpiration = localStorage.getItem('token_expiration');
      const currentTime = new Date().getTime();
      if (tokenExpiration && currentTime > tokenExpiration) {
        localStorage.removeItem('token');
        localStorage.removeItem('token_expiration');
        alert('token已過期，請重新登入');
        navigateTo('/login');
      }
    };
  
    // 設置計時器，每秒檢查一次 token 過期時間
    setInterval(checkTokenExpiration, 1000);
  });