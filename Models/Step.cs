using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HomeProjectTracker.Models
{
    public class Step
    {
        [Key]
        public int Id { get; set; }

        public int Order { get; set; }

        public string Description { get; set; }

        public int DurationInMinutes { get; set; }

        public bool Completed { get; set; } = false;

        public Project Project { get; set; }
    }
}