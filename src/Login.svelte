<script>


    function login()
    {
        var email = document.getElementById("email").value;
        var password = document.getElementById("passwd").value;
        console.log(email, password); 
    }
</script>



<div class="container">
    <img src="#" alt="" id="logo"/>
    <h1 id="title">Velkommen til Flyttbåten</h1>
    <p class="detail">Logg inn med epost og passord</p>
    <div class="login-container">
        <input type="email" placeholder="E-post" id="email"/>
        <input type="password" placeholder="Passord" id="passwd"/>
        <a href="#"><p id="fot">Glemt passordet?</p></a>
        <button class="button" on:click={() => {login();}}>LOGG INN</button>
    </div>
</div>

<style>

    .container {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        max-width: 500px;
        justify-content: center;
        align-content: center;
        text-align: center;
        padding-top: 10%;
    }

    #title {
        font-size: 40px;
        font-family: var(--font-thin);
        margin-bottom: 50px;
    }

    .detail {
        font-size: 12px;
        font-family: var(--font-bold);
    }

    .login-container {
        margin-left: 20%;
        max-width: 60%;
        display: flex;
        flex-direction: column;
    }

    input {
        height: 35px;
        margin: 5px;
        border: 1px solid var(--dark-grey);
        border-radius: 10px;
        padding: 2px 10px;
        font-family: var(--font-semibold);
        font-size: 15px; 
    }

    input:focus {
        border-color: var(--grey);
        outline: 3px solid var(--lightyellow);
    }

    .button {
        height: 40px;
        border: none;
        border-radius: 10px;
        background-color: var(--yellow);
        color: white;
        font-family: var(--font-bold);
        font-size: 16px;
        cursor: pointer;
        width: 95%;
        margin: 10px 2.5%;
        transition: background-color .4s ease-in-out;
    }

    .button:hover {
        background-color: var(--lightyellow);
    }

    #fot {
        color: var(--dark-grey);
        font-size: 12px;
        font-family: var(--font-semibold);
        margin-top: 3px;
        padding-left: 12px;
    }
</style>