<template>
  <section class="about-content">
    <h1>연락처 및 링크</h1>
    <div class="contacts">
      <div class="contact">
        <div class="contact-label">E-mail</div>
        <TextLink to="mailto://kimsc0714@gmail.com" anchor>
          kimsc0714@gmail.com
        </TextLink>
      </div>
      <div class="contact">
        <div class="contact-label">GitHub</div>
        <TextLink to="https://github.com/sckroll" anchor>
          https://github.com/sckroll
        </TextLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
}
.contact {
  display: flex;
  align-items: center;
  font-size: 1.25em;
  gap: 24px;
}
.contact-label {
  font-weight: 700;
  margin-bottom: 2px;
}
</style>
