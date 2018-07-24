<template>
  <app-base class="bg">
    <div class='flex'>
      <article>
        <route :comp="{name: 'test'}"></route>
      </article>
    </div>
  </app-base>
</template>

<script>
import Test from './components/Test'

export default {
  components: { Test }
}
</script>
