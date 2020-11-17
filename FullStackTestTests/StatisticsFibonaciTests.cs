using FullStackTest.Services;
using NUnit.Framework;

namespace FullStackTestTests
{
    public class StatisticsFibonaciTests
    {
        StatisticsService _statisticsService;
        [SetUp]
        public void Setup() => _statisticsService = new StatisticsService();

        [Test]
        public void Fibonacci0()
        {
            Assert.AreEqual(_statisticsService.Fibonacci(1), 0);

        }
        [Test]
        public void Fibonacci1()
        {
            Assert.AreEqual(_statisticsService.Fibonacci(1), 1);
        }

        [Test]
        public void Fibonacci2()
        {
            Assert.AreEqual(_statisticsService.Fibonacci(2), 1);
        }

        [Test]
        public void Fibonaccic5()
        {
            Assert.AreEqual(_statisticsService.Fibonacci(5), 5);
        }

        [Test]
        public void Fibonacci10()
        {
            Assert.AreEqual(_statisticsService.Fibonacci(10), 55);
        }

        [Test]
        public void Fibonacci50()
        {
            Assert.AreEqual(_statisticsService.Fibonacci(50), 12586269025);
        }

    }
}