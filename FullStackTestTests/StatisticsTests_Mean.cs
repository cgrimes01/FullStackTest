using FullStackTest.Services;
using NUnit.Framework;

namespace FullStackTestTests
{
    public class StatisticsTests_Mean
    {
        private StatisticsService _statisticsService;

        [SetUp]
        public void Setup() => _statisticsService = new StatisticsService();

        [Test]
        public void StandardRange()
        {
            var input = new[] { -400, 1, 200, 1000 };
            float expected = 200.25f;
            Assert.AreEqual(expected, _statisticsService.Mean(input));
        }

        [Test]
        public void PositiveNumbers()
        {
            var input = new[] { 1, 2, 3, 4, 5 };
            float expected = 3;
            Assert.AreEqual(expected, _statisticsService.Mean(input));
        }

        [Test]
        public void NegativeNumbers()
        {
            var input = new[] { -5, -1 };
            float expected = -3;
            Assert.AreEqual(expected, _statisticsService.Mean(input));
        }

        [Test]
        public void SingleInput ()
        {
            var input = new[] { 3 };
            float expected = 3;
            Assert.AreEqual(expected, _statisticsService.Mean(input));
        }

        [Test]
        public void LargeNumbers()
        {
            var input = new[] { -2000000000, 2000000000 };
            float expected = 0;
            Assert.AreEqual(expected, _statisticsService.Mean(input));
        }
    }
}
