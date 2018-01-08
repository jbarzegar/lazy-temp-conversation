const program = require('commander')

const checkNumber = async num => {
  const deg = parseInt(num)

  if (deg === NaN) {
    throw new Error('Argument is not a valid number')
  }

  return deg
}

async function convertFtoC(str) {
  const temp = await checkNumber(str)
  return (temp - 32) * 0.5556
}

async function convertCtoF(str) {
  const temp = await checkNumber(str)
  return temp * 1.8 + 32
}

program
  .option('-c, --celsius', 'Convert fahrenheit to celsius')
  .option('-f, --fahrenheit', 'Convert celsius to fahrenheit')
  .parse(process.argv)

const init = () => {
  const { args } = program
  const tempArg = args[0]

  // Check for argument
  if (!args.length) {
    console.log('butts')
    throw new Error('You are missing your argument')
  }

  if (program.celsius) {
    // Convert f to c
    convertFtoC(tempArg).then(deg => process.stdout.write(deg.toString()))
  } else if (program.fahrenheit) {
    // Convert c to f
    convertCtoF(tempArg).then(deg => process.stdout.write(deg.toString()))
  }
}

init()
