namespace HomeProjectTracker.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeedInitialData : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Materials",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Price = c.Double(nullable: false),
                        SingleUnits = c.String(),
                        PluralUnits = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.ProjectMaterials",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Quantity = c.Int(nullable: false),
                        Project_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Projects", t => t.Project_Id)
                .Index(t => t.Project_Id);
            
            CreateTable(
                "dbo.Projects",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        Status = c.Int(nullable: false),
                        User_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.User_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        UserType = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.ProjectTools",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Project_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Projects", t => t.Project_Id)
                .Index(t => t.Project_Id);
            
            CreateTable(
                "dbo.Steps",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Order = c.Int(nullable: false),
                        Description = c.String(),
                        DurationInMinutes = c.Int(nullable: false),
                        Completed = c.Boolean(nullable: false),
                        Project_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Projects", t => t.Project_Id)
                .Index(t => t.Project_Id);
            
            CreateTable(
                "dbo.Tools",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Price = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Steps", "Project_Id", "dbo.Projects");
            DropForeignKey("dbo.ProjectTools", "Project_Id", "dbo.Projects");
            DropForeignKey("dbo.ProjectMaterials", "Project_Id", "dbo.Projects");
            DropForeignKey("dbo.Projects", "User_Id", "dbo.Users");
            DropIndex("dbo.Steps", new[] { "Project_Id" });
            DropIndex("dbo.ProjectTools", new[] { "Project_Id" });
            DropIndex("dbo.Projects", new[] { "User_Id" });
            DropIndex("dbo.ProjectMaterials", new[] { "Project_Id" });
            DropTable("dbo.Tools");
            DropTable("dbo.Steps");
            DropTable("dbo.ProjectTools");
            DropTable("dbo.Users");
            DropTable("dbo.Projects");
            DropTable("dbo.ProjectMaterials");
            DropTable("dbo.Materials");
        }
    }
}
