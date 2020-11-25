using FullStackTest.Services;
using NUnit.Framework;

namespace FullStackTestTests
{
    public class StatisticsTests_Median
    {
        private StatisticsService _statisticsService;

        [SetUp]
        public void Setup() => _statisticsService = new StatisticsService();

        [Test]
        public void PositiveNumbers()
        {
            var input = new[] { 1, 2, 3, 4, 5 };
            float expected = 3;
            Assert.AreEqual(_statisticsService.Median(input), expected);
        }

        [Test]
        public void NegativeNumbers()
        {
            var input = new[] { -5, -3, -1 };
            float expected = -3;
            Assert.AreEqual(_statisticsService.Median(input), expected);
        }

        [Test]
        public void SingleInput()
        {
            var input = new[] { 3 };
            float expected = 3;
            Assert.AreEqual(_statisticsService.Median(input), expected);
        }

        [Test]
        public void LargeNumbers()
        {
            var input = new[] { -2000000000, 2000000000 };
            float expected = 0;
            Assert.AreEqual(_statisticsService.Median(input), expected);
        }

        [Test]
        public void SplitMedianWholeNumber()
        {
            var input = new[] { 1, 2, 4, 5 };
            float expected = 3;
            Assert.AreEqual(_statisticsService.Median(input), expected);
        }

        [Test]
        public void SplitMedianFloat()
        {
            var input = new[] { 1, 2, 3, 4 };
            float expected = 2.5f;
            Assert.AreEqual(_statisticsService.Median(input), expected);
        }
    }
}
