using FullStackTest.Services;
using NUnit.Framework;

namespace FullStackTestTests
{
    public class StatisticsMeanTests
    {
        private int[] InputA() => new[] { 3, 3, 2, 1, 1 };
        private int[] InputB() => new[] { 1, 2, 3, 4, 5 };
        private int[] InputC() => new[] { -5, -1 };
        private int[] InputD() => new[] { -2000000000, 2000000000 };
        StatisticsService _statisticsService;
        [SetUp]
        public void Setup() => _statisticsService = new StatisticsService();

        [Test]
        public void MeanWillReturnZeroWhenEmptyArray()
        {
            Assert.AreEqual(_statisticsService.Mean(new int[] { }), 0);
        }

        [Test]
        public void MeanInputA()
        {
            Assert.AreEqual(_statisticsService.Mean(InputA()), 2);
        }

        [Test]
        public void MeanInputB()
        {
            Assert.AreEqual(_statisticsService.Mean(InputB()), 4);
        }

        [Test]
        public void MeanInputC()
        {
            Assert.AreEqual(_statisticsService.Mean(InputC()), -3);
        }

        [Test]
        public void MeanInputD()
        {
            Assert.AreEqual(_statisticsService.Mean(InputD()), 0);
        }

    }
}