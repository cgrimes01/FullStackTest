using FullStackTest.Services.Statistics;

namespace FullStackTest.Services
{
    public class StatisticsService : IStatisticsService
    {
        public float Mean(int[] inputs)
        {
            return Calculations.Mean(inputs);
        }

        public int[] Mode(int[] inputs)
        {
            return Calculations.Mode(inputs);
        }

        public float Median(int[] inputs)
        {
            return Calculations.Median(inputs);
        }

        public int[] DistinctNumbers(int[] inputs)
        {
            return Calculations.DistinctNumbers(inputs);
        }

        public long Range(int[] inputs)
        {
            return Calculations.Range(inputs);
        }
    }
}
