var mass, height, bmiJohn, bmiMark;
mass = prompt('Enter the weight of John:')
height = prompt('Enter the height of John:')
bmiJohn = mass/(height*height)

mass = prompt('Enter the weight of Mark:')
height = prompt('Enter the height of Mark:')
bmiMark = mass/(height*height)

console.log('BMI of John is greater than BMI of Mark: ', bmiJohn>bmiMark)