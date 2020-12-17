using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace HomeProjectTracker.Models
{
    public class HomeProjectTrackerDbConnection : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public HomeProjectTrackerDbConnection() : base("HomeProjectTrackerDbConnection")
        {
        }

        public System.Data.Entity.DbSet<HomeProjectTracker.Models.Material> Materials { get; set; }

        public System.Data.Entity.DbSet<HomeProjectTracker.Models.Project> Projects { get; set; }

        public System.Data.Entity.DbSet<HomeProjectTracker.Models.ProjectMaterial> ProjectMaterials { get; set; }

        public System.Data.Entity.DbSet<HomeProjectTracker.Models.ProjectTool> ProjectTools { get; set; }

        public System.Data.Entity.DbSet<HomeProjectTracker.Models.Step> Steps { get; set; }

        public System.Data.Entity.DbSet<HomeProjectTracker.Models.Tool> Tools { get; set; }

        public System.Data.Entity.DbSet<HomeProjectTracker.Models.User> Users { get; set; }
    }
}
