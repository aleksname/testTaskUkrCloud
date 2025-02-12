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
      <div class="headerButtonContainer">
        <button type="button" class="headerButton" @click="openPopups">Контакти</button>
      </div>
    </nav>

  </header>
  <div v-if="isPopupOpen == true" className="popupArea" @click="">
    <div className="popupContent">
      <button class="closeButton" @click="closePopups">✖</button>
      <div class="popupMainContentr">
          <div class="popupMainTitle">Сповіщати вас про нові відео?</div>
          <div class="">
            <button type="submit" class="popupSubmit" @click="popupAlert()">Cповіщати</button>
            <button type="submit" class="popupSubmit" @click="closePopups">Не сповіщати</button>
          </div>
      </div>
      <div class="popupFooterTitle">Наші контанти</div>
      <div class="popupFooter">
        <a href="mailto:movies@gmail.com" class="popupFooterElement">movies@gmail.com</a>
        <a href="tel:+38 063 00 00 000" class="popupFooterElement">+38 063 00 00 000</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isPopupOpen: false,

      popupInput: '',
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    openPopups() {
      this.isPopupOpen = true
    },
    closePopups(){
      this.isPopupOpen = false
    },
    popupAlert() {
        alert('Дякуємо!')
    },
  },
};
</script>

<style>
.popupArea{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: rgba(128, 128, 128, 0.548);
}
.popupContent {
  z-index: 1000;
  background: rgba(255, 166, 0, 0.901);
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  text-align: center;
  position: relative;
}
.closeButton{
  position: absolute;
  right: 5px;
  top: 5px;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  font-size: 20px;
  cursor: pointer;
}
.popupMainTitle{
  display: flex;
  justify-content: center;
  font-size: 26px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  color: rgb(48, 48, 138);
  margin-bottom: 20px;
}

.popupSubmit{
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  color: white;
  background-color: blue;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 40px;
  transition: 0.3s;
  margin-right: 15px;
  cursor: pointer;
}
.popupSubmit:last-child{
  margin-right: 0;
  background-color: rgba(205, 196, 196, 0.644);
  color: black;
}
.popupSubmit:hover{
  transform: scale(1.1);
}
.popupSubmit:active{
  transform: scale(1);
}
.popupFooter{
  display: flex;
  justify-content: center;
  align-items: center;
}
.popupFooterTitle{
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  color: rgb(21, 21, 132);
}
.popupFooterElement{
  margin-right: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  color: black;  
}
.popupFooterElement:last-child{
  margin-right: 0;
}


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
  align-items: center;
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
    transition: 0.5s;
    z-index: 100;
    display: block;
    text-align: center;
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
    /* display: none; */
  }
}
</style>
