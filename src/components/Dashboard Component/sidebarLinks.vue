<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from '@/store/sidebar'

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true }
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
	transition: opacity 0.3s;
}
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter {
	opacity: 0;
}
.fade-leave-to {
	opacity: 0;
}
.link {
	display: flex;
	align-items: center;
	cursor: pointer;
	position: relative;
	font-weight: 400;
	user-select: none;
	margin: 0.3em 0;
	padding: 0.4em;
	border-radius: 0.25em;
	height: 1.5em;
	color: white;
	text-decoration: none;
	&:hover {
		background-color: var(--sidebar-item-hover);
		color: #000;
	}
	.icon {
		flex-shrink: 0;
		width: 25px;
		margin-right: 10px;
	}
}
.link.active {
	background-color: var(--sidebar-item-active);
}

</style>
