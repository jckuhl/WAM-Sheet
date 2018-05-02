const electron = require('electron');
const remote = electron.remote;

const app = new Vue({
    el: '#app',
    data: {
        chalk: '',
        cb: 0,
        axles: [
            {
                weight: 0,
                arm: 0,
                moment: 0
            },
            {
                weight: 0,
                arm: 0,
                moment: 0
            }
        ],
        total: {
            weight: 0,
            moment: 0
        }
    },
    computed: {
        getTotal() {
            this.total.weight = this.axles.map((axles)=> axles.weight).reduce((x,y)=> parseInt(x) + parseInt(y));
            this.total.moment = this.axles.map((axles)=> axles.moment).reduce((x,y)=> parseInt(x) + parseInt(y));
            return this.total;
        },
        getCB() {
            this.cb = (this.total.moment / this.total.weight).toFixed(2);
            return this.cb;
        }
    },
    methods: {
        getMoment(axle) {
            axle.moment = axle.weight * axle.arm;
            return axle.moment;
        },
        addAxle: function() {
            event.preventDefault();
            this.axles.push({ weight: 0, arm: 0, moment: 0 })
        },
        removeAxle: function() {
            if(this.axles.length < 3) {
                return false;
            } else {
                this.axles.pop();
            }
        },
        print: function() {
            console.log('calling printer');
        },
        quit: function() {
            const window = remote.getCurrentWindow();
            window.close();
        }
    }
});