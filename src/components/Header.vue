<template>
  <header>
      <div id="logo-container">
        <router-link to="/datacubation"><img id="logo" src="../assets/DataCubationLogo.svg" alt="Datacubation"></router-link>
      </div>
      <nav id="desktop-navigation" role="navigation">
        <ul>
          <li><router-link to="/program">A programról</router-link></li>
          <li><router-link to="/esemenyek">Események</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/tanfolyamok">Tanfolyamok</router-link></li>
          <li><router-link to="/termekek">Termékek</router-link></li>
          <li><router-link to="/kapcsolat">Kapcsolat</router-link></li>
        </ul>
        <div id="user-buttons">
          <button class="btn btn-orange">Bejelentkezés</button>
          <button class="btn btn-orange">Regisztráció</button>
        </div>
      </nav>

      <nav id="mobile-navigation">

        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <li><router-link to="/program">A programról</router-link></li>
          <li><router-link to="/esemenyek">Események</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/tanfolyamok">Tanfolyamok</router-link></li>
          <li><router-link to="/termekek">Termékek</router-link></li>
          <li><router-link to="/kapcsolat">Kapcsolat</router-link></li>
        </ul>
      </nav>
  </header>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped lang="scss">
@import '/src/assets/mixins.scss';

#logo  {
  @include tablet {
    height: 65px;
  }
  @include tablet-small {
    height: 55px;
  }

  @include phone {
    padding-left: 12px;
    height: 45px;
  }
}

header {
  height: 130px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include tablet {
    height: 100px;
  }

  @include tablet-small {
    height: 75px;
  }

  @include phone {
    height: 75px;
  }
}

#desktop-navigation {
  width: 100%;

  @include tablet-small {
    display: none;
  }

  @include phone {
    display: none;
  }
}

#mobile-navigation {
  display: none;
  margin-right: 25px;

  @include tablet-small {
    display: block;
  }

  @include phone {
    display: block;
  }

  #menu {
    margin: 0;
    padding: 10px;
    z-index: 9999;
    display: none;
    position: fixed;
    top: 145px;
    bottom: 65px;
    right: 0;
    width: 100%;
    background: #fff;
    li {
      margin-bottom: 10px;
    }
  }

  input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;

    &:checked ~ #menu {
      display: block;

    }

    &:checked ~ span
    {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: #232323;
    }

    &:checked ~ span:nth-last-child(3)
    {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    &:checked ~ span:nth-last-child(2)
    {
      transform: rotate(-45deg) translate(0, -1px);
    }
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0;

    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    opacity 0.55s ease;

    &:first-child
    {
      transform-origin: 0 0;
    }

    &:nth-last-child(2)
    {
      transform-origin: 0 100%;
    }
  }
}


nav {
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ul {
    padding: 0;
    display: flex;
    list-style: none;

    li {
      margin-right: 20px;

      /*font-family: Cairo;*/
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 24px;
      color: #575757;

      @include tablet {
        margin-right: 10px;
        font-size: 18px;
        line-height: 12px;
      }

      @include tablet-small {
        margin-right: 5px;
        font-size: 16px;
        line-height: 12px;
      }
    }
  }
}

nav > ul > li > a:visited,
nav > ul > li > a:hover {
  color: #575757;
}

#user-buttons {
  display: flex;
}
</style>
