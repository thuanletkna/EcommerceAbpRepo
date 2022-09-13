using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class updateBlogFile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppBlogFiles_AppProducts_ProductId",
                table: "AppBlogFiles");

            migrationBuilder.DropIndex(
                name: "IX_AppBlogFiles_ProductId",
                table: "AppBlogFiles");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "AppBlogFiles");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ProductId",
                table: "AppBlogFiles",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppBlogFiles_ProductId",
                table: "AppBlogFiles",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppBlogFiles_AppProducts_ProductId",
                table: "AppBlogFiles",
                column: "ProductId",
                principalTable: "AppProducts",
                principalColumn: "Id");
        }
    }
}
