<style>
    #preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background-color: rgba(255, 255, 255, 0.9);
    }
    #loader {
        display: block;
        position: relative;
        left: 50%;
        top: 50%;
        width: 80px;
        height: 80px;
        margin: -40px 0 0 -40px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #85599a;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
    }

    /* Medium and up */
    @media screen and (min-width: 40em) {
        #loader {
            width: 150px;
            height: 150px;
            margin: -75px 0 0 -75px;
        }
    }
    #loader:before {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #85599a;
        -webkit-animation: spin 3s linear infinite;
        animation: spin 3s linear infinite;
    }
    #loader:after {
        content: "";
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #85599a;
        -webkit-animation: spin 1.5s linear infinite;
        animation: spin 1.5s linear infinite;
    }
    @-webkit-keyframes spin {
        0%   {
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes spin {
        0%   {
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>
<div id="preloader" data-js-loading>
    <div id="loader"></div>
</div>