$(document).ready(function() {

    //parallax scene

        // init controller for parallax
        var controllerPara = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "125%"}});

        new ScrollMagic.Scene({triggerElement: "#parallax1"})
                        .setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
                        //.addIndicators()
                        .addTo(controllerPara);

    // init controller for other
    var controller = new ScrollMagic.Controller();

    // svg draw on scroll
        function pathPrepare ($el) {
            var lineLength = $el[0].getTotalLength();
            $el.css("stroke-dasharray", lineLength);
            $el.css("stroke-dashoffset", lineLength);
        }

        var $XMLID_242_ = $("path#XMLID_242_");
        var $XMLID_241_ = $("path#XMLID_241_");
        var $XMLID_238_ = $("path#XMLID_238_");
        var $XMLID_237_ = $("path#XMLID_237_");
        var $XMLID_2_ = $("path#XMLID_2_");
        var $XMLID_1_ = $("path#XMLID_1_");
        var $XMLID_4_ = $("path#XMLID_4_");
        var $XMLID_3_ = $("path#XMLID_3_");
        var $XMLID_6_ = $("path#XMLID_6_");
        var $XMLID_5_ = $("path#XMLID_5_");
        var $XMLID_8_ = $("path#XMLID_8_");
        var $XMLID_7_ = $("path#XMLID_7_");
        var $XMLID_10_ = $("path#XMLID_10_");
        var $XMLID_9_ = $("path#XMLID_9_");
        var $XMLID_12_ = $("path#XMLID_12_");
        var $XMLID_11_ = $("path#XMLID_11_");
        var $XMLID_14_ = $("path#XMLID_14_");
        var $XMLID_13_ = $("path#XMLID_13_");
        var $XMLID_16_ = $("path#XMLID_16_");
        var $XMLID_15_ = $("path#XMLID_15_");
        var $XMLID_18_ = $("path#XMLID_18_");
        var $XMLID_17_ = $("path#XMLID_17_");
        var $XMLID_20_ = $("path#XMLID_20_");
        var $XMLID_19_ = $("path#XMLID_19_");
        var $XMLID_22_ = $("path#XMLID_22_");
        var $XMLID_21_ = $("path#XMLID_21_");

        // prepare SVG
        pathPrepare($XMLID_242_);
        pathPrepare($XMLID_241_);
        pathPrepare($XMLID_238_);
        pathPrepare($XMLID_237_);
        pathPrepare($XMLID_2_);
        pathPrepare($XMLID_1_);
        pathPrepare($XMLID_4_);
        pathPrepare($XMLID_3_);
        pathPrepare($XMLID_6_);
        pathPrepare($XMLID_5_);
        pathPrepare($XMLID_8_);
        pathPrepare($XMLID_7_);
        pathPrepare($XMLID_10_);
        pathPrepare($XMLID_9_);
        pathPrepare($XMLID_12_);
        pathPrepare($XMLID_11_);
        pathPrepare($XMLID_14_);
        pathPrepare($XMLID_13_);
        pathPrepare($XMLID_16_);
        pathPrepare($XMLID_15_);
        pathPrepare($XMLID_18_);
        pathPrepare($XMLID_17_);
        pathPrepare($XMLID_20_);
        pathPrepare($XMLID_19_);
        pathPrepare($XMLID_22_);
        pathPrepare($XMLID_21_);

        // build tween
        var tween = new TimelineMax()
            .add(TweenMax.to($XMLID_242_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_241_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_238_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_237_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_2_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_1_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_4_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_3_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_6_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_5_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_8_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_7_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_10_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_9_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_12_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_11_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_14_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_13_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_16_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_15_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_18_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_17_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_20_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_19_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_22_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to($XMLID_21_, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw for 0.9
            .add(TweenMax.to("path", 1, {stroke: "#fff", ease:Linear.easeNone}), 0); // change color during the whole thing

        // build scene
        new ScrollMagic.Scene({triggerElement: "#protest1", duration: "130%", tweenChanges: true})
                        .setTween(tween)
                        //.addIndicators() // add indicators (requires plugin)
                        .addTo(controller);
        
    //scroll reveals

         //build scene with loop
        for (var i=1; i<10; i++) {
            var stringNum = i.toString();
            new ScrollMagic.Scene({
                triggerElement: "#quoteReveal" + stringNum,
                triggerHook: 0.9, // show, when scrolled 10% into view
                duration: "150%", // hide 10% before exiting view (80% + 10% from bottom)
                //offset: 50 // move trigger to center of element
            })
            .setClassToggle("#quoteReveal" + stringNum, "visible") // add class to reveal
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        }
                    
});