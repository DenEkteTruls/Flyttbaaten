<script>
    let cards = [
        {'image': 'http://www.flatsea.no/_Media/3000sunbridge_3_med.jpeg', 'price': 4500, 'details': "3 beds, 2 baths, 1,800 sqft", 'location': "MS Northbound, Peachfield Road, UK"},
        {'image': 'https://www.beneteau.com/sites/default/files/public/styles/big_presentation_block/public/d528.jpg?itok=gEo3S96w', 'price': 1000, 'details': "3 beds, 2 baths, 1,800 sqft", 'location': "MS Northbound, Peachfield Road, UK"},
        {'image': 'default-boat.jpg', 'price': 100, 'details': "3 beds, 2 baths, 1,800 sqft", 'location': "MS Northbound, Peachfield Road, UK"},
        {'image': 'http://www.flatsea.no/_Media/3000sunbridge_3_med.jpeg', 'price': 100, 'details': "3 beds, 2 baths, 1,800 sqft", 'location': "MS Northbound, Peachfield Road, UK"},
        {'image': 'https://www.beneteau.com/sites/default/files/public/styles/big_presentation_block/public/d528.jpg?itok=gEo3S96w', 'price': 100, 'details': "3 beds, 2 baths, 1,800 sqft", 'location': "MS Northbound, Peachfield Road, UK"},
        {'image': 'default-boat.jpg', 'price': 100, 'details': "3 beds, 2 baths, 1,800 sqft", 'location': "MS Northbound, Peachfield Road, UK"}
    ];
</script>



<div class="hide-box"/>
<div class="container">
    {#each cards as card}
    <div class="card">
        <img src="{card.image}" alt=""/>
        <div class="bottom">
            <h1 id="price">NOK {card.price},-</h1>
            <p id="details">{card.details}</p>
            <p id="location">{card.location}</p>
        </div>
    </div>
    {/each}
</div>



<style>
    .hide-box {
        position: absolute;
        bottom: 30px;
        width: 100%;
        height: 500px;
        background-color: var(--background-color);
        z-index: 3;
        left: 100%;
        bottom: -100px;
    }

    .container {
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        align-items: center;
        gap: 30px;
        position: absolute;
        bottom: 30px;
        left: 30px;
    }

    .card {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 220px;
        height: 180px;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 0 20px var(--dark-grey);
        transition: all .13s ease-in-out;
        cursor: pointer;
    }

    .card:hover {
        transform: scale(1.01);
    }

    .bottom {
        margin-left: -195px;
    }

    .card > img {
        position: absolute;
        width: 200px;
        height: 100px;
        object-fit: cover;
        top: 10px;
        border-radius: 7px;
    }

    #price {
        position: absolute;
        top: 106px;
        
        font-size: 16px;
        font-family: var(--font-bold);
    }

    #details {
        position: absolute;
        top: 127px;
        
        font-size: 12px;
        font-family: var(--font-semibold);
        letter-spacing: .2px;
        color: #324148;
    }

    #location {
        position: absolute;
        top: 145px;
        
        font-size: 11px;
        font-family: var(--font-regular);
        color: #7E8A8A;
    }
</style>
