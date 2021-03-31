class Cinema {
    constructor() {
        this.x = 5;
        this.y = 10;
        this.cinema = [];
        this.status = 0;
        this.a = 0;
        this.b = 0;
    }
    init(x,y) {
        this.x = x;
        this.y = y;
        for(let i = 0; i < x; i++){
            let zuowei = new Array(y).fill('O');
            this.cinema.push(zuowei);
        }
    }
    // 购票
    buyTicket(a,b) {
        this.a = a;
        this.b = b;
        if ( a <= 0 || a > this.x || b <= 0 || b > this.y ) {
            console.log('不存在该座位');
            return;
        }
        this.cinema[a-1][b-1] = 'X';
        this.status = 0;
    }
    // 退票
    refund(a,b) {
        this.a = a;
        this.b = b;
        if (this.cinema[a-1][b-1] == 'X') {
            this.cinema[a-1][b-1] = 'O';
            this.status = 1;
        } else {
            console.log('该座位未售出');
        }
    }
    print() {
        let shouHou = '';
        for (let j = 0; j < this.cinema.length; j++) {
            this.buys = shouHou += this.cinema[j] + '\n';
        }
        console.log(this.buys);
    }
    listorder() {
        let date = new Date();
        let year = date.getFullYear() + '-';
        let month = date.getMonth() + 1 + '-';
        let day = date.getDate() + ' ';
        let time = date.toLocaleTimeString('chinese', {hour12: false});
        
        let url = year + month + day + time + ' row ' + this.a + ' column ' + this.b;
        if (this.status == 0) {
            console.log(url);
        } else {
            console.log(url + ' refund');
        }
    }
}
var arr = new Cinema();
arr.init(5,10);
arr.buyTicket(4,6);
arr.print();
arr.listorder();
arr.refund(4,6);
arr.print();
arr.listorder();