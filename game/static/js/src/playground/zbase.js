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
