
var LoginView = (function (_super) {

    // _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function Login() {
        Login.super(this);

        this.loginBtn.on(Laya.Event.CLICK, this, this.loginBtnClick)
        this.registBtn.on(Laya.Event.CLICK, this, this.registBtnClick)
        this.autoLoginBtn.on(Laya.Event.CLICK, this, this.autoLoginBtnClick)
        this.rememberPwdBtn.on(Laya.Event.CLICK, this, this.rememberPwdBtnClick)

        this.init()
    }
    Laya.class(Login, 'Login', _super);
    var _prototype = Login.prototype
    // 初始化
    _prototype.init = function () {

    }
    // 登陆
    _prototype.loginBtnClick = function () {
        var username = this.username.text
        var password = this.password.text
        if (username.length == 11 && password.length > 0) {

        }
        this.removeSelf()
        Luck.indexView = new IndexView()
        Laya.stage.addChild(Luck.indexView)
    }
    // 注册
    _prototype.registBtnClick = function () {
        Luck.loginView.removeSelf()

        Luck.registView = new RegistView()
        Laya.stage.addChild(Luck.registView)
    }
    // 自动登陆
    _prototype.autoLoginBtnClick = function () {
        this.autoLoginBtn._childs[0].visible = !this.autoLoginBtn._childs[0].visible
    }
    // 记住密码
    _prototype.rememberPwdBtnClick = function () {
        this.rememberPwdBtn._childs[0].visible = !this.rememberPwdBtn._childs[0].visible
    }



    return Login;
})(ui.login.loginUI);
