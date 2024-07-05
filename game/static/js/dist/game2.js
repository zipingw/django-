class AcGameMenu {
    constructor(root){
        this.root = root;
        this.$menu = $(`
        <div class="ac-game-menu">
            <div class="ac-game-menu-field">
                    <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
                        单人模式
                    </div>
                    <br>
                    <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
                        多人模式
                    </div>
                    <br>
                    <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
                        设置
                    </div>
            </div>
        </div>
        `);
        this.root.$ac_game.append(this.$menu);
        this.$single = this.$menu.find('.ac-game-menu-field-item-single-mode')
        this.$multi = this.$menu.find('.ac-game-menu-field-item-multi-mode')
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings')
        this.start(); // 本质上start函数是构造函数的延生，调用start函数 使得menu可点击 跳转界面
    }
    // 一般都有个start函数 用作初始化一些内容 这是写游戏的常用模式
    start() {
        // 添加可点击事件
        this.add_listening_events();
    }
    add_listening_events() {
        let outer = this; // this 在该函数中指代整个Menu
        this.$single.click(function(){
            outer.hide(); // Menu 掩藏
            outer.root.playground.show(); // 构造函数中执行了this.root=root,此时可以通过outer.root找到playground
        });
        this.$multi.click(function(){
            console.log("click multi mode");
        })
        this.$settings.click(function(){
            console.log("click settings");
        })
    }

    show() {
        this.$menu.show();
    }
    hide() {
        this.$menu.hide();
    }
}
class AcGamePlayground {
    constructor(root) {
        this.root = root;
        // 加上'$'表示是一个HTML对象
        this.$playground = $(`
<div>游戏界面</div>
            `);
        // 将创建的playground HTML 对象添加到ac_game中
        this.hide();
        this.root.$ac_game.append(this.$playground);
        this.start();
    }
    start(){
    }
    show(){
        this.$playground.show();
    }
    hide(){
        this.$playground.hide();
    }
}
class AcGame {
    constructor(id) {
        this.id = id;
        this.$ac_game = $('#' + id);
        this.menu = new AcGameMenu(this);
        this.playground = new AcGamePlayground(this);

    }
    start(){
    }
}
