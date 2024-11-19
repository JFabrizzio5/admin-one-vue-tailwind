<script setup>
import { mdiLogout, mdiClose } from '@mdi/js'
import { computed } from 'vue'
import AsideMenuList from '@/components/AsideMenuList.vue'
import AsideMenuItem from '@/components/AsideMenuItem.vue'
import BaseIcon from '@/components/BaseIcon.vue'

defineProps({
  menu: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['menu-click', 'aside-lg-close-click'])

const logoutItem = computed(() => ({
  label: 'Logout',
  icon: mdiLogout,
  color: 'info',
  isLogout: true
}))

const menuClick = (event, item) => {
  emit('menu-click', event, item)
}

const asideLgCloseClick = (event) => {
  emit('aside-lg-close-click', event)
}
</script>
<template>
  <aside
    id="aside"
    class="fixed top-0 z-40 flex h-screen overflow-hidden lg:py-2 lg:pl-2 w-60 transition-position"
  >
    <div class="flex flex-col flex-1 overflow-hidden aside lg:rounded-2xl dark:bg-slate-900">
      <div class="flex flex-row items-center justify-between aside-brand h-14 dark:bg-slate-900">
        <!-- Contenedor con el logo y el texto, centrado -->
        <div class="flex items-center justify-center flex-1">
          <img src="http://e-cont.mx/img/logo-contarapp-03.png" alt="Logo" class="h-8 mr-2"> <!-- Logo -->
          <b class="font-black">E-cont</b> <!-- Texto con font-black -->
        </div>

        <!-- Botón para cerrar el menú -->
        <button class="hidden p-3 lg:inline-block xl:hidden" @click.prevent="asideLgCloseClick">
          <!-- Icono con color constante -->
          <BaseIcon :path="mdiClose" class="text-white" />
        </button>
      </div>

      <!-- Contenedor del menú -->
      <div class="flex-1 overflow-y-auto overflow-x-hidden aside-scrollbars dark:aside-scrollbars-[slate]">
        <AsideMenuList :menu="menu" @menu-click="menuClick" />
      </div>

      <!-- Menú de logout -->
      <ul>
        <AsideMenuItem :item="logoutItem" @menu-click="menuClick" />
      </ul>
    </div>
  </aside>
</template>
