function isNumber(num) {
  return Object.prototype.toString.call(num) === "[object Number]";
}
// 获取当前时间
function getTime() {
    let date = new Date();
    let year = date.getFullYear() + '-';
    let month = date.getMonth() + 1 + '-';
    let day = date.getDate() + ' ';
    let time = date.toLocaleTimeString('chinese', {hour12: false});
    return year + month + day + time;
}
class Cinema {
    constructor() {
        // 座位排
        this.row = 0;
        // 座位列
        this.col = 0;
        // 座位情况
        this.cinema = [];
        // 售票记录
        this.record = [];
    }
    init(x,y) {
        if (isNumber(x) && isNumber(y) && x > 0 && y > 0) {
            this.row = x;
            this.col = y;
            this.cinema = new Array(x)
            .fill("")
            .map(() => new Array(y).fill("O"));
        } else {
            console.log("请输入有效的座位排数");
        }
    }
    /** 保存座位
     * row  排数
     * col  列数
     * time 记录时间
     * status 是否出售 0售出 1退票
     */
    saveLocation(a,b, status) {
        let arr = {
            row: a,
            col: b,
            time: getTime(),
            status
        };
        this.record.push(arr);
    }
    // 座位不存在
    nonExistent(a,b) {
        if (isNumber(a) && isNumber(b) && a > 0 && b > 0 && a < this.row && b < this.col) {
            return true;
        }
        console.log("请输入有效的座位号");
        return false;
    }
    // 购票
    sell(row, col) {
        if (!this.nonExistent(row, col)) return;
        if (this.cinema[row-1][col-1] == 'O') {
            this.cinema[row-1][col-1] = 'X';
            this.saveLocation(row,col,0);
        } else {
            console.log("该座位已售出");
        }
    }
    // 退票
    refund(row, col) {
        if (!this.nonExistent(row, col)) return;
        if (this.cinema[row-1][col-1] == 'X') {
            this.cinema[row-1][col-1] = 'O';
            this.saveLocation(row,col,1);
        } else {
            console.log('该座位还未售出');
        }
    }
    print() {
        console.log(this.cinema.map((item) => item.join()).join("\n"));
    }
    listOrder() {
        this.record.forEach((item) => {
            console.log(`${item.time} row ${item.row} column ${item.col} ${item.status === 1 ? 'refund' : '' }`)
        })
    }
}
var sell = new Cinema();
sell.init(5, 10);
console.log('第1波测试：测试有效的座位号\n');
sell.sell(6, 10);

console.log('\n第2波测试：重复售出座位号\n');
sell.sell(2, 3);
sell.print();
sell.sell(2, 3);

sell.sell(1, 2);
sell.refund(1, 2);

console.log('\n第3波测试：未出售的座位号出售\n');
sell.refund(4, 6);

console.log('\n第4波测试：列出左右的售票记录\n');
sell.listOrder();
sell.print();