# Foundation 6 + Sass com Libsass + Grunt + BrowserSync Live Reloading

Este é o scaffold do Zurb Foundation 6 usado na Plano4.com.br

### Nota:

** Este é o scaffold do Foundation 6 usado na Plano4.com.br baseado no projeto de JULIAN ĆWIRKO [Foundation 5 and Yeoman generator-zf5](http://julian.io/foundation-5-and-yeoman/)

[![NPM](https://nodei.co/npm/generator-p4.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/generator-p4/)

[![NPM](https://nodei.co/npm-dl/generator-p4.png)](https://nodei.co/npm/generator-p4/)

## Yo P4!
* [Zurb Foundation 6] (http://foundation.zurb.com/sites.html)
* [Motion UI Sass Library] (http://foundation.zurb.com/sites/docs/motion-ui.html)
* [Sass com Libsass] (http://sass-lang.com/libsass)
* [Autoprefixer com PostCSS] (https://github.com/nDmitry/grunt-postcss)
* [Compass Functions com 'compass-mixins'] (https://github.com/Igosuki/compass-mixins)
* [BrowserSync Live Reloading] (https://www.browsersync.io/)
* [Font Awesome] (https://fortawesome.github.io/Font-Awesome/)
* Automação de tarefas com [Grunt] (http://gruntjs.com/)

## Instalação rápida

#### Instalação

#### nota impotante:
** O BrowserSync está configurado para acessar o servidor local 'http://localhost', caso não queira essa função mude no arquivo 'Gruntfile.js'
para 'Static File Server' [veja como fazer aqui] (https://www.browsersync.io/docs/grunt/#grunt-server)

** se o 'compass-mixins' não funcionar corretamente por causa da versão do Libsass [issue #84] (https://github.com/Igosuki/compass-mixins/issues/84), 
substitua o arquivo _lists.scss em 'app/bower_components/compass-mixins/lib/compass/functions/'
por [esse aqui] (https://raw.githubusercontent.com/xzyfer/compass-mixins/patch-1/lib/compass/functions/_lists.scss)

Você precisa ter o node, npm , git e algumas outras dependências instaladas:

Instale o [nodejs](https://nodejs.org/)

Instale o [git](https://git-scm.com/): https://git-scm.com/


Instale o npm

```
$ npm install -g npm
```

Instale o bower

```
$ npm install -g bower
```

Instale o grunt
```
$ npm install -g grunt-cli
```

Instale o Yeoman:

```
$ npm install -g yo
```

Instale o [generator-p4](https://www.npmjs.com/package/generator-p4)

```
$ npm install -g generator-p4
```

#### Criando o Projeto

Navegue até a pasta do projeto e inicialize o generator-p4:

```
$ yo p4
```

#### Iniciando o Projeto

Navegue até a pasta do projeto e digite `grunt` para iniciar:

```
$ grunt
```

Para exportar os arquivos para produção:

```
$ grunt publish
```

A versão finalizada será exportada para a pasta `dist`

## Licença

[Licença MIT](https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT)
