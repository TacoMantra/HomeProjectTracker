namespace HomeProjectTracker.Migrations
{
    using HomeProjectTracker.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Data.Entity.Validation;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<HomeProjectTracker.Models.HomeProjectTrackerDbConnection>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(HomeProjectTracker.Models.HomeProjectTrackerDbConnection context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.
            var systemUser = new User
            {
                FirstName = "DIY",
                LastName = "Tracker",
                UserType = 0
            };

            var replaceOutletCover = new Project
            {
                User = systemUser,
                Name = "Replace Outlet Cover",
                Description = "Dress up that dingy old outlet with a brand new cover."
            };

            var outletCover = new Material
            {
                Name = "Outlet cover",
                Price = 2.99,
                SingleUnits = "Cover",
                PluralUnits = "Covers"
            };

            var flatHeadScrewdriver = new Tool
            {
                Name = "Flat head screwdriver",
                Price = 8.99
            };

            var shutDownPower = new Step
            {
                Order = 1,
                Description = "Shut off power to the outlet from your breaker box.",
                Project = replaceOutletCover,
                DurationInMinutes = 1
            };

            var removeOldCover = new Step
            {
                Order = 2,
                Description = "Using your flat head screwdriver, remove the screw attaching the cover to the outlet. Gently pry away the cover.",
                Project = replaceOutletCover,
                DurationInMinutes = 1
            };

            var placeNewCover = new Step
            {
                Order = 3,
                Description = "Line up the new outlet cover over the outlet. Attach the screw with the flathead screwdriver, being careful not to over-tighten.",
                Project = replaceOutletCover,
                DurationInMinutes = 1
            };

            var restorePower = new Step
            {
                Order = 4,
                Description = "Restore power to the outlet from the breaker box.",
                Project = replaceOutletCover,
                DurationInMinutes = 1
            };

            try
            {
                context.Users.AddOrUpdate(systemUser);
                context.Projects.AddOrUpdate(replaceOutletCover);
                context.Materials.AddOrUpdate(outletCover);
                context.Tools.AddOrUpdate(flatHeadScrewdriver);
                context.Steps.AddOrUpdate(
                    shutDownPower,
                    removeOldCover,
                    placeNewCover,
                    restorePower
                );
                context.ProjectMaterials.AddOrUpdate(
                    new ProjectMaterial
                    {
                        Item = outletCover,
                        Project = replaceOutletCover,
                        Quantity = 1
                    }
                );
                context.ProjectTools.AddOrUpdate(
                    new ProjectTool
                    {
                        Item = flatHeadScrewdriver,
                        Project = replaceOutletCover
                    }
                );

                context.SaveChanges();
            }
            catch (DbEntityValidationException exception)
            {
                foreach (var error in exception.EntityValidationErrors)
                {
                    var entityName = error.Entry.Entity.GetType().Name;
                    Console.WriteLine($"Error with entity {0}, attempting to change value from \"{1}\" to \"{2}\"",
                        entityName,
                        error.Entry.OriginalValues[entityName],
                        error.Entry.CurrentValues[entityName]);

                    if (error.ValidationErrors.Count > 0)
                    {
                        Console.WriteLine("The following validation errors were encountered:");
                        foreach (var validationError in error.ValidationErrors)
                        {
                            Console.WriteLine(validationError.ToString());
                        }
                    }
                }
            }
            finally
            {
                Console.WriteLine("Migration complete, seed data has been updated.");
            }
        }
    }
}
