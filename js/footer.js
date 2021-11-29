document.querySelector('#footer').innerHTML = `
<div class="footer">
<div class="footer-top">
    <div>Logo</div>
    <div class="footer-data">
        <div class="footer-content">
            <p style="color:hsla(0,0%,100%,.75);">GET IN TOUCH</p>
            <p>(480)634-5200</p>
            <p>mail@discoverylandco.com</p>
        </div>
        <div class="footer-content">
            <p onclick="window.location ='../Pages/AboutDLC.html'">About DLC</p>
            <p onclick="window.location ='../Pages/Our Worlds.html'">Our Worlds</p>
            <p onclick="window.location ='../Pages/Experiences.html'">Experiences</p>
            <p onclick="window.location ='../Pages/Gallery.html'">Gallery</p>
            <p onclick="window.location ='../Pages/Press.html'">Press</p>
        </div>
        <div class="footer-content">
            <p>Magazine</p>
            <p>Careers</p>
            <p>Foundation</p>
            <p>Company</p>
            <p>Contact</p>
            <p>Privacy</p>
        </div>
    </div>
</div>
<div class="footer-bottom">
    <span>@ DiscoveryLand Company. All rights reserved</span>
</div>
</div>`;