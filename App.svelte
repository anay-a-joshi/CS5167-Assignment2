<script>
  let firstName = "";
  let lastName = "";
  let user = null;
  let saved_entry = false;

  let currentDate = new Date();
  let startDate = new Date();
  let usageDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
  let activeDays = 0;

  function handleSubmit() {
    user = {
      name: `${firstName} ${lastName}`,
    };
    usageDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    activeDays = 1;
  }

  function saveEntry() {
    saved_entry = true;
    setTimeout(() => { saved_entry = false; }, 2000); }
</script>



<main>
  <div class="main-container">
    {#if !user}
      <section class="user-name-input">
        <div class="component-card">
          <div class="name">
            <h1>What's your name?</h1>
            <input type="text" placeholder="Enter Your First Name" bind:value={firstName} />
            <input type="text" placeholder="Enter Your Last Name" bind:value={lastName} />
            <button on:click={handleSubmit}>Submit</button>
          </div>
        </div>
      </section>
    {:else}
      <section class="user-section">
        <div class="card">
          <h1>Welcome {user.name} !</h1>
          <p>Today's date is {currentDate.toDateString()}.</p>
          <p>Current Time: {new Date().toLocaleTimeString()}
          <p>You have used this interface for {usageDays} days.</p>
          <p>You are active since {activeDays} days.</p>
        </div>
        <div class="card">
          <button on:click={saveEntry}>Save This Entry</button>
          {#if saved_entry}
            <p><b>Entry Saved Successfully!</b></p>
          {/if}
        </div>
      </section>
    {/if}
  </div>
</main>



<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(120deg, ghostwhite, darkblue);
    perspective: 1000px;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 1000px;
  }

  .component-card {
    width: 100%;
    padding: 22px;
    margin: 22px;
    background: ghostwhite;
    border: 5px;
    box-shadow: 8px 4px 16px rgba(0, 0, 0, 1.5), -4px -2px 8px rgba(0, 0, 0, 1);
    border-radius: 11px;
    transform-style: preserve-3d;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .name {
    color: #041E42;
    font-weight: bolder;
  }

  .component-card:hover {
    transform: scale(2.2);
  }

  .card {
    width: 100%;
    padding: 22px;
    margin: 22px;
    background: ghostwhite;
    border: 5px;
    box-shadow: 8px 4px 16px rgba(0, 0, 0, 1.5), -4px -2px 8px rgba(0, 0, 0, 1);
    border-radius: 11px;
    transform-style: preserve-3d;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: scale(1.1);
  }

  input, button {
    display: block;
    margin: 11px 0;
    padding: 11px;
    font-weight: bolder;
    color: #041E42;
    border: 1px solid blue;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    background-color: #041E42;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: red;
  }

  h1, p {
    margin: 10px 0;
    font-family: 'Merriweather', serif;
  }

  .user-name-input, .user-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
