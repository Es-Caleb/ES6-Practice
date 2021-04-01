class Cinema {
    constructor() {
        this.x = 5;
        this.y = 10;
        this.cinema = [];
        this.movieTicketRecords = [];
        this.status = 0;
    }
    init(x,y) {
        this.x = x;
        this.y = y;
        for(let i = 0; i < x; i++){
            let zuowei = new Array(y).fill('O');
            this.cinema.push(zuowei);
        }
    }
    // 保存座位
    saveLocation(a,b, status) {
        this.getTime();
        let arr = {
            row: a,
            column: b,
            time: this.times,
            status: status
        };
        this.movieTicketRecords.push(arr);
    }
    // 座位不存在
    nonExistent(a,b) {
        if ( a <= 0 || a > this.x || b <= 0 || b > this.y ) {
            console.log('不存在该座位');
            this.status = 2;
        }
    }
    // 购票
    sell(a,b) {
        this.nonExistent(a,b);
        if (this.status == 0) {
            this.saveLocation(a,b,0);
            this.cinema[a-1][b-1] = 'X';
        } else {
            this.status = 0;
        }
        
    }
    // 退票
    refund(a,b) {
        this.nonExistent(a,b);
        if (this.status == 2) {
            this.status = 0;
            return;
        }
        if (this.cinema[a-1][b-1] == 'X') {
            this.saveLocation(a,b,1);
            this.cinema[a-1][b-1] = 'O';
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
        for (let i = 0; i < this.movieTicketRecords.length; i++) {
            let url = this.movieTicketRecords[i].time + ' row ' + this.movieTicketRecords[i].row + ' column ' + this.movieTicketRecords[i].column;
            if (this.movieTicketRecords[i].status == 0) {
                console.log(url);
            } else {
                console.log(url + ' refund');
            }
        }
    }
    // 获取当前时间
    getTime() {
        let date = new Date();
        let year = date.getFullYear() + '-';
        let month = date.getMonth() + 1 + '-';
        let day = date.getDate() + ' ';
        let time = date.toLocaleTimeString('chinese', {hour12: false});
        this.times = year + month + day + time;
    }
}
var arr = new Cinema();
arr.init(5, 10);
arr.sell(4,6);
arr.print();
arr.refund(4,6);
arr.print();
arr.listorder();