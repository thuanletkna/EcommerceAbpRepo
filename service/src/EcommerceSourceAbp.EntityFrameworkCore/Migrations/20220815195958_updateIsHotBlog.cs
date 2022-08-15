using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class updateIsHotBlog : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isHot",
                table: "AppBlogs",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isHot",
                table: "AppBlogs");
        }
    }
}
