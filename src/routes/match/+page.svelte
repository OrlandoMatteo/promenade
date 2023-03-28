<script>
  let matchID = 0;
  let matchPage = "";

  function setMatchPageURL() {
    matchPage = "/match/" + matchID.toString();
  }
</script>

<div class="m-auto gap-4 grid grid-rows-3 w-5/6 text-3xl">
  <div class="my-8 m-auto text-center rounded-xl">
    <label for="matchID">Inserisci il numero del match</label>
  </div>
  <div class="my-8 m-auto text-center rounded-xl">
    <input
      id="matchID"
      type="number"
      bind:value={matchID}
      on:change={setMatchPageURL}
    />
  </div>
  <div class="my-8 m-auto text-center bg-green-500 w-4/12 p-4 rounded-xl">
    <a href={matchPage} target="_blank">Vai al match</a>
  </div>
</div>
