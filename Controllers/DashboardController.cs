using HomeProjectTracker.Models;
using Microsoft.AspNetCore.Mvc;
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
        private readonly HomeProjectTrackerDbConnection db = new HomeProjectTrackerDbConnection();

        [HttpGet("userId/{userId}")]
        public IEnumerable<Project> GetProjectsForUser(int userId)
        {
            var userProjects = db.Projects.Where(p => p.User.Id == userId).ToList();

            return userProjects;
        }
    }
}
