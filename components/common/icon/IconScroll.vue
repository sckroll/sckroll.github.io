<template>
  <g>
    <path
      class="wheel"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5625 11.9375C12.5625 10.039 14.1015 8.5 16 8.5C17.8985 8.5 19.4375 10.039 19.4375 11.9375V20.0625C19.4375 21.961 17.8985 23.5 16 23.5C14.1015 23.5 12.5625 21.961 12.5625 20.0625V11.9375ZM16 10.5C15.2061 10.5 14.5625 11.1436 14.5625 11.9375V20.0625C14.5625 20.8564 15.2061 21.5 16 21.5C16.7939 21.5 17.4375 20.8564 17.4375 20.0625V11.9375C17.4375 11.1436 16.7939 10.5 16 10.5Z"
    />
    <path
      class="border-outer"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 4C9.37258 4 4 9.37258 4 16V28H28V16C28 9.37258 22.6274 4 16 4ZM2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16V30H2V16Z"
    />
    <path
      class="vertical-line"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 29V22.5H17V29H15Z"
    />
    <path
      class="vertical-line"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 9.5V3H17V9.5H15Z"
    />
  </g>
</template>

<style lang="scss" scoped>
.vertical-line {
  animation: fade 1s ease 1s infinite alternate;
}
.wheel {
  animation: wheel-move 1s ease 1s infinite alternate;
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes wheel-move {
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(4px);
  }
}
</style>
