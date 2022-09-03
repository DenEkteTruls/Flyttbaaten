<script>
    let user = {
        'username': 'DenEkteTruls'
    };

    let stats = [
        {'title': 'Besøkte annonser', 'duel': false, 'data_first': '152'},
        {'title': 'Annen ting', 'duel': true, 'data_first': '11', 'data_second': '100'},
        {'title': 'Gjennomført', 'duel': true, 'data_first': '0', 'data_second': '300'},
        {'title': 'Favoritter', 'duel': false, 'data_first': '11'}
    ];
</script>



    <div class="activity-container">
        <div class="activity-left">
            <h1 class="container-title">{user.username}'s aktivitet</h1>
            <div id="section-split"/>
            <p id="welcome-back">Velkommen tilbake ✨</p>
            <div class="stats-container">
                {#each stats as stat}
                    <div class="stat">
                        <div id="top-color"/>
                        <p id="stat-title">{stat.title}</p>
                        {#if stat.duel}
                        <h1><b class="stat-big">{stat.data_first}</b>/{stat.data_second}</h1>
                        {:else}
                        <h1><b class="stat-big">{stat.data_first}</b></h1>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
        <div class="activity-right">
            <img src="default-profile-icon.png" alt="" id="profile-image"/>
        </div>
    </div>

    

<style>

    .activity-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 250px;
        width: 80%;
    }


    .activity-left {
        border-radius: 8px;
        box-shadow: 0 0 15px rgba(128, 128, 128, 0.20);
        display: flex;
        flex-direction: column;
        padding: 10px 30px;
        margin-right: 2.5%;
        width: 80%;
        height: 100%;
    }

    .container-title {
        font-size: 25px;
        font-family: var(--font-semibold);
        margin-top: 20px;
    }

    #section-split {
        height: 1px;
        background-color: rgba(128, 128, 128, 0.2);
        margin: 0;
    }

    #welcome-back {
        font-size: 15px;
        font-family: var(--font-regular);
        margin: 0;
        padding-top: 5px;
    }

    .stats-container {
        display: flex;
        width: 100%;
        height: 70%;
        justify-content: space-evenly;
        align-items: center;
        gap: 2.5%;
    }

    .stat {
        background-color: #F9FAFA;
        flex-direction: column;
        width: calc(25% - 5%/5);
        height: 70%;
        border-radius: 10px;
    }

    #top-color {
        background-color: #E8EBED;
        height: 8px;
        width: 100%;
        border-radius: 15px 15px 0 0;
    }

    #stat-title {
        padding: 0 20px 0 20px;
        font-family: var(--font-semibold);
        color: rgba(0, 0, 0, 0.75);
    }

    .stat > h1 {
        padding: 0 0 40px 24px;
        font-size: 15px;
        font-family: var(--font-bold);
        color: rgba(0, 0, 0, 0.5);
        margin-top: -5px;
    }

    .stat-big {
        color: rgba(0, 0, 0, 0.75);
        font-size: 28px;
    }

    .activity-right {
        width: calc(20% + 20px);
        height: calc(100% + 20px);
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 0 15px rgba(128, 128, 128, 0.20);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .1s ease-in-out;
        outline: 0px solid var(--superlightyellow);
        cursor: pointer;
    }

    #profile-image {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
    }

    .activity-right:hover {
        outline-width: 10px;
    }
</style>