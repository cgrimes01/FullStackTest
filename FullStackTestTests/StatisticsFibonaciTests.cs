using FullStackTest.Services;
using NUnit.Framework;

namespace FullStackTestTests
{
    public class CalculatorServiceFibonaciTests
    {
        CalculatorService _calculatorService;
        [SetUp]
        public void Setup() => _calculatorService = new CalculatorService();

        [Test]
        public void Fibonacci0()
        {
            Assert.AreEqual(_calculatorService.Fibonacci(1), 0);

        }
        [Test]
        public void Fibonacci1()
        {
            Assert.AreEqual(_calculatorService.Fibonacci(1), 1);
        }

        [Test]
        public void Fibonacci2()
        {
            Assert.AreEqual(_calculatorService.Fibonacci(2), 1);
        }

        [Test]
        public void Fibonaccic5()
        {
            Assert.AreEqual(_calculatorService.Fibonacci(5), 5);
        }

        [Test]
        public void Fibonacci10()
        {
            Assert.AreEqual(_calculatorService.Fibonacci(10), 55);
        }

        [Test]
        public void Fibonacci50()
        {
            Assert.AreEqual(_calculatorService.Fibonacci(50), 12586269025);
        }

    }
}