<template>
  <app-base class="bg">
    <div class='flex'>
      <article>
        <route :comp="{name: 'login'}"></route>
      </article>
    </div>
  </app-base>
</template>

<script>

export default {
  title: 'app',
  data () {
    return {}
  }

}
</script>
