using HomeProjectTracker.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace HomeProjectTracker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DashboardController : ControllerBase
    {
        private readonly ILogger<DashboardController> _logger;

        private readonly HomeProjectTrackerDbConnection db = new HomeProjectTrackerDbConnection();

        public DashboardController(ILogger<DashboardController> logger)
        {
            _logger = logger;
        }

        /// <summary> Returns all projects for a given user./summary>
        /// <param name="userId">the user's id</param>
        /// <returns>An enumerable list of project entities.</returns>
        [HttpGet("userId/{userId}")]
        public ActionResult<IEnumerable<Project>> GetProjectsForUser(int userId)
        {
            try
            {
                return db.Projects.Where(p => p.User.Id == userId).ToList();
            }
            catch
            {
                _logger.LogError($"Unable to find projects for user {userId}");
                return StatusCode(404);
            }
        }
    }
}
