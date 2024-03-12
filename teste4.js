let monthlyBilling = [
    {
        state: 'SP',
        value: 67836.43
    },
    {
        state: 'RJ',
        value: 36678.66
    },
    {
        state: 'MG',
        value: 29229.88
    },
    {
        state: 'ES',
        value: 27165.48
    },
    {
        state: 'Others',
        value: 19849.53
    },
]

function calcTotal() {
    let sum = 0;
    monthlyBilling.map((el) => sum += el.value);

    return sum;
}

function calcPercent() {
    let total = calcTotal();
    let percent = [];

    monthlyBilling.map(el => {
        percent.push({ 'state': el.state, 'valuePercent': ((el.value * 100) / total).toFixed(2) })
    });

    return percent;
}

console.log(calcPercent());