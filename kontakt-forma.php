<?php include 'header.php';?>
<main class="mainstyle">

<div class="divmain">
        <form name="contactForm" class="paragraf" id="contact-form" action="/" method="post">
            <h1 id="naslovUspjesh" class="naslov">Kontaktirajte nas</h1>
            <br>
            <img src="slike/kontaktslika.jpeg">
            <br><br>
            <h4><b>Ispunite formu ispod, i javit ćemo Vam se u roku od 24h.</b></h4>
            <div>
                <label>
                    <span>Ime: (obavezno)</span>
                    <input name="name" id="name" placeholder="Unesite ime" type="text" tabindex="1" required autofocus>
                </label>
            </div>
            <div>
                <label>
                    <span>Email: (obavezno)</span>
                    <input name="email" id="email" placeholder="Unesite email" type="email" tabindex="2" required>
                </label>
            </div>
            <div>
                <label>
                    <span>Telefon: (obavezno)</span>
                    <input name="phone" id="phone" placeholder="Unesite broj telefona" type="tel" tabindex="3" required>
                </label>
            </div>
            <div>
                <label>
                    <span>Poruka: (obavezno)</span>
                    <textarea name="message" id="message" class="textarea" placeholder="Opisite problem sto detaljnije" tabindex="5" required></textarea>
                </label>
            </div>
            <div>
                <input name="submit" type="submit" id="contact-submit" onclick="changeText(); return false">
            </div>
        </form>
        <div class="uspjeh">
            <h1 id="uspjeh"></h1>
            <div class="uspjehPodaci">
                <p id="ime"></p>
                <p id="mail"></p>
                <p id="telefon"></p>
                <p id="poruka"></p>
                <a href="kontakt.php"><button id="hiddenButton" onclick="resetForm()">Posaljite jos jednu poruku</button></a><br>

            <br>
            <p>Profesionalni fotograf za sve vaše poslovne i privatne potrebe. Profesionalno fotografiranje vjenčanja, poslovnih konferencija i evenata, poslovnih portreta, fotografiranje proizvoda i interijera</p>
        </div>
        </div>
    </div>
<div style='text-align: right;position: fixed;z-index:9999999;bottom: 0; width: 100%;cursor: pointer;line-height: 0;display:block !important;'>

</main>

<?php include 'footer.php';?>