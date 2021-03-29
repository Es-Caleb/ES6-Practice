class Point {
    yingTing(x,y) {
        var yyuan = [];
        for(let i = 0; i < x; i++){
            let zuowei = new Array(y).fill('O');
            yyuan.push(zuowei)
        }
        this.yyuan = yyuan;
    }
    // 购票
    gouPiao(a,b) {
        this.yyuan[a-1][b-1] = 'X';
        let shouHou = '';
        for (let j = 0; j < this.yyuan.length; j++) {
            this.shouHou = shouHou += this.yyuan[j] + '\n';
        }
    }
    // 退票
    refund(a,b) {
        this.yyuan[a-1][b-1] = 'O';
        let shouHou = '';
        for (let j = 0; j < this.yyuan.length; j++) {
            this.shouHou = shouHou += this.yyuan[j] + '\n';
        }
        this.tuiPiao = new Date().toLocaleString() + ' row ' + a + ' column ' + b + ' refund';
    }
}
var arr = new Point();
arr.yingTing(5,10);
arr.gouPiao(4,6);
arr.refund(4,6);
console.log(arr.shouHou);
console.log(arr.tuiPiao);