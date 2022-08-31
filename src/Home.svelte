<script>
    import MapComp from "./MapComp.svelte";
    import BoatTypes from "./containers/BoatTypes.svelte";
    import Glider from "./containers/Glider.svelte";
    import Crew from "./containers/Crew.svelte";
    import Navbar from "./Navbar.svelte";
</script>


<Navbar/>
<MapComp/>
<div class="container">
    <BoatTypes/>
    <Glider max_value="5000" min_value="0" fraction="10" name="Pris" article="K" end="NOK"/>
    <Glider max_value="150" min_value="0" fraction="1" name="Størrelse" article="" end="FOT"/>
    <Crew count="5"/>
    <div class="apply">
        <button class="button">AVANSERT</button>
        <button class="button filled">SØK</button>
    </div>
</div>


<style>
    .container {
        position: absolute;
        flex-direction: column;
        height: calc(100% - var(--navbar-height));
        width: 25%;
        margin-left: 5%;
    }

    .apply {
        display: flex;
        flex-direction: row;
        width: 95%;
        margin-left: 10px;
        justify-content: space-between;
        align-items: center;
        position: relative;
        top: 20px;
    }

    .button {
        height: 40px;
        width: 48%;
        border: none;
        border-radius: 5px;
        background-color: var(--grey);
        color: black;
        font-family: var(--font-bold);
        font-size: 16px;
        cursor: pointer;
    }

    .filled {
        background-color: var(--yellow);
        color: white;
    }
</style>
