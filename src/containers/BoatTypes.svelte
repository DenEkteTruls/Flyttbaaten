<script>
    let selected;
    $: sessionStorage.setItem("boat-type", selected);

    function select(c)
    {
        selected = c;
        document.querySelectorAll('.type').forEach((type) => {
            if(type.id == selected) {
                document.getElementById(c).style.border = "1px solid white";
                document.getElementById(c).style.outline = "3px solid var(--lightyellow)";
                document.getElementById(c).style.margin = "calc(2% - 1px)";
            } else {
                document.getElementById(type.id).style.border = "none";
                document.getElementById(type.id).style.outline = "none";
                document.getElementById(type.id).style.margin = "2%";
            }
        });
    }
</script>



<div class="boat-type-section">
    <h1 class="section-title">Velg båttype</h1>
    <div class="types">
        <div class="type" id="motor" on:click={() => {select("motor")}}>
            <img src="boats/motorboat.png" alt=""/>
            <h1 class="type-title">Motorbåt</h1>
        </div>
        <div class="type" id="seil" on:click={() => {select("seil")}}>
            <img src="boats/sailboat.png" alt=""/>
            <h1 class="type-title">Seilbåt</h1>
        </div>
        <div class="type" id="yatch" on:click={() => {select("yatch")}}>
            <img src="boats/yatch.png" alt=""/>
            <h1 class="type-title">Yatch</h1>
        </div>
        <div class="type" id="kommersiell" on:click={() => {select("kommersiell")}}>
            <img src="boats/comercial.png" alt=""/>
            <h1 class="type-title">Kommersiell</h1>
        </div>
    </div>
</div>




<style>

    .boat-type-section {
        display: flex;
        height: auto;
        width: 100%;
        flex-direction: column;
    }

    .section-title {
        font-size: 22px;
        font-family: var(--font-bold);
        margin-left: 12px;
        margin-bottom: 10px;
    }

    .types {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }

    .type {
        background-color: var(--grey);
        border-radius: 20px;
        border: 0;
        width: 45%;
        margin: 2%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
    }

    .selected {
        border: 2px solid white;
        outline: 2px solid var(--lightyellow);
        margin: calc(2% - 2px);
    }

    .type:hover {
        border: 2px solid white !important;
        outline: 2px solid var(--lightyellow) !important;
        margin: calc(2% - 2px) !important;
    }

    .type > img {
        width: 120px;
        height: auto;
        object-fit: cover;
        margin: 10px 0 0 0;
    }

    .type-title {
        font-size: 15px;
        font-family: var(--font-semibold);
        color: var(--dark-grey);
        margin: 1px 0 9px 0;
    }
</style>