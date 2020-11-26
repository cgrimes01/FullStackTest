using FullStackTest.Services;
using NUnit.Framework;

namespace StatisticsTests
{
    public class Mode
    {
        private StatisticsService _statisticsService;

        [SetUp]
        public void Setup() => _statisticsService = new StatisticsService();

        [Test]
        public void MixedNumbers_SingleMode()
        {
            var input = new[] { 1000, -100, 5, 11, 22, 5, 16, 5 };
            var expected = new[] { 5 };
            Assert.AreEqual(expected, _statisticsService.Mode(input));
        }

        [Test]
        public void NoDuplicates()
        {
            var input = new[] { 1, 2, 3, 4, 5 };
            var expected = new[] { 1, 2, 3, 4, 5 };
            Assert.AreEqual(expected, _statisticsService.Mode(input));
        }

        [Test]
        public void SingleInput()
        {
            var input = new[] { 3 };
            var expected = new[] { 3 };
            Assert.AreEqual(expected, _statisticsService.Mode(input));
        }

        [Test]
        public void LargeNumbers()
        {
            var input = new[] { -2000000000, 2000000000 };
            var expected = new[] { -2000000000, 2000000000 };
            Assert.AreEqual(expected, _statisticsService.Mode(input));
        }

        [Test]
        public void SingleRepeatedNumber()
        {
            var input = new[] { 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 };
            var expected = new[] { 4 };
            Assert.AreEqual(expected, _statisticsService.Mode(input));
        }
    }
}
