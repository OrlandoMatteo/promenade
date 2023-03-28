<script>
  // @ts-nocheck
  /** @type {import('./$types').PageData} */
  export let data;
  let matchID = data.matchID;

  let games = data.games || [
    { set: 1, teamLeft: 0, teamRight: 0 },
    { set: 2, teamLeft: 0, teamRight: 0 },
    { set: 3, teamLeft: 0, teamRight: 0 },
    { set: 4, teamLeft: 0, teamRight: 0 },
    { set: 5, teamLeft: 0, teamRight: 0 },
  ];

  let teamLeft = data.teamLeft || {
    teamName: "Team A",
    player1: "Player 1",
    player2: "Player 2",
  };
  let teamRight = data.teamRight || {
    teamName: "Team B",
    player1: "Player 1",
    player2: "Player 2",
  };
  function decrease(index, lor) {
    games[index - 1][lor] -= 1;
    games[index - 1][lor] = games[index - 1][lor];
  }
  function increase(index, lor) {
    games[index - 1][lor] += 1;
    games[index - 1][lor] = games[index - 1][lor];
  }
  async function logScore() {
    let match = {
      matchID: matchID,
      teamLeft: { name: teamLeft },
      teamRight: { name: teamRight },
      games: games,
    };
    const response = await fetch("/api/addMatch", {
      method: "POST",
      body: JSON.stringify(match),
      headers: {
        Accept: "application/json",
      },
    });

    console.log(match);
    console.log(response.json());
  }
</script>

<div class="m-auto p-2">
  <h1 class="text-6xl">Match {matchID}</h1>
  <div class="grid grid-cols-2 m-auto w-5/6 text-center">
    <div class="bg-orange-300">
      <h2>{teamLeft.teamName}</h2>
    </div>
    <div class="bg-sky-300">
      <h2>{teamRight.teamName}</h2>
    </div>
  </div>
</div>

<div class="grid grid-cols-8 padel-side items-center w-5/6 m-auto">
  <div class="col-span-1 h-full bg-orange-300" />
  <div
    class="player col-span-3 grid grid-rows-2 border-r-2 border-r-black bg-orange-300"
  >
    <div>{teamLeft.player1}</div>
    <div>{teamLeft.player2}</div>
  </div>
  <div
    class="player col-span-3 grid grid-rows-2 border-l-2 border-l-black bg-sky-300"
  >
    <div>{teamRight.player1}</div>
    <div>{teamRight.player2}</div>
  </div>
  <div class="col-span-1 bg-sky-300 h-full" />
</div>

<div class="score grid grid-cols-7 p-8">
  <div
    class="text-center col-span-2 justify-center items-center font-extrabold bg-slate-200 border-2 border-slate-700 rounded-md "
  >
    <div>Game</div>
    <input
      type="text"
      class="bg-orange-300 px-1"
      bind:value={teamLeft.teamName}
      placeholder="Team A"
    />
    <input
      type="text"
      class="bg-sky-300 px-1"
      bind:value={teamRight.teamName}
      placeholder="Team B"
    />
  </div>
  {#each games as game}
    <div
      class=" text-center justify-center items-center  border-2 border-slate-700"
    >
      <div class="font-extrabold bg-slate-200">{game.set}</div>
      <div class="grid grid-cols-3">
        <button on:click={() => decrease(game.set, "teamLeft")}>-</button>
        <div>{game.teamLeft}</div>
        <button on:click={() => increase(game.set, "teamLeft")}>+</button>
      </div>
      <div class="grid grid-cols-3">
        <button on:click={() => decrease(game.set, "teamRight")}>-</button>
        <div>{game.teamRight}</div>
        <button on:click={() => increase(game.set, "teamRight")}>+</button>
      </div>
    </div>
  {/each}
</div>

<div class="flex justify-center">
  <button class="m-auto bg-green-400 p-4 rounded-2xl" on:click={logScore}
    >Send score</button
  >
</div>
