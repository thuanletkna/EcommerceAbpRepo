using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class updateIsHotBlogEnum : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "isHot",
                table: "AppBlogs",
                type: "int",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "isHot",
                table: "AppBlogs",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
