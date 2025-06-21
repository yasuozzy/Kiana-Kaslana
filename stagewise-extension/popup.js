document.addEventListener('DOMContentLoaded', function() {
  // 获取当前标签页
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentTab = tabs[0];

    // 切换工具栏
    document.getElementById('toggleToolbar').addEventListener('click', function() {
      chrome.scripting.executeScript({
        target: {tabId: currentTab.id},
        function: () => {
          const toolbar = document.getElementById('stagewise-toolbar');
          if (toolbar) {
            toolbar.style.display = toolbar.style.display === 'none' ? 'flex' : 'none';
          }
        }
      });
    });

    // 开始选择元素
    document.getElementById('startSelection').addEventListener('click', function() {
      chrome.scripting.executeScript({
        target: {tabId: currentTab.id},
        function: () => {
          document.body.style.cursor = 'crosshair';
          const handleClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.body.style.cursor = 'default';
            document.removeEventListener('click', handleClick);

            const element = e.target;
            element.style.outline = '2px solid #140A47';
            console.log('Selected element:', element);
          };

          document.addEventListener('click', handleClick);
        }
      });
    });

    // 开始AI编辑
    document.getElementById('startAIEdit').addEventListener('click', function() {
      chrome.scripting.executeScript({
        target: {tabId: currentTab.id},
        function: () => {
          console.log('AI edit mode activated');
          // 这里可以添加AI编辑的具体实现
        }
      });
    });
  });
});
