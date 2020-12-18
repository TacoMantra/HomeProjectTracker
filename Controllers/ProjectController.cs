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
    public class ProjectController : ControllerBase
    {
        private readonly ILogger<ProjectController> _logger;

        private readonly HomeProjectTrackerDbConnection db = new HomeProjectTrackerDbConnection();

        public ProjectController(ILogger<ProjectController> logger)
        {
            _logger = logger;
        }

        /// <summary>Returns a project by id./summary>
        /// <param name="projectId">the project's id</param>
        /// <returns>A single project entity.</returns>
        [HttpGet("projectId/{projectId}")]
        public ActionResult<Project> GetProject(int projectId)
        {
            try
            {
                return db.Projects.Find(projectId);
            }
            catch
            {
                _logger.LogError($"Project with id {projectId} not found.");
                return StatusCode(500);
            }
        }

        /// <summary>Creates a new project.</summary>
        /// <returns>int: the new project's id</returns>
        /// [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPost("NewProject/{userId}")]
        public ActionResult<int> NewProject(int userId)
        {
            try
            {
                var user = db.Users.Find(userId);
                var newProject = new Project()
                {
                    User = user
                };
                var projectEntity = db.Projects.Add(newProject);
                db.SaveChanges();
                return projectEntity.Id;
            }
            catch
            {
                _logger.LogError($"Unable to create project for user {userId}.");
                return StatusCode(500);
            }
        }

        /// <summary>Clones an existing project.</summary>
        /// <returns>int: the cloned project's id</returns>
        [HttpPost("CloneProject/{projectId}")]
        public ActionResult<int> CloneProject(int projectId)
        {
            try
            {
                var project = db.Projects.Find(projectId);
                var clone = db.Projects.Add(project);
                return clone.Id;
            }
            catch
            {
                _logger.LogError($"Unable to clone project {projectId}");
                return StatusCode(500);
            }
        }
    };
}
