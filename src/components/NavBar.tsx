import { useState } from "react";

interface NavBarProps {
  cartItemsCount: number,
}

function NavBar({cartItemsCount}: NavBarProps) {
  return <div>NavBar: {cartItemsCount}</div>
}

export default NavBar;