<footer class="footer-container">
  <div class="footer-bottom">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="cell">
          <div class="footer-content">
            <p class="footer-copyright"><?php echo date('Y'); ?> &COPY; <?php echo $projetc_data['site_name'] ?> </p>
            <div class="developed-by">
              <a href="https://josewillams.com/" target="_blank" title="desenvolvido por José Willams">
                <img alt="desenvolvido por José Willams" src="dist/assets/images/logo/logo-icon.png">
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

<div class="toast">
  <div class="toast-icon">
    <i class="icon fas fa-exclamation-circle"></i> 
  </div>
  <div class="toast-text">A notification message...</div>
</div>

</body>
</html>
<?php
/*  end the buffer, echo the page content  */
//ob_end_flush();
