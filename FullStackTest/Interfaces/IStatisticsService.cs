namespace FullStackTest.Services
{
    public interface IStatisticsService
    {
        float Mean(int[] inputs);
        int[] Mode(int[] inputs);
        float Median(int[] inputs);
        int[] DistinctNumbers(int[] inputs);
    }
}