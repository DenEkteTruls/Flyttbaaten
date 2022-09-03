<script>
import { add_styles } from "svelte/internal";

    let user = {
        'username': 'DenEkteTruls'
    };

    let ads = [];
</script>

<div class="container_">
    <div class="container">
        <div class="top">
            <h1 class="container-title">Mine annonser</h1>
            <div class="buttons">
                <button class="button">+</button>
            </div>
        </div>
        <div id="section-split"/>
        <div class="ads">
            {#if ads.length > 0}
                {#each ads as ad}
                {/each}
            {:else}
                <div class="place-in-center">
                    <p>Du har ingen annonser...</p>
                </div>
            {/if}
        </div>
    </div>
</div>

    

<style>

    .container_ {
        width: 80%;
        height: 350px;
    }

    .container {
        height: 350px;
        width: calc(100% - 60px);
        border-radius: 8px;
        box-shadow: 0 0 15px rgba(128, 128, 128, 0.20);
        margin-top: 40px;
        padding: 10px 30px;
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

    .button {
        height: 40px;
	    border: none;
	    border-radius: 7px;
	    background-color: var(--lightyellow);
	    color: white;
	    font-family: var(--font-semibold);
	    font-size: 20px;
	    cursor: pointer;
        padding: 5px 20px;
        transition: opacity .2s ease-in-out;
    }

    .button:hover {
        opacity: .6;
        color: white;
    }

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .ads {
        height: 100%;
    }

    .place-in-center {
        width: 100%;
        height: calc(100% - 70px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .place-in-center > p {
        font-size: 20px;
        font-family: var(--font-regular);
    }

</style>