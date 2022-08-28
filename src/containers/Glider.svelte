<script>
    export let max_value;
    export let min_value;
    export let name;
    export let article;
    export let end;
    export let fraction;
    
    import jQuery from 'jquery';
    window.jQuery = jQuery;

    let slider_min = min_value;
    let slider_max = max_value;
    $: sessionStorage.setItem(name+"_min", slider_min);
    $: sessionStorage.setItem(name+"_max", slider_max);

    jQuery(document).ready(function() {
        jQuery( "#slider-range-"+name ).slider({
            range: true,
            min: min_value,
            max: 15,
            values: [ 0, 100 ],
            slide: function( event, ui ) {
                jQuery( "#min" ).val( ui.values[ 0 ] );
                jQuery( "#max" ).val( ui.values[ 1 ] );
                slider_min = ui.values[0];
                slider_max = ui.values[1];
            }
        });
    });

</script>



<div class="price-glider-section">
    <h1 class="section-title">{name}</h1>
    <div id="slider-range-{name}" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
    <div class="ui-slider-range ui-corner-all ui-widget-header" style=""></div>
        <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
        <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
    </div>
    <p id="price">{Math.round(slider_min/fraction)}{article} - {Math.round(slider_max/fraction)}{article} {end}</p>
</div>



<style>

    .price-glider-section {
        display: flex;
        height: auto;
        width: 100%;
        flex-direction: column;
    }

    .section-title {
        font-size: 20px;
        font-family: var(--font-bold);
        margin-left: 12px;
        margin-bottom: 10px;
        margin-top: 20px;
    }

    #price {
        font-size: 14px;
        font-family: var(--font-bold);
        margin: 18px 0 0 12px;
        color: var(--dark-grey);
    }


    .ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active {
        background: var(--yellow) !important;
        border: none;
    }


    #slider-range-Pris, #slider-range-Størrelse {
        height: 3px !important; 
        background-color: var(--superlightyellow) !important;
        width: 90% !important;
        display: inline-block;
        margin-left: 20px !important;
        border: none;
    }
    
    .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {
        border-radius: 20% !important;
        border: none !important;
        outline: none !important;
        -moz-box-shadow: 0 0 3px #ccc;
        -webkit-box-shadow: 0 0 3px #ccc;
        box-shadow: 0 0 3px #ccc;
        background: white !important
    }

    .ui-slider-range .ui-corner-all .ui-widget-header {
        background: var(--yellow) !important;
        background-color: var(--yellow) !important;
    }

    .ui-state-default:hover {
        background: var(--grey) !important;
    }

    .ui-slider .ui-slider-handle {
        width: 20px!important;
        height: 20px !important;
    }

    .ui-slider-horizontal .ui-slider-handle {
        top: -10px !important;
        border: none !important;
    }

    .ui-widget-content {
        background: #dddddd!important;
    }

    .ui-widget-header {
        background: #bfe077 !important;
    }

</style>