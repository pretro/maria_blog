<template>
  <section class="seccion">
    <div class="container">
      <div class="service-wrapper">
        <div class="service">
          <h1>Min profil</h1>
          <div class="cards">
            <div class="card">
                <i class="fa-regular fa-file-lines"></i>
                <h2>Texter</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores consequuntur nesciunt eaque modi quia, laboriosam iure
                molestiae quas accusantium vitae.
              </p>
            </div>
            <div class="card">
                <i class="fa-solid fa-book"></i>
                <h2>Böcker</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores consequuntur nesciunt eaque modi quia, laboriosam iure
                molestiae quas accusantium vitae.
              </p>
            </div>
            <div class="card">
                <i class="fa-solid fa-address-card"></i>
                <h2>Om Maria</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores consequuntur nesciunt eaque modi quia, laboriosam iure
                molestiae quas accusantium vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.seccion{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: poppins;
}

.container{
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    background-color: #0d192e;
}

.service-wrapper{
    padding: 5% 8%;
}

.service {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1{
    color: aliceblue;
    font-size: 5em;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: transparent;
    letter-spacing: 4px;
    background-color: rgb(4,52,83);
    background: linear-gradient(8deg, rgba(8,52,83,1) 0%, rgba(0,230,173,1) 41%, rgba(41,17,45,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
}

h1:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 10%;
    height: 8px;
    width: 80%;
    border-radius: 8px;
    background-color: rgba(255,255,255,0.05);
}

h1 span {
    position: absolute;
    top: 100%;
    left: 10%;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: #72e2ae;
    animation: anim 5s linear infinite;
}

@keyframes anim{
    95%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        left: 88%;
    }
}

.cards{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
    margin-top: 80px;
}

.card{
    height: 350px;
    width: 370px;
    background-color: #1c2335;
    padding: 3% 8%;
    border: 0.2px solid rgba(114, 226, 174, 0.2);
    border-radius: 8px;
    transition: .6s;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.card:after{
    content: "";
    position: absolute;
    top: 150%;
    left: -200px;
    width: 120%;
    transform: rotate(50deg);
    background-color: azure;
    height: 18px;
    filter: blur(30px);
    opacity: 0.5;
    transition: 1s;
}

.card:hover:after{
    width: 225%;
    top: -100%;
}

.card i{
    color: #72e2ae;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 4.8rem;
}

.card h2{
    color: azure;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
}

.card p{
    text-align: center;
    width: 100%;
    margin: 12px 0;
    color: rgba(255,255,255,0.6);
}

.card:hover{
    background-color: transparent;
    transform: translateY(-8px);
    border-color: #00ff37;
}

.card:hover i{
    color: #00ff37;
}
</style>
