<?php require_once './inc_header.php'; ?>

<!-- main-container -->
<main class="main-container">
  <!-- home banner -->
  <section class="home-banner-container">
    <div class="home-slider" data-js-slider-home>
      <!-- ./slider-item -->
      <div class="slider-item">
        <div class="slider-item-image" data-interchange="[dist/assets/images/apoio/banner-320x340.jpg, small], [dist/assets/images/apoio/banner-1920x645.jpg, large]"></div>
        <div class="slider-item-center">
          <div class="grid-container">
            <div class="grid-x grid-padding-x">
              <div class="large-6 cell">
                <span class="animate-subtitle animate-pop-in text-above">#novacoleção</span>
                <h1 class="animate-title animate-pop-in slider-title">Estampas exclusivas</h1>
                <span class="animate-subtitle animate-pop-in text-below">Vista-se com estilo!</span>
                <a href="colecoes.php" class="animate-button animate-pop-in slider-button"  title="veja mais">veja mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ./end slider-item -->

      <!-- ./slider-item -->
      <div class="slider-item">
        <div class="slider-item-image" data-interchange="[dist/assets/images/apoio/banner-320x340.jpg, small], [dist/assets/images/apoio/banner-1920x645.jpg, large]"></div>
        <div class="slider-item-center">
          <div class="grid-container">
            <div class="grid-x grid-padding-x">
              <div class="large-6 cell">
                <span class="animate-subtitle animate-pop-in text-above">#novacoleção</span>
                <h1 class="animate-title animate-pop-in slider-title">Estampas exclusivas</h1>
                <span class="animate-subtitle animate-pop-in text-below">Vista-se com estilo!</span>
                <a href="colecoes.php" class="animate-button animate-pop-in slider-button"  title="veja mais">veja mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ./end slider-item -->
    </div>
  </section>

  <section class="section">
    <div class="grid-container">
      <div class="grid-x grid-padding-x align-center">
        <div class="cell text-center">
          <h1 class="section-title">Coleções</h1>
        </div>

        <div class="cell">
          <div class="slider-carousel-wrap">
            <div class="grid-colecoes" data-js-slider-colecoes data-equalizer data-equalize-on="large" data-equalize-on-stack="true">
              <?php foreach ($colecoes as $key => $colecao): ?>
                <div data-equalizer-watch class="grid-item <?php echo slugify($categorias[$colecao['categoria']]); ?>" data-category="<?php echo slugify($categorias[$colecao['categoria']]); ?>">
                  <div class="colection-item">
                    <div class="colection-item-img">
                      <img src="<?php echo $colecao['imagem']; ?>" alt="<?php echo $colecao['title']; ?>">
                    </div>
                    <div class="colection-item-info">
                      <span class="colection-item-cat"><?php echo $categorias[$colecao['categoria']]; ?></span>
                      <h3 class="colection-item-title"><?php echo $colecao['title']; ?></h3>
                    </div>
                  </div>
                </div>
              <?php endforeach; ?>
            </div>
            <div class="custom-nav"></div>
          </div>
        </div>

        <div class="cell text-center">
          <a href="colecoes.php" title="veja mais" class="button button-spaced">veja mais</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="grid-container">
      <div class="grid-x grid-padding-x align-center">
        <div class="cell">
          <div class="home-sobre">
            <div class="home-sobre-bg" data-interchange="[dist/assets/images/apoio/banner-1920x645.jpg, small]"></div>
            <div class="home-sobre-content">
              <h2 class="title">Sobre a basicodélica</h2>
              <a href="sobre.php" title="veja mais" class="button">Conheça</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<!-- main-container -->

<?php
require_once './inc_footer.php';
