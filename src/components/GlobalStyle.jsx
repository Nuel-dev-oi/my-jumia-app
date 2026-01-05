import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css?inline';

export default createGlobalStyle`
        ${normalize}
    *, *:before, *:after {
        box-sizing: border-box;
    }
    
    body, html {
        height: 100%;
        margin: 0;
        background-color: rgba(200, 200, 200, 1);
        font-size: 16px;
    }
    body {
        font-family: "Rubik", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        background-color: #fff;
        line-height: 1.4;
        height: max-content;
        text-shadow: 0px 0px 1px #000;
        overflow-x: ${() => window.innerWidth <= 700 ? "hidden" : "scroll"};
    }
    a:link, a:visited {
        color: #0077cc;
    }
    a:hover, a:focus {
        color: #004499;
    }
    code, pre {
        max-width: 100%;
    }
`;
