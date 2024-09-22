document.addEventListener('DOMContentLoaded', function () {
  var scrollspy = document.getElementById('scrollspy');
  var kvSection = document.getElementById('kv');
  var kvLink = document.getElementById('link-kv');

  // 檢查元素是否正確獲取
  console.log('Scrollspy element:', scrollspy);
  console.log('KV section element:', kvSection);
  console.log('KV link element:', kvLink);

  function updateActiveClass() {
      // 取得 kv 區域和 scrollspy 的相對位置
      var kvRect = kvSection.getBoundingClientRect();
      var scrollspyRect = scrollspy.getBoundingClientRect();

      // 打印獲取的位置信息
      console.log('KV section position:', kvRect);
      console.log('Scrollspy position:', scrollspyRect);

      // 確認 kv 區域是否有任何部分進入 scrollspy 的可視範圍內
      if (kvRect.top < scrollspyRect.bottom && kvRect.bottom > scrollspyRect.top) {
          console.log('KV section is within view');
          if (!kvLink.classList.contains('active')) {
              console.log('Adding .active class');
              kvLink.classList.add('active');
          }
      } else {
          console.log('KV section is out of view');
          if (kvLink.classList.contains('active')) {
              console.log('Removing .active class');
              kvLink.classList.remove('active');
          }
      }
  }

  // 監聽 scrollspy 區域的滾動事件
  scrollspy.addEventListener('scroll', updateActiveClass);

  // 立即執行一次以設置初始狀態
  updateActiveClass();
});
