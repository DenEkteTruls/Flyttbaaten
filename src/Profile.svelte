<script>
    import Navbar from "./Navbar.svelte";
    import Activity from "./containers/Activity.svelte";
    import Annonser from "./containers/Annonser.svelte";

    let user = {
        'username': 'DenEkteTruls'
    };

    let stats = [
        {'title': 'Besøkte annonser', 'duel': false, 'data_first': '152'},
        {'title': 'Bandwidth used', 'duel': true, 'data_first': '11', 'data_second': '100'},
        {'title': 'Build minutes used', 'duel': true, 'data_first': '0', 'data_second': '300'},
        {'title': 'Favoritter', 'duel': false, 'data_first': '11'}
    ];
</script>



<Navbar mode={"profile"} username={user.username}/>
<div class="container">
    <Activity/>
    <Annonser/>
    <div class="favs-container">
    </div>
    <div class="pay-container">
    </div>
</div>



<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }
</style>