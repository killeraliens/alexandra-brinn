

function handleThemeSwitch() {
    $("#js-color-theme-switch").on('click', function(e) {
        $("body").toggleClass('night');
        const switchInput = $(e.currentTarget);
        switchInput.attr("checked", !switchInput.attr("checked"));
        switchInput.prop("aria-checked", !switchInput.prop("aria-checked"));

        console.log(switchInput.prop('aria-checked'));
        console.log(switchInput.prop('checked'));
    });
}








function handleInputs() {
    handleThemeSwitch();

}

handleInputs();