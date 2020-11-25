using FullStackTest.Services;
using NUnit.Framework;

namespace FullStackTestTests
{
    public class StatisticsTests_DistinctNumbers
    {
        private StatisticsService _statisticsService;

        [SetUp]
        public void Setup() => _statisticsService = new StatisticsService();

        [Test]
        public void PositiveNumbers()
        {
            var input = new[] { 3, 3, 3, 2, 2, 1, 1, 1, 5, 5, 6, 7, 6, 5 };
            var expected = new[] { 1, 2, 3, 5, 6, 7 };
            Assert.AreEqual(expected, _statisticsService.DistinctNumbers(input));
        }

        [Test]
        public void NegativeNumbers()
        {
            var input = new[] { -5, -5, -3, -2, -1 };
            var expected = new[] { -5, -3, -2, -1 };
            Assert.AreEqual(expected, _statisticsService.DistinctNumbers(input));
        }

        [Test]
        public void MixedNumbers()
        {
            var input = new[] { -5, -5, -4, 0, 0, 0, 100, 200, 200, 300, -1000, -1000, -1000 };
            var expected = new[] { -1000, -5, -4, 0, 100, 200, 300 };
            Assert.AreEqual(expected, _statisticsService.DistinctNumbers(input));
        }

        [Test]
        public void AllDistinct ()
        {
            var input = new[] { 1, 2, 3, 4, 5 };
            var expected = new[] { 1, 2, 3, 4, 5 };
            Assert.AreEqual(expected, _statisticsService.DistinctNumbers(input));
        }

        [Test]
        public void SingleInput()
        {
            var input = new[] { 10000 };
            var expected = new[] { 10000 };
            Assert.AreEqual(expected, _statisticsService.DistinctNumbers(input));
        }
    }
}
