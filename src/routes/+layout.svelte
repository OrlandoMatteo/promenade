<script>
  import "../app.postcss";
  import "../app.postcss";
</script>

<div class="container m-auto rounded-xl">
  <nav class="bg-teal-300 text-3xl p-6 m-2 rounded-xl">
    <a class="border border-teal-200 rounded-xl p-4 shadow-2xl" href="/">home</a
    >
    <a class="border border-teal-200 rounded-xl p-4 shadow-2xl" href="/players"
      >players</a
    >
    <a class="border border-teal-200 rounded-xl p-4 shadow-2xl" href="/match"
      >match</a
    >
  </nav>

  <slot />
</div>
