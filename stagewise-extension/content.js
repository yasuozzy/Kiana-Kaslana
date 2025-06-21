// 创建工具栏容器
const toolbar = document.createElement('div');
toolbar.id = 'stagewise-toolbar';
toolbar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #140A47;
  color: white;
  padding: 8px;
  z-index: 999999;
  display: flex;
  gap: 10px;
  align-items: center;
`;

// 添加工具栏按钮
const buttons = [
  { text: '选择元素', action: () => startElementSelection() },
  { text: 'AI编辑', action: () => startAIEdit() },
  { text: '隐藏', action: () => toggleToolbar() }
];

buttons.forEach(btn => {
  const button = document.createElement('button');
  button.textContent = btn.text;
  button.style.cssText = `
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  `;
  button.onclick = btn.action;
  toolbar.appendChild(button);
});

// 添加到页面
document.body.appendChild(toolbar);

// 元素选择功能
function startElementSelection() {
  document.body.style.cursor = 'crosshair';
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.body.style.cursor = 'default';
    document.removeEventListener('click', handleClick);

    // 高亮选中的元素
    const element = e.target;
    element.style.outline = '2px solid #140A47';

    // 显示元素信息
    console.log('Selected element:', element);
  };

  document.addEventListener('click', handleClick);
}

// AI编辑功能
function startAIEdit() {
  // 这里可以集成您的AI编辑逻辑
  console.log('AI edit mode activated');
}

// 切换工具栏显示
function toggleToolbar() {
  toolbar.style.display = toolbar.style.display === 'none' ? 'flex' : 'none';
}

// 添加样式
const style = document.createElement('style');
style.textContent = `
  #stagewise-toolbar button:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
document.head.appendChild(style);
