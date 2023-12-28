import { useState } from 'react';

import './header.scss';
import BurgerMenu from '../burger-menu/BurgerMenu';

const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <header className="header">
        <div className="sale">💥Новинка 2024 года😍</div>
        <div className="menu">
          <div className="container">
            <button type="button" className="icon-button menu-trigger" onClick={onOpen}>
              <img src="icons/burger.svg" alt="menu" />
            </button>
            <span>Богемное платье с V-образным вырезом</span>
          </div>
        </div>
      </header>
      <BurgerMenu open={open} onClose={onClose} />
    </>
  );
};

export default Header;
