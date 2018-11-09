<?php

// Converts any accent characters to their equivalent normal characters and converts any other non-alphanumeric
use JBZoo\Utils\Slug;

//composer autoload
require_once './vendor/autoload.php';

/* slugify a URL */
function slugify($string) {
    return Slug::filter($string, '-', TRUE);
}

//Mobile Detect
require_once './vendor/mobiledetect/mobiledetectlib/Mobile_Detect.php';
$detect = new Mobile_Detect;
$deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');

// nome da página
//$scriptName = filter_input(INPUT_SERVER, 'SCRIPT_NAME', FILTER_SANITIZE_STRING);
$scriptName = $_SERVER['SCRIPT_NAME'];
$page_name = basename($scriptName, ".php");

if ($page_name == 'index') {
    $page_name = 'home';
}

/*
 * 
 */
$projetc_data = array(
    'site_name' => 'Project Name',
    'site_description' => 'Here is a precise description of my awesome webpage.',
);

//var_dump($projetc_data);


/*
 * 
 */
function hasPage($str, $find) {
    $pos = strpos($str, $find);
    if ($pos === false) {
        return false;
    } else {
        return true;
    }
}

/*
 * 
 */

function menuActiveClass($pageName, $pageSlug, $wrightClass = true) {
    if (hasPage(slugify($pageName), slugify($pageSlug))) {
        if ($wrightClass) {
            echo 'class="is-active"';
        } else {
            echo " is-active";
        }
    }
}

/*
 * minify php page html output
 */
function compress_page($buffer) {
    $search = array(
        '/\>[^\S ]+/s', //strip whitespaces after tags, except space
        '/[^\S ]+\</s', //strip whitespaces before tags, except space
        '/(\s)+/s'  // shorten multiple whitespace sequences
    );
    $replace = array(
        '>',
        '<',
        '\\1'
    );
    $bufferout = preg_replace($search, $replace, $buffer);
    return $bufferout;
}


/**
 * Função retorna dados de media do instagram
 * @param number $user_id
 * @param string $access_token
 * @param number $count
 * @return array $jsonData
 */
function get_instagram_media($user_id = 1606452659, $access_token = '1606452659.1677ed0.bc14e6751ab0453d8aeecfc9c46380a1', $count = 6) {
    //https://www.instagram.com/developer/endpoints/users/
    $url = 'https://api.instagram.com/v1/users/' . $user_id . '/media/recent/?access_token=' . $access_token . '&count=' . $count;
    //cache the results
    $cache = './' . sha1($url) . '.json';
    if (file_exists($cache) && filemtime($cache) > time() - 60 * 60) {
        // If a cache file exists, and it is newer than 1 hour, use it
        $jsonData = json_decode(file_get_contents($cache));
    } else {
        $jsonData = json_decode((file_get_contents($url)));
        file_put_contents($cache, json_encode($jsonData));
    }
    return $jsonData;
}


$categorias = array('Feminina', 'Intantil', 'Fantasia');
$colecoes = array(
    array(
        'title' => 'Blusa manga curta',
        'imagem' => 'dist/assets/images/apoio/imagem-colecao-280x350.jpg',
        'categoria' => array_rand($categorias, 1)
    ),
    array(
        'title' => 'Blusa curta',
        'imagem' => 'dist/assets/images/apoio/imagem-colecao-2-280x350.jpg',
        'categoria' => array_rand($categorias, 1)
    ),
    array(
        'title' => 'Estampa pop arte',
        'imagem' => 'dist/assets/images/apoio/imagem-colecao-280x350.jpg',
        'categoria' => array_rand($categorias, 1)
    ),
    array(
        'title' => 'Blusa manga comprida',
        'imagem' => 'dist/assets/images/apoio/imagem-colecao-2-280x350.jpg',
        'categoria' => array_rand($categorias, 1)
    ),
    array(
        'title' => 'Blusa manga curta',
        'imagem' => 'dist/assets/images/apoio/imagem-colecao-280x350.jpg',
        'categoria' => array_rand($categorias, 1)
    ),
    array(
        'title' => 'Blusa curta',
        'imagem' => 'dist/assets/images/apoio/imagem-colecao-2-280x350.jpg',
        'categoria' => array_rand($categorias, 1)
    ),
    array(
        'title' => 'Estampa pop arte',
        'imagem' => 'dist/assets/images/apoio/imagem-colecao-280x350.jpg',
        'categoria' => array_rand($categorias, 1)
    ),
    array(
        'title' => 'Blusa manga comprida',
        'imagem' => 'dist/assets/images/apoio/imagem-colecao-2-280x350.jpg',
        'categoria' => array_rand($categorias, 1)
    ),
    array(
        'title' => 'Blusa manga curta',
        'imagem' => 'dist/assets/images/apoio/imagem-colecao-280x350.jpg',
        'categoria' => array_rand($categorias, 1)
    ),
    array(
        'title' => 'Blusa curta',
        'imagem' => 'dist/assets/images/apoio/imagem-colecao-2-280x350.jpg',
        'categoria' => array_rand($categorias, 1)
    ),
    array(
        'title' => 'Estampa pop arte',
        'imagem' => 'dist/assets/images/apoio/imagem-colecao-280x350.jpg',
        'categoria' => array_rand($categorias, 1)
    ),
    array(
        'title' => 'Blusa manga comprida',
        'imagem' => 'dist/assets/images/apoio/imagem-colecao-2-280x350.jpg',
        'categoria' => array_rand($categorias, 1)
    ),
);

shuffle($colecoes);