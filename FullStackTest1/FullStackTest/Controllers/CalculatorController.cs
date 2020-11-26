using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FullStackTest.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FullStackTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CalculatorController : ControllerBase
    {
        private readonly ICalculatorService _statisticsService;

        public CalculatorController(ICalculatorService calculatorService)
        {
            _statisticsService = calculatorService;
        }

        [HttpGet("fibonacci")]
        public IActionResult Fibonacci([FromQuery] int input)
        {
            var fibResult = _statisticsService.Fibonacci(input);
            return Ok(fibResult);
        }
    }

}
