var index = $(".step.active").index(".step"),
    stepsCount = $(".step").length,
    prevBtn = $("#prev"),
    nextBtn = $("#next");

prevBtn.click(function() {
    nextBtn.prop("disabled", false);

    if (index > 0) {
        index--;
        $(".step").removeClass("active").eq(index).addClass("active");
    };

    if (index === 0) {
        $(this).prop("disabled", true);
    }
});

nextBtn.click(function() {
    prevBtn.prop("disabled", false);

    if (index < stepsCount - 1) {
        index++;
        $(".step").removeClass("active").eq(index).addClass("active");
    };

    if (index === stepsCount - 1) {
        $(this).prop("disabled", true);
    }
});