<footer class="footer-container">
    <div class="footer-top">
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="cell large-4">
                    <div class="info-block">
                        <h4 class="info-block-title">Contatos</h4>
                        <ul class="info-list">
                            <li> 
                                <i class="fas fa-envelope-open"></i> 
                                <span>contato@basicodelica.com.br</span>
                            </li>
                            <li> 
                                <i class="fas fa-phone"></i> 
                                <span>(81) 9.9999.0407</span>                  
                            </li>
                            <li>
                                <i class="fas fa-map-marker-alt"></i> 
                                <span>
                                    Estr. de Belém, 1345 - Campo Grande, <br>
                                    Recife - PE, 52031-000
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="cell large-4">
                    <div class="info-block">
                        <h4 class="info-block-title">Siga-nos</h4>
                        <ul class="info-list">
                            <li> 
                                <i class="fab fa-facebook-f"></i> 
                                <a href="#">Facebook</a>
                            </li>
                            <li> 
                                <i class="fab fa-instagram"></i> 
                                <a href="#">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="cell large-4">
                    <div class="info-block">
                        <h4 class="info-block-title">Newsletter</h4>
                        <div class="info-block-content">
                            <p>
                                Cadastre seu e-mail e fique por dentro das novidades.
                            </p>
                        </div>

                        <form data-abide novalidate>
                            <div class="newsletter-form-helper">
                                <label>
                                    <input type="email" placeholder=" Digite seu e-mail" required>
                                    <span class="form-error">informe um e-mail válido</span>
                                </label>
                                <button type="submit" class="button-submit-newsletter">
                                    OK
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="cell">
                    <div class="footer-content">
                        <p class="footer-copyright"><?php echo date('Y'); ?> &COPY; Basicodélica </p>
                        <div class="developed-by">
                            <a href="https://josewillams.com/" target="_blank" title="desenvolvido por">
                                <img alt="desenvolvido por" src="dist/assets/images/logo/logo-icon.png">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<script src="dist/assets/js/vendors.min.js"></script>
<script src="dist/assets/js/app.min.js"></script>

</body>
</html>
<?php
/*  end the buffer, echo the page content  */
//ob_end_flush();
