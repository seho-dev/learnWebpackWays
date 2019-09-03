function Header(){
  var header =  document.createElement("p");
  header.innerHTML = 'this is header';
  // 获取跟节点
  var root = document.getElementById("root");
  root.append(header)
}

export default Header;