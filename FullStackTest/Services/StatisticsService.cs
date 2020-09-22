using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FullStackTest.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FullStackTest.Services
{
    public class StatisticsService: IStatisticsService
    {
        public int Sum(int[] inputs)
        {
            throw new NotImplementedException();
        }

        public int Mean(int[] inputs) 
        {
            throw new NotImplementedException();
        }

        public int Range(int[] inputs)
        {
            throw new NotImplementedException();
        }
    }
}
