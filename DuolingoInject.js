(function YablaInject(document) {
    var EVENT_LOOP_TIMEOUT = 2000;

    //DOM Manipulation loops
    function loop() {


        //Another iteration
        return setTimeout(loop, EVENT_LOOP_TIMEOUT);
    }

    //Start the loop
    loop();
})(document);