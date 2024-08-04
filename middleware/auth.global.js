// middleware/auth.global.js

export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.client) {
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('token_expiration');
    const currentTime = new Date().getTime();

    // 排除登入頁面
    if (to.path === '/login') {
      return;
    }

    if (!token || !tokenExpiration || currentTime > tokenExpiration) {
      localStorage.removeItem('token');
      localStorage.removeItem('token_expiration');
      return navigateTo('/login');
    } else {
      // 每次導航時重置 token 過期時間
      const newExpirationTime = new Date().getTime() + 300000 ; // 300 秒後過期
      localStorage.setItem('token_expiration', newExpirationTime);
    }
  }
});
