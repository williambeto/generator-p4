<?php
include './functions.php';
/*  start the output buffer  */
ob_start('compress_page');
?>
<!doctype html>
<html class="no-js" lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $projetc_data['site_name'] ?></title>

    <meta name="description" content="<?php echo $projetc_data['site_name'] ?>">
    <meta name="author" content="https://plus.google.com/u/0/+Jos%C3%A9Willams-williambeto?rel=author">

    <!-- Social: Facebook / Open Graph -->
    <meta property="og:url" content="<?php echo $projetc_data['site_url'] ?>">
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?php echo $projetc_data['site_name'] ?>">
    <meta property="og:image" content="<?php echo $projetc_data['site_url'] ?>/dist/assets/images/apoio/social-banner.jpg">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="1920">
    <meta property="og:image:height" content="700">
    <meta property="og:description" content="<?php echo $projetc_data['site_description'] ?>">
    <meta property="og:site_name" content="<?php echo $projetc_data['site_name'] ?>">

    <!-- Social: Google+ / Schema.org  -->
    <meta itemprop="name" content="<?php echo $projetc_data['site_name'] ?>">
    <meta itemprop="description" content="<?php echo $projetc_data['site_description'] ?>">
    <meta itemprop="image" content="<?php echo $projetc_data['site_url'] ?>/dist/assets/images/logo/logo-instituto.svg">

    <!-- favicon -->
    <link rel="shortcut icon" href="dist/assets/images/favicon/favicon.ico" type="image/x-icon">
    <link rel="icon" href="dist/assets/images/favicon/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="57x57" href="dist/assets/images/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="dist/assets/images/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="dist/assets/images/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="dist/assets/images/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="dist/assets/images/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="dist/assets/images/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="dist/assets/images/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="dist/assets/images/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="dist/assets/images/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="dist/assets/images/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="dist/assets/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="dist/assets/images/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="dist/assets/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="dist/assets/images/favicon/manifest.json">

    <meta name="application-name" content="<?php echo $projetc_data['site_name'] ?>">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="dist/assets/images/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#85599a">

    <!-- Global Stylesheet -->
    <link rel="stylesheet" href="dist/assets/css/app.min.css">

  </head>

  <body class="<?php echo $deviceType . ' ' . $page_name; ?>">
    <?php require_once './inc_loading.php'; ?>
    <!--[if lt IE 9]>
        <div class="browserupgrade"> Seu navegador está <strong>desatualizado</strong>. 
            Ele possui falhas de segurança e pode apresentar problemas para exibir este e outros websites.
            <strong>
                <a href="http://browsehappy.com/" title="Veja como atualizar o seu navegador" target="_blank">
                    Veja como atualizar o seu navegador
                </a>
            </strong>.
        </div>
    <![endif]-->

    <header id="header-container" class="header-container">
      <div class="header-content">
        <a href="./" title="<?php echo $projetc_data['site_name'] ?>" class="logo">
          <img data-interchange="[dist/assets/images/logo/logo-icon.png, small], [dist/assets/images/logo/logo.png, xlarge]" 
               alt="<?php echo $projetc_data['site_name'] ?>" />
        </a>
        <!-- menu-->
        <nav class="nav-menu" data-js-primary-nav>
          <ul class="main-menu">
            <?php
            $main_menu = array(
                'Home',
                'Sobre',
                'Coleções',
                'Contato'
            );
            ?>
            <?php foreach ($main_menu as $menu_item): ?>
              <li class="menu-item <?php menuActiveClass($page_name, $menu_item, false); ?>">
                <a href="<?php echo slugify($menu_item); ?>.php" title="<?php echo $menu_item; ?>" class="menu-link">
                  <?php echo $menu_item; ?>
                </a>
              </li>
            <?php endforeach; ?>
          </ul>
        </nav>

        <div class="social-top">
          <a href="#facebook" title="facebook" class="social-link">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#instagram" title="instagram" class="social-link">
            <i class="fab fa-instagram"></i>
          </a>

          <div class="phone-top">
            <i class="fas fa-phone"></i> 
            <span>(81) 9.9999.4087</span>
          </div>
        </div>

        <!-- open menu on mobile -->
        <button class="nav-button" data-js-primary-nav-toggle>                    
          <span class="nav-button-text">Menu</span>
          <span class="nav-button-ico">
            <i class="fas fa-bars"></i>
          </span>
        </button>
        <!-- /.-->
      </div>
    </header>