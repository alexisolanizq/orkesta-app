<script setup>
import logo from "@/assets/icons/orkesta.svg";
import logoName from "@/assets/icons/orkesta-name.svg";
import notifications from "@/assets/icons/notifications.svg";
import user from "@/assets/icons/user.svg";
import cart from "@/assets/icons/cart.svg";
</script>

<template>
  <nav class="header__navbar">
    <img class="header__navbar__logo" :src="logo" alt="logo-orkesta" />
    <div class="header__navbar__access">
      <img class="header__navbar__logo" :src="logoName" alt="logo-orkesta" />
      <div class="header__navbar__items">
        <button>
          <img :src="user" alt="User icon" />
        </button>
        <button>
          <img :src="cart" alt="Cart icon" />
        </button>
        <button>
          <img :src="notifications" alt="Notifications icon" />
        </button>
      </div>
    </div>
  </nav>
</template>
