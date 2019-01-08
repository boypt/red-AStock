(function (){
    $.scojs_message.options.delay = 2000;
    $(function () {
    window._bar = new Nanobar();
    window.render = {
        fund: JST['tpl_fundchart'],
        stock: JST['tpl_stockchart'],
        securityname: JST['tpl_securityname'],
        profilobtn: JST['tpl_profilobtn']
    };
    _ui_init();
    _reg_event_handlers();
    _List.current_portfolio().activate();
    new Clipboard('#neat_val_copy');
    _bar.go(100);
    });
})();