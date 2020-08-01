<template>
  <header>
    <nav>
      <div class="nav-wrapper">
        <a href="#" data-target="mobile-nav" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <a href="#!" class="brand-logo">Logo</a>
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
    height: 80px;
    background-color: transparent;
    box-shadow: none;

    .nav-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;

      .brand-logo {
        position: static;
        float: right;
        color: rgb(54, 54, 54);
      }

      .sidenav-trigger {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        background: #673ab7;
        width: 50px;
        height: 50px;

        .material-icons {
          height: auto;
          line-height: 1;
        }
      }
    }
  }

  .sidenav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    background: #673ab7;

    @media (min-width: 768px) {
      width: 70%;
    }

    li {
      a {
        color: #ffffff;
        font-size: 25px;
        font-weight: 800;
        text-align: left;
      }
    }
  }
}
</style>
