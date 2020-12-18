using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HomeProjectTracker.Models
{
    public enum UserType
    {
        system,
        real
    }
    public class User
    {
        [Key]
        public int Id { get; set; }
        
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public UserType UserType { get; set; } = UserType.real;
    }
}