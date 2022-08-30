<script>
    export let database;

    import { Map, Geocoder, Marker, controls } from '@beyonk/svelte-mapbox'
    const { GeolocateControl, NavigationControl, ScaleControl } = controls
    import { ref, onValue } from 'firebase/database';

    let lat = 59.3022;
    let lng = 10.5874;
    
    let zoom = 8;
    $: center = [lng, lat];

    const ref_ = ref(database, 'live-boats');
	onValue(ref_, (snap) => {
        console.log(snap.val());
    });
</script>


<div id="kart">
<Map style="mapbox://styles/denektetruls/cl7d8golr004x15nq3d6s1tu8"
    accessToken="pk.eyJ1IjoiZGVuZWt0ZXRydWxzIiwiYSI6ImNrOWgwbzJiNjA4OHozbm13bjZxMjVwZTMifQ.VtqneIR4Cwwx-iYGjhLFxw"
    bind:center
    bind:zoom>
</Map>
</div>


<!--

div {
    height: calc(100% - var(--navbar-height));
    width: 60%;
    position: absolute;
    margin-left: 32.5%;
    max-height: 100%;
    border-radius: 5px;
  }

-->
