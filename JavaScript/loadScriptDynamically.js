<script type="text/javascript">

// load counter
var scriptLoadCounter = 0;
var scriptLoadCounterMax = 3;

// create script tag in header
var head = document.getElementsByTagName('head')[0];
var scriptFile1 = document.createElement('script');
var scriptFile2 = document.createElement('script');
var scriptFile3 = document.createElement('script');

// load javascript file #1
scriptFile1.onreadystatechange= function () {if (this.readyState == 'complete') readyHandler();}
scriptFile1.onload= readyHandler;
scriptFile1.type = 'text/javascript';
scriptFile1.src = 'scriptFile1.js';
head.appendChild(scriptFile1);

// load javascript file #2
scriptFile2.onreadystatechange= function () {if (this.readyState == 'complete') readyHandler();}
scriptFile2.onload= readyHandler;
scriptFile2.type = 'text/javascript';
scriptFile2.src = 'scriptFile1.js';
head.appendChild(scriptFile2);

// load javascript file #3
scriptFile3.onreadystatechange= function () {if (this.readyState == 'complete') readyHandler();}
scriptFile3.onload= readyHandler;
scriptFile3.type = 'text/javascript';
scriptFile3.src = 'scriptFile1.js';
head.appendChild(scriptFile3);

// on javascript file load complete
function readyHandler(){
    scriptLoadCounter++;
    if(scriptLoadCounter == scriptLoadCounterMax){
        alert('ready');
    }
}

</script>


