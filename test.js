function computeTargetTotal(initialDate, finalDate, yearlyGoal) {
    const startPoint = new Date(initialDate);
    const endPoint = new Date(finalDate);
    let present = new Date(startPoint);

    let nonFridaysPerMonth = [];
    let daysActiveInPeriod = [];
    let targetsPerMonth = [];

    let totalWorkingTime = 0;

    while (present <= endPoint) {
        const presentYear = present.getFullYear();
        const presentMonth = present.getMonth();

        const daysThisPeriod = new Date(presentYear, presentMonth + 1, 0).getDate();
        let nonFridayDays = Array.from({ length: daysThisPeriod }, (_, day) => day + 1)
            .reduce((acc, day) => acc + (new Date(presentYear, presentMonth, day).getDay() !== 5 ? 1 : 0), 0);
        nonFridaysPerMonth.push(nonFridayDays);

        let currentMonthActive = Array.from({ length: daysThisPeriod }, (_, day) => day + 1)
            .filter(day => {
                const dateChecking = new Date(presentYear, presentMonth, day);
                return dateChecking <= endPoint && dateChecking.getDay() !== 5;
            }).length;

        daysActiveInPeriod.push(currentMonthActive);

        totalWorkingTime += currentMonthActive;

        present.setMonth(present.getMonth() + 1);
        present.setDate(1);
    }

    daysActiveInPeriod.forEach(days => {
        targetsPerMonth.push((yearlyGoal / 365) * days);
    });

    const totalGoal = targetsPerMonth.reduce((sum, value) => sum + value, 0);

    return {
        nonFridaysPerMonth,
        daysActiveInPeriod,
        targetsPerMonth,
        totalGoal
    };
}

console.log(computeTargetTotal('2024-01-01', '2024-03-31', 5220));