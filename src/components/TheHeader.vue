<template>
  <header>
    <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">Logo</a>
        <a href="#" data-target="mobile-nav" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Dashbaord</router-link>
          </li>
          <li>
            <router-link to="/bitcoin-details">Bitcoin Details</router-link>
          </li>
          <li>
            <router-link to="/bitcoin-converter">Bitcoin Umrechner</router-link>
          </li>
          <li>
            <router-link to="/bitcoin-chart">Bitcoin Diagramm</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-nav">
      <li>
        <router-link to="/">Dashbaord</router-link>
      </li>
      <li>
        <router-link to="/bitcoin-details">Bitcoin Details</router-link>
      </li>
      <li>
        <router-link to="/bitcoin-converter">Bitcoin Umrechner</router-link>
      </li>
      <li>
        <router-link to="/bitcoin-chart">Bitcoin Diagramm</router-link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss">
header {
  nav {
    background-color: transparent;

    .nav-wrapper {
      padding: 0 20px;

      .brand-logo {
        position: absolute;

        @media (min-width: 992px) {
          position: static;
          float: left;
        }
      }

      ul {
        li {
          a {
            &:hover {
              background: #050c13b8;
            }
          }
        }
      }
    }
  }
}
</style>
