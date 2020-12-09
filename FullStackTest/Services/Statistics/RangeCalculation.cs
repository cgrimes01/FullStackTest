using System;

namespace FullStackTest.Services.Statistics
{
    public static partial class Calculations
    {
        public static long Range(int[] inputs)
        {
            /*
                Return the difference between the largest and smallest number in a given set. 
            */
            int minimum = 0;
            int maximum = 0;
            foreach (int i in inputs)
            {
                if (i < minimum)
                    minimum = i;
                else if (i > maximum)
                    maximum = i;
            }
            return maximum - minimum;
        }
    } 
}
