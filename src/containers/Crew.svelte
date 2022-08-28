<script>
    import { range } from '../range.js';

    export let count;
    if(count > 5) count = 5;

    let crew = 1;
    $: sessionStorage.setItem("crew", crew);

    function clicked(c)
    {
        for(let i = 1; i < 6; i++)
        {
            crew = c;
            if(i == c) {
                document.getElementById("button-"+i).style.backgroundColor = "var(--yellow)";
                document.getElementById("text-"+i).style = "color: white;"
            } else {
                document.getElementById("button-"+i).style.backgroundColor = "var(--grey)";
                document.getElementById("text-"+i).style.color = "black";
            }
        }
    }
</script>



<h1 class="section-title">Crew</h1>
<div class="container">
    {#each range(0, count, 1) as c}
        <button class="button" on:click={clicked(c+1)} id="button-{c+1}">
            <p class="text" id="text-{c+1}">{c+1}{#if c == 4}+{/if}</p>
        </button>
    {/each}
</div>



<style>
    .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 98%;
        margin-left: 5px;
        height: 60px;
    }

    .section-title {
        font-size: 20px;
        font-family: var(--font-bold);
        margin-left: 12px;
        margin-bottom: 10px;
        margin-top: 20px;
    }

    .button {
        position: relative;
        width: 16%;
        height: 0;
        padding-bottom: 16%;
        border-radius: 10%;
        border: none;
        background-color: var(--grey);
        cursor: pointer;
    }

    .text {
        color: rgba(0, 0, 0, 0.85);
        font-size: 15px;
        font-family: var(--font-bold);
        padding-top: 5px;
    }
</style>