<template>
  <header class="headerContainer">
    <div class="headerLogo">
      <a href="/home" class="headerLink _Logo">Logo</a>
    </div>

    <button class="burgerMenu" @click="toggleMenu">
      <span :class="{ 'open': isMenuOpen }"></span>
      <span :class="{ 'open': isMenuOpen }"></span>
      <span :class="{ 'open': isMenuOpen }"></span>
    </button>

    <nav :class="['headerNavContainer', { 'mobileOpen': isMenuOpen }]">
      <ul class="headerUlContainer">
        <li class="headerLinkLi">
          <a href="/products" class="headerLink">Наші продукти</a>
        </li>
        <li class="headerLinkLi">
          <a href="/about-us" class="headerLink">Про нас</a>
        </li>
      </ul>
    </nav>

    <div class="headerButtonContainer">
      <button type="button" class="headerButton">Контакти</button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style>
.headerContainer {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Lucida Sans', sans-serif;
  position: relative;
}

.headerNavContainer {
  background-color: rgba(255, 255, 255, 0);
}

.headerUlContainer {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.headerLinkLi {
  margin-right: 80px;
}

.headerLink {
  text-decoration: none;
  color: white;
  padding: 0 4px;
  cursor: pointer;
}

.headerLink:hover {
  border-bottom: 1px solid brown;
}

._Logo {
  font-size: 22px;
  font-weight: 700;
  color: white;
}

.headerButton {
  border: none;
  background-color: #FFD18B;
  padding: 15px 25px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
  color: white;
  font-size: 16px;
}

.headerButton:hover {
  transform: scale(1.1);
  background-color: #e9bc79;
}

.headerButton:active {
  transform: scale(1);
  transition: 0.1s;
  background-color: #ddae69;
}

.burgerMenu {
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
  z-index: 100;
}

.burgerMenu span {
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: 0.3s;
}

.burgerMenu .open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.burgerMenu .open:nth-child(2) {
  opacity: 0;
}

.burgerMenu .open:nth-child(3) {
  transform: rotate(-45deg) translate(13px, -14px); /* трохо костиль */
}

@media (max-width: 1025px) {
  .burgerMenu {
    display: flex;
  }

  .headerNavContainer {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-200%);
    transition: 0.3s;
    z-index: 100;
  }

  .headerNavContainer.mobileOpen {
    transform: translateY(0);
  }

  .headerUlContainer {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 0;
  }

  .headerLinkLi {
    margin: 15px 0;
  }

  .headerButtonContainer {
    display: none;
  }
}
</style>
