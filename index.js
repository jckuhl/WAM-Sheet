const electron = require('electron');
const remote = electron.remote;

const app = new Vue({
    el: '#app',
    data: {
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
            let totalWeight = 0;
            let totalMoment = 0;
            for(let axle of this.axles) {
                totalWeight += parseInt(axle.weight);
                totalMoment += parseInt(axle.moment);
            }
            this.total.weight = totalWeight;
            this.total.moment = totalMoment;
            return this.total;
        },
        getCB() {
            return (this.total.moment / this.total.weight).toFixed(2);
        }
    },
    methods: {
        getMoment(axle) {
            axle.moment = axle.weight * axle.arm;
            return !isNaN(axle.moment) ? axle.moment : 'Invalid Values';
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
        quit: function() {
            const window = remote.getCurrentWindow();
            window.close();
        },
        reset: function() {
            this.axles = [
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

            ]
        },
        focusWithin: function() {
            if(event.target.parentElement.nodeName === 'TD'){
                event.target.parentElement.style.backgroundColor = '#ff8';
            }
        },
        focusWithout: function() {
            if(event.target.parentElement.nodeName === 'TD'){
                event.target.parentElement.style.backgroundColor = 'white';
            }
        }
    }
});