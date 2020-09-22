using FullStackTest.Services;
using NUnit.Framework;

namespace FullStackTestTests
{
    public class Tests
    {
        private int[] InputA() => new[] { 3, 3, 2, 1, 1 };
        private int[] InputB() => new[] { 1, 2, 3, 4, 5 };
        private int[] InputC() => new[] { -5, -1 };
        private int[] InputD() => new[] { -2000000000, 2000000000 };
        StatisticsService _statisticsService;
        [SetUp]
        public void Setup() => _statisticsService = new StatisticsService();

        [Test]
        public void SumWillReturnZeroWhenEmptyArray()
        {
            Assert.AreEqual(_statisticsService.Sum(new int[] { }), 0);
        }

        [Test]
        public void SumInputA()
        {
            Assert.AreEqual(_statisticsService.Sum(InputA()), 10);
        }

        [Test]
        public void SumInputC()
        {
            Assert.AreEqual(_statisticsService.Sum(InputC()), -6);
        }

        [Test]
        public void SumInputD()
        {
            Assert.AreEqual(_statisticsService.Sum(InputD()), 0);
        }

        [Test]
        public void RangeInputA()
        {
            Assert.AreEqual(_statisticsService.Range(InputA()), 2);
        }

        [Test]
        public void MedianInputB()
        {
            Assert.AreEqual(_statisticsService.Range(InputB()), 4);
        }

        [Test]
        public void MedianInputC()
        {
            Assert.AreEqual(_statisticsService.Range(InputC()), 4);
        }

        [Test]
        public void MedianInputD()
        {
            Assert.AreEqual(_statisticsService.Range(InputD()), 4000000000);
        }

        [Test]
        public void MeanInputA()
        {
            Assert.AreEqual(_statisticsService.Mean(InputA()), 2);
        }

        [Test]
        public void MeanInputB()
        {
            Assert.AreEqual(_statisticsService.Mean(InputB()), 3);
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