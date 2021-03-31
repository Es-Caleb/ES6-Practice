class Point {
    cinema(x,y) {
        let yyuan = [];
        for(let i = 0; i < x; i++){
            let zuowei = new Array(y).fill('O');
            yyuan.push(zuowei);
        }
        this.yyuan = yyuan;
    }
    // 购票
    buyTicket(a,b) {
        this.yyuan[a-1][b-1] = 'X';
        let shouHou = '';
        for (let j = 0; j < this.yyuan.length; j++) {
            this.buys = shouHou += this.yyuan[j] + '\n';
        }
    }
    // 退票
    refund(a,b) {
        this.yyuan[a-1][b-1] = 'O';
        for (let j = 0; j < this.yyuan.length; j++) {
            this.buys += this.yyuan[j] + '\n';
        }
        let date = new Date();
        let year = date.getFullYear() + '-';
        let month = date.getMonth() + 1 + '-';
        let day = date.getDate() + ' ';
        let time = date.toLocaleTimeString('chinese', {hour12: false});
        this.refTicket = year + month + day + time + ' row ' + a + ' column ' + b + ' refund';
    }
}
var arr = new Point();
arr.cinema(5,10);
arr.buyTicket(4,6);
console.log(arr.buys);
arr.refund(4,6);
console.log(arr.refTicket);