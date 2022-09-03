using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class updateBlogDetail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppBlogFiles_AppProductAffilates_ProductAffilateId",
                table: "AppBlogFiles");

            migrationBuilder.DropIndex(
                name: "IX_AppBlogFiles_ProductAffilateId",
                table: "AppBlogFiles");

            migrationBuilder.DropColumn(
                name: "ProductAffilateId",
                table: "AppBlogFiles");

            migrationBuilder.AddColumn<string>(
                name: "Details",
                table: "AppBlogDetails",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Details",
                table: "AppBlogDetails");

            migrationBuilder.AddColumn<Guid>(
                name: "ProductAffilateId",
                table: "AppBlogFiles",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppBlogFiles_ProductAffilateId",
                table: "AppBlogFiles",
                column: "ProductAffilateId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppBlogFiles_AppProductAffilates_ProductAffilateId",
                table: "AppBlogFiles",
                column: "ProductAffilateId",
                principalTable: "AppProductAffilates",
                principalColumn: "Id");
        }
    }
}
