let i = 1;                      // 当前盒子序号
const j = 3;                    // 盒子总数

function csjs() {
  i = i % j || j;               // 循环归零逻辑优化
  宽度(i);
  高度(i === 1 ? j : i-1, 0);   // 直接计算前一个索引
  高度(i, 1);
  i++;
}

function 宽度(xuhao) {
  const 父盒子 = document.getElementById('轮播父盒子');
  父盒子.className = 父盒子.className.replace(/轮播子盒子\d变宽/g, '');       // 正则清除旧类
  void 父盒子.offsetWidth;        // 强制重绘
  父盒子.classList.add(`轮播子盒子${xuhao}变宽`);
}

function 高度(xuhao, gaodu) {
  const 子盒子 = document.getElementById(`轮播子盒子${xuhao}`);
  const 动作 = gaodu ? '变高' : '变低';
  console.log("播放盒子："+xuhao+动作);
  子盒子.className = 子盒子.className.replace(/轮播子盒子\d变[高低]/g, '');   // 正则清除旧类
  void 子盒子.offsetWidth;        // 强制重绘
  子盒子.classList.add(`轮播子盒子${xuhao}${动作}`);
}