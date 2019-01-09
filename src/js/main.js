(function (){
    $.scojs_message.options.delay = 2000;
    $(function () {
    window._bar = new Nanobar();
    window.render = {
        fund: _.template($("#tpl_fundchart").text()),
        stock: _.template($("#tpl_stockchart").text()),
        securityname: _.template($("#tpl_securityname").text()),
        profilobtn: _.template($("#tpl_profilobtn").text())
    };
    _ui_init();
    _reg_event_handlers();
    _List.current_portfolio().activate();
    new Clipboard('#neat_val_copy');
    _bar.go(100);
    });
})();