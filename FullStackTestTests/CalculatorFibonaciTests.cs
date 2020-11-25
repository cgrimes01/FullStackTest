using FullStackTest.Services;
using NUnit.Framework;

namespace FullStackTestTests
{
    public class CalculatorServiceFibonaciTests
    {
        private CalculatorService _calculatorService;
        [SetUp]
        public void Setup() => _calculatorService = new CalculatorService();

        [Test]
        public void Fibonacci0()
        {
            var input = 0;
            var expected = 0;
            Assert.AreEqual(expected, _calculatorService.Fibonacci(input));
        }

        [Test]
        public void Fibonacci1()
        {
            var input = 1;
            var expected = 1;
            Assert.AreEqual(expected, _calculatorService.Fibonacci(input));
        }

        [Test]
        public void Fibonacci2()
        {
            var input = 2;
            var expected = 1;
            Assert.AreEqual(expected, _calculatorService.Fibonacci(input));
        }

        [Test]
        public void Fibonaccic5()
        {
            var input = 5;
            var expected = 5;
            Assert.AreEqual(expected, _calculatorService.Fibonacci(input));
        }

        [Test]
        public void Fibonacci10()
        {
            var input = 10;
            var expected = 55;
            Assert.AreEqual(expected, _calculatorService.Fibonacci(input));
        }

        [Test]
        public void Fibonacci50()
        {
            var input = 50;
            var expected = 12586269025;
            Assert.AreEqual(expected, _calculatorService.Fibonacci(input));
        }
    }
}