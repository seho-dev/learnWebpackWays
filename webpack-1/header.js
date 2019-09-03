function Header() {
  var header = document.createElement("p");
  header.innerHTML = "head";
  var dom = document.getElementById("root");
  dom.append(header);
}
export default Header;
