<script>
    export let mode;
</script>


<div class="container">
    <div class="left">
        <div class="doodle">
            {#if mode != "profile"}
                <button class="left-button active" id="flytt-button">Flytt</button>
                <button class="left-button" id="frakt-button">Frakt</button>
                <button class="left-button" id="alle-button">Alle</button>
            {:else}
                <button on:click="{() => {window.location.href="/";}}" class="left-button" style="color: rgba(0, 0, 0, 0.7); font-family: var(--font-semibold); font-size: 20px; cursor: pointer;">{'<'} tilbake</button>
            {/if}
        </div>
    </div>
    <div class="middle">
        <div class="searchbar">
            <img src="search-icon.png" alt="" id="search-icon"/>
            {#if mode == "profile"}
                <input type="text" id="search" placeholder="Søk i innstillinger"/>
            {:else}
                <input type="text" id="search" placeholder="Søk i ditt område"/>
            {/if}
        </div>
    </div>
    <div class="right">
        <div class="noodle">
            <div class="image-container">
                <img src="bell.png" alt="" id="notifications"/>
            </div>
            {#if mode != "profile"}
            <div on:click="{() => {window.location.href="/profile";}}" class="image-container profile">
                <img src="default-profile-icon.png" alt="" id="profile-icon"/>
                <div id="profile-status"></div>
            </div>
            {:else}
            <div class="image-container profile">
                <img src="default-profile-icon.png" alt="" id="profile-icon"/>
                <div id="profile-status"></div>
            </div>
            {/if}
        </div>
    </div>
</div>




<style>

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: var(--navbar-height);
        margin: 0 auto;
        max-width: 1500px;
    }


    .left {
        width: 25%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .left > .doodle > .left-button {
        background-color: var(--background-color);
        font-size: 18px;
        font-family: var(--font-bold);
        border: 0;
        color: var(--dark-grey);
        cursor: pointer;
    }

    .doodle {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 20px;
        margin-right: 10%;
        margin-left: 20px;
    }

    .active {
        color: var(--black) !important;
    }

    .middle {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .searchbar {
        width: 60%;
        height: 50px;
        border-radius: 10px;
        padding: 0 15px;
        background-color: var(--grey);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #search {
        font-family: var(--font-semibold);
        font-size: 16px;
        width: 90%;
        height: 65%;
        border: none;
        outline: none;
        background-color: var(--grey);
        padding: 0 20px;
    }

    #search-icon {
        width: 20px;
        margin-left: 8px;
    }

    .right {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .noodle {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 20px;
        margin-left: 10%;
    }

    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background-color: var(--grey);
        border-radius: 100%;
        cursor: pointer;
    }

    .image-container > img {
        height: 100%;
        width: auto;
        object-fit: cover;
        border-radius: 100%;
    }

    #notifications {
        width: 25px;
        height: 27px
    }

    .profile {
        border: 3px solid white !important;
        outline: 4px solid var(--grey) !important;
    }

    #profile-status {
        background-color: greenyellow;
        height: 15px;
        width: 15px;
        border-radius: 100%;
        position: absolute;
        margin-left: 38px;
        margin-top: 38px;
        border: 3px solid white;
    }

</style>