using System;
using System.ComponentModel.DataAnnotations;

namespace HomeProjectTracker.Models
{
    public class Tool : IItem
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public double Price { get; set; }
    }
}