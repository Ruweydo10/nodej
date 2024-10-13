# nodej

# Description:

# Compute Target Total
This script calculates working time and target goals over a specified period. It excludes Fridays and computes target values based on the number of active working days.

# How the Code Works
The computeTargetTotal function takes three parameters:

initialDate: The start date of the period (format: 'YYYY-MM-DD').
finalDate: The end date of the period (format: 'YYYY-MM-DD').
yearlyGoal: The total goal you aim to achieve in a year.

# What the Script Does
Calculates the number of non-Friday days for each month within the given period.
Determines active working days in each month, excluding Fridays.
Calculates monthly targets based on the number of active days in the given period, proportionally distributing the yearly goal.

# Returns an object containing:
nonFridaysPerMonth: Number of non-Friday days for each month.
daysActiveInPeriod: Total active days for each month.
targetsPerMonth: Target goals for each month.
totalGoal: Sum of the monthly targets over the entire period.

# Example Usage
To run the code, you can use a JavaScript runtime environment like Node.js. In your terminal, create a new file named computeTargetTotal.js and add the script.

console.log(computeTargetTotal('2024-01-01', '2024-03-31', 5220));
