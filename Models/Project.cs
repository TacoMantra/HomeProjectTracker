using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HomeProjectTracker.Models
{
    public enum ProjectStatus
    {
        pending,
        started,
        abandoned,
        complete
    }

    public class Project
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public User User { get; set; }

        public ProjectStatus Status { get; set; } = ProjectStatus.pending;
    }
}