using FullStackTest.Services;
using NUnit.Framework;

namespace StatisticsTests
{
    public class Range
    {
        private StatisticsService _statisticsService;

        [SetUp]
        public void Setup() => _statisticsService = new StatisticsService();

        [Test]
        public void StandardSet()
        {
            var input = new[] { -10, 0, 1, 2, 3, 4, -5, -8, 5 };
            long expected = 5 - -10;
            Assert.AreEqual(expected, _statisticsService.Range(input));
        }

        [Test]
        public void PositiveNumbers()
        {
            var input = new[] { 1, 2, 3, 4, 5 };
            long expected = 4;
            Assert.AreEqual(expected, _statisticsService.Range(input));
        }

        [Test]
        public void NegativeNumbers()
        {
            var input = new[] { -500, -150, -100, - 200 };
            long expected = -100 - -500;
            Assert.AreEqual(expected, _statisticsService.Range(input));
        }

        [Test]
        public void LargeNumbers()
        {
            var input = new[] { -2000000000, 2000000000 };
            long expected = 4000000000;
            Assert.AreEqual(expected, _statisticsService.Range(input));
        }

        [Test]
        public void SingleInput ()
        {
            var input = new[] { 100 };
            long expected = 0;
            Assert.AreEqual(expected, _statisticsService.Range(input));
        }
    }
}
