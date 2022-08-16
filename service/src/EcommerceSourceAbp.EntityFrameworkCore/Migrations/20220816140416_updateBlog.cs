using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class updateBlog : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsHot",
                table: "AppProducts",
                newName: "isHot");

            migrationBuilder.AlterColumn<int>(
                name: "isHot",
                table: "AppProducts",
                type: "int",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AddColumn<Guid>(
                name: "BlogId",
                table: "AppNewsTags",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "CategoryId",
                table: "AppBlogs",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Slug",
                table: "AppBlogs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppNewsTags_BlogId",
                table: "AppNewsTags",
                column: "BlogId");

            migrationBuilder.CreateIndex(
                name: "IX_AppBlogs_CategoryId",
                table: "AppBlogs",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppBlogs_AppCategories_CategoryId",
                table: "AppBlogs",
                column: "CategoryId",
                principalTable: "AppCategories",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AppNewsTags_AppBlogs_BlogId",
                table: "AppNewsTags",
                column: "BlogId",
                principalTable: "AppBlogs",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppBlogs_AppCategories_CategoryId",
                table: "AppBlogs");

            migrationBuilder.DropForeignKey(
                name: "FK_AppNewsTags_AppBlogs_BlogId",
                table: "AppNewsTags");

            migrationBuilder.DropIndex(
                name: "IX_AppNewsTags_BlogId",
                table: "AppNewsTags");

            migrationBuilder.DropIndex(
                name: "IX_AppBlogs_CategoryId",
                table: "AppBlogs");

            migrationBuilder.DropColumn(
                name: "BlogId",
                table: "AppNewsTags");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "AppBlogs");

            migrationBuilder.DropColumn(
                name: "Slug",
                table: "AppBlogs");

            migrationBuilder.RenameColumn(
                name: "isHot",
                table: "AppProducts",
                newName: "IsHot");

            migrationBuilder.AlterColumn<bool>(
                name: "IsHot",
                table: "AppProducts",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
