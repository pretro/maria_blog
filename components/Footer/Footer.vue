<template class="body">
  <footer>
    <div class="container">
      <div class="sec aboutus">
        <h2>Om Maria</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem est
          sed eligendi earum! Aut eos molestiae, libero soluta earum labore
          repudiandae inventore repellendus explicabo expedita quasi quod fuga
          in! Pariatur, accusamus! Cum reprehenderit maiores error ipsa illo
          ipsam alias tempore provident magnam? Obcaecati, placeat! Molestias
          itaque veritatis similique aspernatur eaque!
        </p>
        <ul class="sci">
          <li>
            <a href="#"
              ><i class="fa-brands fa-facebook-f" style="color:white;" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href="#"
              ><i class="fa-brands fa-instagram" style="color:white;" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href="#"
              ><i class="fa-brands fa-twitter" style="color:white;" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href="#"
              ><i class="fa-brands fa-snapchat" style="color:white;" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
      </div>
      <div class="sec quicklinks">
        <h2>Snabba länkar</h2>
        <ul>
          <li><a href="#">Hem</a></li>
          <li><a href="#">Kategorier</a></li>
          <li><a href="#">Texter</a></li>
          <li><a href="#">Böcker</a></li>
          <li><a href="#">Om Maria</a></li>
          <li><a href="#">Kontakta mig</a></li>
        </ul>
      </div>
      <div class="sec contact">
        <h2>Kontakt Info</h2>
        <ul class="info">
          <li>
            <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
            <span
              >Nån gata 123<br />
              Stockholm, 567 89,<br />Sverige</span
            >
          </li>
          <li>
            <span><i class="fa fa-phone" aria-hidden="true"></i></span>
            <p><a href="tel:1234567890">+46 1234567890</a></p>
          </li>
          <li>
            <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
            <p><a href="mailto:test@email.com">test@gmail.com</a></p>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <div class="copyrightText">
    <p>Copyright ©️ 2024 Maria Hagström. All Rights Reserved. </p>
  </div>
</template>

<script setup></script>

<style scoped>
.body {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background: #122647;
}
footer {
  position: relative;
  width: 100%;
  height: auto;
  padding: 50px 100px;
  background: #0d192e;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

footer .container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
}

footer .container .sec {
  margin-right: 30px;
}

footer .container .sec.aboutus {
  width: 40%;
}

footer .container h2 {
  position: relative;
  color: azure;
  font-weight: 500;
  margin-bottom: 15px;
}

footer .container h2:before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 50px;
  height: 2px;
  background: #f00;
}

footer p {
  color: #999;
}

.sci {
  margin-top: 20px;
  display: flex;
}

.sci li {
  list-style: none;
}

.sci li a {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  text-decoration: none;
  border-radius: 4px;
}

.sci li a:hover {
  background: #f00;
}

.sci li a .fa {
  color: azure;
  font-size: 20px;
}

.quicklinks {
  position: relative;
  width: 25%;
}

.quicklinks ul li {
  list-style: none;
}

.quicklinks ul li a {
  color: #999;
  text-decoration: none;
  margin-bottom: 10px;
  display: inline-block;
}

.quicklinks ul li a:hover {
  color: azure;
}

.contact{
    width: calc(35% - 60px);
    margin-right: 0 !important;
}

.contact .info{
    position: relative;
}

.contact .info li {
    display: flex;
    margin-bottom: 16px;
}

.contact .info li span:nth-child(1){
    color: aliceblue;
    font-size: 20px;
    margin-right: 10px;
}

.contact .info li span {
    color: #999;
}

.contact .info li a {
    color: #999;
    text-decoration: none;
}

.contact .info li a:hover {
    color: aliceblue;
}

.copyrightText{
    width:100%;
    background: #181818;
    padding: 8px 100px;
    text-align: center;
    color: #999;
}
</style>
