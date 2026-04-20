#!/usr/bin/env node
/**
 * CLI Calculator
 * Supported operations:
 * - addition (add, +)
 * - subtraction (subtract, -)
 * - multiplication (multiply, *)
 * - division (divide, /)
 *
 * Usage examples:
 *   node src/calculator.js add 2 3      # => 5
 *   node src/calculator.js divide 10 2  # => 5
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function printUsage() {
  console.error('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.error('Operations: add (+), subtract (-), multiply (*), divide (/)');
}

// CLI entrypoint
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length !== 3) {
    printUsage();
    process.exit(1);
  }

  const [op, aStr, bStr] = args;
  const a = Number(aStr);
  const b = Number(bStr);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Both operands must be valid numbers');
    process.exit(1);
  }

  try {
    let result;
    switch (op) {
      case 'add':
      case '+':
        result = add(a, b);
        break;
      case 'subtract':
      case '-':
        result = subtract(a, b);
        break;
      case 'multiply':
      case '*':
        result = multiply(a, b);
        break;
      case 'divide':
      case '/':
        result = divide(a, b);
        break;
      default:
        printUsage();
        process.exit(1);
    }

    // Print numeric result
    if (Number.isFinite(result)) {
      console.log(result);
    } else {
      console.error('Result is not a finite number');
      process.exit(1);
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide };
